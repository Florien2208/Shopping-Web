import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const Pop = Poppins({ subsets: ["latin"], weight:["400", "700"] });

export const metadata: Metadata = {
  title: "Online-Marketing",
  description: "shopping online app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Pop.className}>{children}</body>
    </html>
  );
}
