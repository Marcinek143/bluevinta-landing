import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Blue Vinta Services | Spedycja międzynarodowa i agencja celna",
  description:
    "Kompleksowa spedycja międzynarodowa, odprawy celne i doradztwo logistyczne dla firm w Polsce i Europie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} ${plex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
