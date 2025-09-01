import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "routiq — moderne Routen, modernes Web",
    template: "%s — routiq",
  },
  description: "Schnelle, moderne Web-Erlebnisse mit sanfter Motion und Glow.",
  metadataBase: new URL("https://routiq.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}>
        <AppProviders>
          <Header />
          <main className="mx-auto w-full max-w-6xl px-4 flex-1">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
