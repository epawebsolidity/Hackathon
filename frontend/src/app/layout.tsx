import "./globals.css";
import Providers from "./providers";

export const metadata = { title: "Base Education" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
