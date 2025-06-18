import type { Metadata } from "next";
import "../styles/main.scss";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "PhoneStore - Tienda de Teléfonos",
  description: "La mejor tienda online de smartphones con los últimos modelos"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`antialiased bg-gray-50 min-h-screen`}>
        <CartProvider>
          <Navbar />
          <main className='main-content'>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
