import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "piRstone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-12">
          <div className="w-full max-w-6xl">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
