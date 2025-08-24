import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Be Efficace - Navigate Complexity with Flow",
  description: "A guide to navigating complexity with the grace of flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans bg-linen text-gray-800 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
