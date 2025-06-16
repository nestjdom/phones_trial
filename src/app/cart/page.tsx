'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CartContextType } from '@/context/CartContext';


export default function CartPage() {
  const { cartItems = [], removeFromCart, updateQuantity, getTotalPrice } = {} as CartContextType;

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(index);
    } else {
      updateQuantity(index, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <div className="container-md py-8">
          <div className="text-center cart-empty-content">
            <h1 className="heading--h2 mb-4">📱MOBEST</h1>
            <div className="cart-empty">
              <h2 className="text--lg text--medium text--gray-900 mb-4">CART (0)</h2>
              <p className="text--gray-600 cart-empty-text">Tu carrito está vacío</p>
              <Link
                href="/"
                className="btn btn--secondary"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container-lg py-6">
        {/* Header */}
        <div className="text-center cart-header">
          <h1 className="heading--h2 mb-4">📱MOBEST</h1>
        </div>

        <div className="cart-content">
          <h2 className="cart-title">
            CART ({cartItems.length})
          </h2>

          {/* Cart Items */}
          <div className="space-y-8">
            {cartItems.map((item, index) => {
              const itemPrice = item.selectedStorage.price;
              const totalItemPrice = itemPrice * item.quantity;

              return (
                <div key={index} className="cart-item-card">
                  <div className="cart-item-card__grid">
                    {/* Product Image */}
                    <div className="cart-item-card__image-container">
                      <div className="cart-item-card__image-wrapper">
                        <Image
                          src={item.selectedColor.imageUrl}
                          alt={item.phone.name}
                          fill
                          sizes="96px"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="cart-item-card__content">
                      <div>
                        <h3 className="cart-item-card__title">
                          {item.phone.name}
                        </h3>
                        <p className="cart-item-card__subtitle">
                          {item.selectedStorage.capacity} | {item.selectedColor.name}
                        </p>
                        <p className="cart-item-card__storage">
                          {itemPrice.toLocaleString()} EUR
                        </p>
                      </div>

                      {/* Color Display */}
                      <div className="cart-item-card__color-section">
                        <p className="cart-item-card__color-section-title">
                          Color
                        </p>
                        <div className="cart-item-card__color-section-options">
                          <div
                            className="cart-item-card__color-section-option"
                            style={{ backgroundColor: item.selectedColor.hexCode }}
                          />
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="cart-item-card__quantity">
                        <div className="cart-item-card__quantity-controls">
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="cart-item-card__quantity-value">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(index)}
                          className="cart-item-card__quantity-remove"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="cart-item-card__price">
                        <span className="cart-item-card__price-value">
                          {totalItemPrice.toLocaleString()} EUR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Actions */}
          <div className="cart-actions">
            <div className="cart-actions__header">
              <Link
                href="/"
                className="btn btn--secondary"
              >
                Continue Shopping
              </Link>
              
              <div className="cart-total">
                <div className="cart-total__label">TOTAL</div>
                <div className="cart-total__amount">
                  {getTotalPrice().toLocaleString()} EUR
                </div>
              </div>
            </div>

            <div className="cart-actions__checkout">
              <button
                onClick={() => alert('Funcionalidad de checkout no implementada en esta demo')}
                className="btn btn--primary btn--lg"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 