import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-fredoka" });

export const metadata: Metadata = {
  title: "PetsOnDoge ($PETS) | Helping Shelter Pets",
  description: "A Doge family crypto inspired by 'Do Only Good Everyday' ethos, funding food, care, and adoptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} font-sans bg-[#1a1a1a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
