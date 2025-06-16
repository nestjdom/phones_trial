import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/main.scss";
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhoneStore - Tienda de Teléfonos",
  description: "La mejor tienda online de smartphones con los últimos modelos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
          <Navbar />
          <main className="main-content">
            {children}
          </main>
      </body>
    </html>
  );
}
