import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import AboutUs from "@/components/aboutUs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Agriculture Resource Information Center",
  description: "Connecting Agriculture Stakeholders to knowledge",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}