import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import LatestUpdates from "@/components/UpdatePanel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NCC 2024 - 30th National Conference on Communications",
  description:
    "30th National Conference on Communications, jointly organized by IIT Madras & IIT Tirupati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <Navbar />
        <div className="flex-grow flex flex-col lg:flex-row">
          <main className="flex-grow p-4 order-2 lg:order-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
