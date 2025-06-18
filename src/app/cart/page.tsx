'use client';

import { useCart } from '@/hooks/useCart';
import EmptyCart from './(components)/EmptyCart';
// import CartHeader from './(components)/CartHeader';
import CartItem from './(components)/CartItem';
import CartActions from './(components)/CartActions';
import { CartItem as CartItemType } from '@/types/phone';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(index);
    } else {
      updateQuantity(index, newQuantity);
    }
  };

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="page-container">
      <div className="container-lg py-6">
        {/* <CartHeader /> */}
   
        <div className="cart-content">
          <h2 className="cart-title">
            CART ({cartItems.length})
          </h2>

          {/* Cart Items */}
          <div className="space-y-8">
            {cartItems.map((item: CartItemType, index: number) => (
              <CartItem
                key={index}
                item={item}
                index={index}
                onQuantityChange={handleQuantityChange}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <CartActions totalPrice={getTotalPrice()} />
        </div>
      </div>
    </div>
  );
} 