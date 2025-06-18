import Link from "next/link";

interface CartActionsProps {
  totalPrice: number;
}

export default function CartActions({ totalPrice }: CartActionsProps) {
  return (
    <div className='cart-actions'>
      <Link href='/' className='btn btn--outline btn--md'>
        CONTINUE SHOPPING
      </Link>

      <div className='cart-actions__right'>
        <div className='cart-total'>
          <span className='cart-total__label'>TOTAL</span>
          <span className='cart-total__amount'>{totalPrice.toLocaleString()} EUR</span>
        </div>

        <button
          onClick={() => alert("Funcionalidad de checkout no implementada en esta demo")}
          className='btn btn--primary btn--xxlg'
        >
          PAY
        </button>
      </div>
    </div>
  );
}
