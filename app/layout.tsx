import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";
import { Nunito, Sacramento } from "next/font/google";

const NunitoFont = Nunito({
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

const SacramentoFont = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

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
      <body
        className={NunitoFont.className}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
