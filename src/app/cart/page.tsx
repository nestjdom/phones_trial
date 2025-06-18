"use client";

import { useCartContext } from "@/contexts/CartContext";
import EmptyCart from "./(components)/EmptyCart";
import CartItem from "./(components)/CartItem";
import CartActions from "./(components)/CartActions";
import { CartItem as CartItemType } from "@/types/phone";

export default function CartPage() {
  const { cartItems, removeFromCart, getTotalPrice } = useCartContext();

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <section className='page-container'>
      <div className='container-lg py-6'>
        <div className='cart-content'>
          <h2 className='cart-title'>CART ({cartItems.length})</h2>
          <ul className='space-y-8'>
            {cartItems.map((item: CartItemType, index: number) => (
              <li key={`${item.phone.id}-${index}`} className='cart-item-card'>
                <CartItem item={item} index={index} onRemove={removeFromCart} />
              </li>
            ))}
          </ul>

          <CartActions totalPrice={getTotalPrice()} />
        </div>
      </div>
    </section>
  );
}
