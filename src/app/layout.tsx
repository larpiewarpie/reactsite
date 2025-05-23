import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import { GradientContainer } from "@/components/ui/gContainer";

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "homicide.lol",
  description: "homicide.lol homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <meta name="darkreader-lock" />
      <body
        className={`${kodeMono.variable} antialiased w-screen h-screen bg-background text-foreground`}
      >$
        <GradientContainer />
        {children}
      </body>
    </html>
  );
}
