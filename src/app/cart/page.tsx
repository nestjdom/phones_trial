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
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">📱MOBEST</h1>
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">CART (0)</h2>
              <p className="text-gray-600 mb-8">Tu carrito está vacío</p>
              <Link
                href="/"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-2 text-sm uppercase tracking-wide hover:bg-gray-300 transition-colors"
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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">📱MOBEST</h1>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-8 uppercase tracking-wide">
            CART ({cartItems.length})
          </h2>

          {/* Cart Items */}
          <div className="space-y-8">
            {cartItems.map((item, index) => {
              const itemPrice = item.selectedStorage.price;
              const totalItemPrice = itemPrice * item.quantity;

              return (
                <div key={index} className="border-2 border-purple-400 rounded-lg p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="flex justify-center">
                      <div className="w-48 h-64 bg-gray-50 rounded-lg flex items-center justify-center border">
                        <Image
                          src={item.selectedColor.imageUrl}
                          alt={item.phone.name}
                          fill
                          sizes="96px"
                          className="max-w-full max-h-full object-contain p-4"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                          {item.phone.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.selectedStorage.capacity} | {item.selectedColor.name}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          {itemPrice.toLocaleString()} EUR
                        </p>
                      </div>

                      {/* Color Display */}
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                          Color
                        </p>
                        <div className="flex gap-2">
                          <div
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.selectedColor.hexCode }}
                          />
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="text-lg font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(index, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 text-sm uppercase tracking-wide hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-900">
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
          <div className="mt-12 space-y-6">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="bg-gray-200 text-gray-800 px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </Link>
              
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">TOTAL</div>
                <div className="text-xl font-bold text-gray-900">
                  {getTotalPrice().toLocaleString()} EUR
                </div>
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => alert('Funcionalidad de checkout no implementada en esta demo')}
                className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
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