import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Centreline Build | Nelson Builders", template: "%s | Centreline Build" },
  description: "Quality new builds, renovations, kitchens, bathrooms, decks and fences across Nelson and Tasman.",
  keywords: ["Nelson builder", "Tasman builder", "new builds", "home renovations", "kitchen renovations", "bathroom renovations"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} data-scroll-behavior="smooth">
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
