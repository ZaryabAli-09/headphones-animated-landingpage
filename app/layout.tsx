import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela, Poppins } from "next/font/google";
import MouseFollowerWrapper from "@/app/features/MouseFollower/MouseFollower";

import "./globals.css";

const valera = Varela({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYNC / VIBES",
  description:
    "Shop premium headphones, earbuds, and audio gear. Experience crystal-clear sound, deep bass, and unmatched comfort. Discover your perfect audio experience today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${valera.variable} ${poppins.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global mouse follower */}
        <MouseFollowerWrapper />
        {children}
      </body>
    </html>
  );
}
