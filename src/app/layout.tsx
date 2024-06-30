import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamrul Hasan - Full Stack Developer",
  description: "Portfolio of Kamrul Hasan, a passionate Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-right" />
        <div className="sticky top-0 z-50 bg-[#121120] bg-opacity-5 backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-md">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
