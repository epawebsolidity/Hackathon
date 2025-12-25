import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { generateTokens } from "../middleware/generate.token";
import db from "../models";
import { verifyMessage } from "ethers";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { address, signature } = req.body;
    const nonce = (req.session as any).nonce;

    if (!nonce) {
      return res.status(400).json({ message: "Nonce not found" });
    }

    const signer = verifyMessage(nonce, signature);

    if (signer.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ message: "Invalid signature" });
    }

    let addressRecord = await db.Address.findOne({ where: { address } });

    if (!addressRecord) {
      addressRecord = await db.Address.create({
        address,
        status_address: true,
      });
    }

    let user = await db.User.findOne({
      where: { id_address: addressRecord.id_address },
    });

    if (!user) {
      const role = await db.Role.findOne({ where: { role: "Users" } });
      if (!role) throw new Error("Role Users not found");

      user = await db.User.create({
        id_address: addressRecord.id_address,
        id_role: role.id_role,
        first_name: "",
        last_name: "",
        birth_years: null,
        country: "",
        jenis_kelamin: null,
        bio: "",
      });
    }

    const userRole = await db.Role.findByPk(user.id_role);

    const { accessToken, refreshToken } = generateTokens(
      user.id_users,
      addressRecord.id_address,
      userRole!.role
    );

    (req.session as any).refreshToken = refreshToken;
    delete (req.session as any).nonce;

    return res.json({
      message: "Login success",
      accessToken,
      user: {
        userId: user.id_users,
        addressId: addressRecord.id_address,
        addressWallet: addressRecord.address,
        role: userRole!.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  }
};

export const getNonce = (req: Request, res: Response) => {
  const nonce = crypto.randomUUID();

  // simpan nonce di session
  (req.session as any).nonce = nonce;

  return res.json({ nonce });
};

export const refreshToken = (req: Request, res: Response) => {
  const storedToken = (req.session as any).refreshToken;

  if (!storedToken) {
    return res.status(401).json({ message: "No refresh token" });
  }

  try {
    const payload = jwt.verify(
      storedToken,
      process.env.REFRESH_TOKEN_SECRET || "refresh_secret"
    ) as { userId: string; addressId: string; role?: string };

    const { accessToken, refreshToken } = generateTokens(
      payload.userId,
      payload.addressId,
      payload.role as string
    );

    (req.session as any).refreshToken = refreshToken;

    return res.json({ accessToken });
  } catch {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};
