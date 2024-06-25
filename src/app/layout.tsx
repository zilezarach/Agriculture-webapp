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

const layout = () => {
return (
  <html>
  <body>
  <div className="flex flex-col min-h-screen">
  <Navbar/>
  <Introduction/>
  <AboutUs/>
  <Footer/>
  </div>
  </body>
  </html>
)}


export default layout;
