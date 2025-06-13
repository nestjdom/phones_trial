'use client';

import Link from 'next/link';
// import { useCartContext } from '@/context/CartContext';

export default function Navbar() {
  // const { getTotalItems, isLoaded } = useCartContext();

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          > 
            <span className="font-bold text-xl">MOBEST</span>
          </Link>

          <Link 
            href="/cart" 
            className="relative flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="hidden sm:inline">Carrito</span>
            {/* {isLoaded && getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )} */}
          </Link>
        </div>
      </div>
    </nav>
  );
} 