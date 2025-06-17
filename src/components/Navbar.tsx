'use client';

import Link from 'next/link';
import Image from 'next/image';
// import { useCartContext } from '@/context/CartContext';

export default function Navbar() {
  // const { getTotalItems, isLoaded } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__content">
          <Link 
            href="/" 
            className="navbar__logo"
          > 
            <Image
              src="/logo.svg"
              alt="MOBEST"
              width={77}
              height={30}
              priority
            />
          </Link>

          <Link 
            href="/cart" 
            className="navbar__cart"
          >
            <span className="navbar__cart-text">Carrito</span>
            🛒
            {/* {isLoaded && getTotalItems() > 0 && (
              <span className="navbar__cart-count">
                {getTotalItems()}
              </span>
            )} */}
          </Link>
        </div>
      </div>
    </nav>
  );
} 