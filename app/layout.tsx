import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "100k Queries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black rounded-none">
      <body className="departure-mono bg-gray-900 text-green-400 min-h-screen p-4 rounded-none">
        <div className="mx-auto rounded-none">{children}</div>
      </body>
    </html>
  );
}
