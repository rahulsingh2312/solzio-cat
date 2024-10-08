import { WalletProvider } from "../components/wallets/WalletContextProvider"; // Ensure this is the correct import path
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const comicNeue = localFont({
  src: "./fonts/ComicNeue-Bold.ttf",
  variable: "--font-comic-neue",
});

const regularComicNeue = localFont({
  src: "./fonts/ComicNeue-Regular.ttf",
  variable: "--font-comic-neue-regular",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "$DBAS",
  description: "The Next Evolution in Deflationary Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.variable} antialiased scroll-smooth`}>
        <WalletProvider>{children}</WalletProvider>
        <Toaster />
      </body>
    </html>
  );
}
