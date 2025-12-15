import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "PetsOnDoge ($PETS) | The Future of Charity Crypto",
  description: "A decentralized movement funding animal welfare through the Solana blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0A0A0A] text-white antialiased selection:bg-yellow-500/30 selection:text-yellow-200`}>
        {children}
      </body>
    </html>
  );
}
