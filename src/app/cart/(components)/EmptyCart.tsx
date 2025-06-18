import Link from "next/link";

export default function EmptyCart() {
  return (
    <section className='page-container'>
      <div className='container-lg py-6'>
        <div className='cart-empty'>
          <h2 className='cart-title'>CART (0)</h2>

          <div className='cart-empty-actions'>
            <Link href='/' className='cart-empty-actions btn btn--outline btn--md'>
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
