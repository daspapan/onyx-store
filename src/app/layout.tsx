import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSetupContextProvider from "@/components/ClientSetupContextProvider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSetupContextProvider>
          <NavBar className="p-2 bg-gray-800 text-white border-spacing-1" />
          {children}
        </ClientSetupContextProvider>
      </body>
    </html>
  );
}
