"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWallet } from "@/context/WalletContext";

export default function SignIn() {
  const { isConnected, address } = useWallet();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white">
        <div className="p-8 flex flex-col gap-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black">
              Sign in with Wallet
            </h1>
            <p className="mt-2 text-sm text-black">
              Connect your wallet to continue
            </p>
          </div>

          {/* Connect Button */}
          <div className="flex flex-col items-center gap-2">
            <ConnectButton />
            {isConnected && (
              <p className="text-sm text-gray-600">Connected: {address}</p>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-black">Web3 Auth</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-white/40">
            By connecting a wallet, you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>
          </p>
        </div>
      </div>
    </div>
  );
}
