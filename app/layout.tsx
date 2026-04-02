import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Nunito } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Semi_Condensed({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-barlow",
});

const nunito = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Blog — PinkMilk",
  description: "Stories and insights from PinkMilk Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${barlow.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-nunito">{children}</body>
    </html>
  );
}
