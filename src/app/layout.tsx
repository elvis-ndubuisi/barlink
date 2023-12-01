import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { UIProvider } from "../contexts/ui-provider";
import "./globals.css";
import { NavHeader } from "@/components/nav-header";
import { PageFooter } from "@/components/page-footer";

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
    <html lang="en" className="light">
      <body
        className={`${quickSand.variable} font-sans font-normal bg-bg text-main min-h-screen`}
      >
        <UIProvider>
          <NavHeader />
          {children}
          <PageFooter />
        </UIProvider>
      </body>
    </html>
  );
}
