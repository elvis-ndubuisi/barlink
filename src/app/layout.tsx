import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { UIProvider } from "./contexts/ui-provider";
import "./globals.css";

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${quickSand.variable} font-sans font-normal`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
