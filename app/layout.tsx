import type { Metadata } from "next";
import { Geist, Geist_Mono, Hedvig_Letters_Serif, IBM_Plex_Sans } from "next/font/google";
import ResponsiveNav from "@/components/layout/ResponsiveNav";
import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Atlanta Life Insurance Company",
  description: "ALIC Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} ${hedvigLettersSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-alic-navy">
        <ResponsiveNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
