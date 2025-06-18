import Link from 'next/link';

interface CartActionsProps {
  totalPrice: number;
}

export default function CartActions({ totalPrice }: CartActionsProps) {
  return (
    <div className="cart-actions">
      <div className="cart-actions__header">
        <Link
          href="/"
          className="btn btn--outline btn--md"
        >
          CONTINUE SHOPPING
        </Link>
        
        <div className="cart-total">
          <div className="cart-total__label">TOTAL</div>
          <div className="cart-total__amount">
            {totalPrice.toLocaleString()} EUR
          </div>
        </div>
      </div>

      <div className="cart-actions__checkout">
        <button
          onClick={() => alert('Funcionalidad de checkout no implementada en esta demo')}
          className="btn btn--primary btn--lg btn--full"
        >
          PAY
        </button>
      </div>
    </div>
  );
} 