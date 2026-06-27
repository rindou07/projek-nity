import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pusat Oleh-Oleh Niti 2",
  description: "Cita rasa autentik dari Niti 2 Purwokerto",
  manifest: "/manifest.json",
  themeColor: "#b45309",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col pt-16`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
