import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "React Now Dev",
    template: "%s | React Now Dev",
  },

  description:
    "Digital solutions for businesses, refugee-led organisations and enterprises across East Africa.",

  keywords: [
    "React Now Dev",
    "web development",
    "website development",
    "SEO",
    "branding",
    "digital strategy",
    "digital solutions",
    "Kenya",
    "Nairobi",
    "East Africa",
    "NGOs",
    "refugee-led organisations",
    "startups",
  ],

  authors: [
    {
      name: "React Now Dev",
    },
  ],

  creator: "React Now Dev",

  openGraph: {
    title: "React Now Dev",
    description:
      "Digital solutions for businesses, refugee-led organisations and enterprises across East Africa.",
    siteName: "React Now Dev",
    locale: "en_KE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
