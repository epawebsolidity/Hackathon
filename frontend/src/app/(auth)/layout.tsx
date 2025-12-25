import { WalletProvider } from "@/context/WalletContext";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700">
      <WalletProvider>{children}</WalletProvider>
    </div>
  );
}
