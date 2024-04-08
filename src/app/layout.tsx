import DarkContextProvider from '@/context/darkmode-context';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from './components/header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Command Center",
  description: "The Dapp for all wallet integrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} bg-[#313131] text-gray-950 relative dark:bg-[#100f0f] dark:text-[#d6d6d6] `}>
        <DarkContextProvider>
      <Header />
        {children}
        </DarkContextProvider>
        </body>
        
    </html>
  );
}
