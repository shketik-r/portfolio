import { Nunito } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const geistNunito = Nunito({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["cyrillic"],
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
        className={`${geistNunito.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
