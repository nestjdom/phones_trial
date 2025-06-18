import Image from "next/image";
import { CartItem as CartItemType } from "@/types/phone";

interface CartItemProps {
  item: CartItemType;
  index: number;
  onRemove: (index: number) => void;
}

export default function CartItem({ item, index, onRemove }: CartItemProps) {
  const itemPrice = item.selectedStorage.price;
  const totalItemPrice = itemPrice * item.quantity;

  return (
    <div className='cart-item-card__grid'>
      <div className='cart-item-card__image-wrapper'>
        <Image src={item.selectedColor.imageUrl} alt={item.phone.name} fill sizes='192px' />
      </div>

      <div className='cart-item-card__content'>
        <div className='cart-item-card__info'>
          <h3 className='cart-item-card__title'>{item.phone.name}</h3>
          <p className='cart-item-card__subtitle'>
            {item.selectedStorage.capacity} | {item.selectedColor.name}
          </p>
          <p className='cart-item-card__price'>{totalItemPrice.toLocaleString()} EUR</p>
        </div>

        <button onClick={() => onRemove(index)} className='cart-item-card__remove-btn'>
          Eliminar
        </button>
      </div>
    </div>
  );
}
