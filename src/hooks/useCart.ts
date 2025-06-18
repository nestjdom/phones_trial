import { CartItem } from '@/types/phone';
import { useLocalStorage } from './useLocalStorage';

export interface UseCartReturn {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, newQuantity: number) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
  error: string | null;
}

const CART_STORAGE_KEY = 'phone-store-cart';

export function useCart(): UseCartReturn {
  const { 
    value: cartItems, 
    setValue: setCartItems, 
    error 
  } = useLocalStorage<CartItem[]>(CART_STORAGE_KEY, []);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => 
        item.phone.id === newItem.phone.id &&
        item.selectedStorage.capacity === newItem.selectedStorage.capacity &&
        item.selectedColor.name === newItem.selectedColor.name
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      } else {
        return [...prev, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
      return;
    }

    setCartItems(prev => {
      const updated = [...prev];
      if (updated[index]) {
        updated[index] = { ...updated[index], quantity: newQuantity };
      }
      return updated;
    });
  };

  const getTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      return total + (item.selectedStorage.price * item.quantity);
    }, 0);
  };

  const clearCart = () => setCartItems([]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
    error
  };
} 