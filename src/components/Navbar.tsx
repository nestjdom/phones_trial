"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/contexts/CartContext";

export default function Navbar() {
  const { cartItems } = useCartContext();

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__content'>
          <Link href='/' className='navbar__logo'>
            <Image src='/logo.svg' alt='logo' width={77} height={30} priority />
          </Link>

          <Link href='/cart' className='navbar__cart'>
            <Image src='/cart.svg' alt='cart' width={24} height={24} priority />
            <span className='navbar__cart-count'>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
