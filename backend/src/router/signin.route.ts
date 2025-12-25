import { Router } from "express";
import * as signinController from "../controllers/signin.controllers";

const router = Router();

router.post("/", signinController.signIn);
router.get("/nonce", signinController.getNonce);
router.post("/refresh", signinController.refreshToken);

export default router;
