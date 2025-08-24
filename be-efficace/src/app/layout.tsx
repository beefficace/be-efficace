import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
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
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
