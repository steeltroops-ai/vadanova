import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VEDANOVA - AI-powered Ayurvedic Treatment Engine",
  description: "Ancient Healing. Intelligent Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased grid-lines min-h-screen`}>
        <ThemeProvider defaultTheme="light" storageKey="vedanova-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
