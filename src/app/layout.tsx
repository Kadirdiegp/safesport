import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatbotSection from "@/components/sections/ChatbotSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uni Projekt Showcase - Innovative Universitätsprojekte",
  description: "Entdecken Sie innovative Projekte und studentische Arbeiten, die an unserer Universität entwickelt werden.",
  keywords: "Universität, Projekte, Innovation, Studenten, Forschung, Technologie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatbotSection />
      </body>
    </html>
  );
}
