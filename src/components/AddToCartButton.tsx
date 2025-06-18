interface AddToCartButtonProps {
  onAddToCart?: () => void;
  className?: string;
  label?: string;
  disabled?: boolean;
}

export default function AddToCartButton({ onAddToCart, className, label = "Add to Cart" }: AddToCartButtonProps) {
  const buttonClassName = className || `btn btn--primary btn--full ${!!onAddToCart ? "" : "btn--disabled"}`;

  return (
    <button onClick={onAddToCart} disabled={!onAddToCart} className={buttonClassName}>
      {label}
    </button>
  );
}
