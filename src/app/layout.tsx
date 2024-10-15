import type { Metadata } from "next";
import { geistSans, geistMono } from "./fonts";
import "./styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carlos",
  description: "El rey Carlos d'España",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="container mx-auto py-16 px-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
