interface AddToCartButtonProps {
  onAddToCart?: () => void;
  className?: string;
  label?: string;
}

export default function AddToCartButton({
  onAddToCart,
  className,
  label = "Add to Cart",
}: AddToCartButtonProps) {
  const buttonClassName = `btn btn--dark btn--full ${className || ""}`.trim();

  return (
    <button onClick={onAddToCart} disabled={!onAddToCart} className={buttonClassName}>
      {label}
    </button>
  );
}
