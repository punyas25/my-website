import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;