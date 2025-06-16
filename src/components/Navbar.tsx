'use client';

import Link from 'next/link';
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
            <span className="navbar__logo-text">MOBEST</span>
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