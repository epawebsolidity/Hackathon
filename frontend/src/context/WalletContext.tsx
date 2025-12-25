"use client";

import { createContext, useContext, useEffect } from "react";
import { useSignMessage, useAccount } from "wagmi";

type WalletContextType = {
  address?: string;
  isConnected: boolean;
};

const WalletContext = createContext<WalletContextType>({
  address: undefined,
  isConnected: false,
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();

  const { signMessageAsync } = useSignMessage();

  useEffect(() => {
    if (isConnected && address) {
      saveWallet(address);
    }
  }, [isConnected, address]);

  const saveWallet = async () => {
    try {
      // 1. ambil nonce
      const nonceRes = await fetch("http://localhost:8000/api/signin/nonce", {
        credentials: "include",
      });
      const { nonce } = await nonceRes.json();

      // 2. sign message (popup wallet)
      const signature = await signMessageAsync({
        message: nonce,
      });

      // 3. kirim ke backend
      const res = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          signature,
        }),
      });

      if (!res.ok) throw new Error("Signin failed");

      const data = await res.json();
      console.log("Login success:", data);
    } catch (err) {
      console.error("Failed to save wallet", err);
    }
  };

  return (
    <WalletContext.Provider value={{ address, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);
