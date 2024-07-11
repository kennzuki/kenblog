import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({ subsets: ["latin"],weight:['400','500','600','700'] });

export const metadata: Metadata = {
  title: "Ken blog",
  description: "Blog typescript mongo DB and next js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
