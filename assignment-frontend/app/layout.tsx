// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/header/top-bar";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { CartProvider } from "@/components/cart/cart-summary"; // 👈 Import
import { Toaster } from 'react-hot-toast'; // 👈 Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTC Academy E-commerce",
  description: "Turning Passion into Career",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider> {/* 👈 Wrap với CartProvider */}
          <TopBar />
          <Header />
          <main className="bg-gray-50">{children}</main>
          <Footer />
          <Toaster position="top-right" /> 
        </CartProvider>
      </body>
    </html>
  );
}