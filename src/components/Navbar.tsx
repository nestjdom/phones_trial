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
              alt="logo"
              width={77}
              height={30}
              priority
            />
          </Link>

          <Link 
            href="/cart" 
            className="navbar__cart"
          >
            <Image
              src="/cart.svg"
              alt="cart"
              width={24}
              height={24}
              priority
            />
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