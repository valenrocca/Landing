import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dale Play Publishing",
    template: "%s · Dale Play Publishing",
  },
  description:
    "El hogar de los productores y compositores más importantes de habla hispana.",
  openGraph: {
    title: "Dale Play Publishing — Roster",
    description:
      "El hogar de los productores y compositores más importantes de habla hispana.",
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
