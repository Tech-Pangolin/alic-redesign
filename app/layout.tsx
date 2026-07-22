import type { Metadata } from "next";
import localFont from "next/font/local";
import ResponsiveNav from "@/components/layout/ResponsiveNav";
import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";

const mackinac = localFont({
  variable: "--font-mackinac",
  display: "swap",
  src: [
    {
      path: "../public/fonts/Mackinac Font Files/P22MackinacPro-Book_25.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mackinac Font Files/P22MackinacPro-Medium_26.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Mackinac Font Files/P22MackinacPro-Bold_16.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Mackinac Font Files/P22MackinacPro-ExtraBold_12.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

const commissioner = localFont({
  variable: "--font-commissioner",
  display: "swap",
  src: "../public/fonts/Commissioner-VariableFont_FLAR,VOLM,slnt,wght.ttf",
  weight: "100 900",
  style: "normal",
});

const dmMono = localFont({
  variable: "--font-dm-mono",
  display: "swap",
  src: [
    {
      path: "../public/fonts/DM Mono Font Files/DMMono-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/DM Mono Font Files/DMMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DM Mono Font Files/DMMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
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
      className={`${mackinac.variable} ${commissioner.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-alic-navy">
        <ResponsiveNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
