import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/phone';

interface CartItemProps {
  item: CartItemType;
  index: number;
  onQuantityChange: (index: number, newQuantity: number) => void;
  onRemove: (index: number) => void;
}

export default function CartItem({ item, index, onQuantityChange, onRemove }: CartItemProps) {
  const itemPrice = item.selectedStorage.price;
  const totalItemPrice = itemPrice * item.quantity;

  return (
    <div className="cart-item-card">
      <div className="cart-item-card__grid">
        {/* Product Image */}
        <div className="cart-item-card__image-container">
          <div className="cart-item-card__image-wrapper">
            <Image
              src={item.selectedColor.imageUrl}
              alt={item.phone.name}
              fill
              sizes="192px"
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
                onClick={() => onQuantityChange(index, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span className="cart-item-card__quantity-value">
                {item.quantity}
              </span>
              <button
                onClick={() => onQuantityChange(index, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>

            <button
              onClick={() => onRemove(index)}
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
} 