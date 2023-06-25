import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Auth from "@/components/Auth/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Blog",
  description: "Personal Blog Created With Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Auth>
      </body>
    </html>
  );
}
