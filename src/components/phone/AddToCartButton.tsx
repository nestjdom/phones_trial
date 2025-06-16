interface AddToCartButtonProps {
  onAddToCart?: () => void;
  className?: string;
  label?: string;
}

export default function AddToCartButton({ 
  onAddToCart, 
  className,
  label = "Add to Cart"
}: AddToCartButtonProps) {
  const defaultClassName = `w-full py-3 px-6 rounded font-semibold transition-colors ${
    !!onAddToCart 
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`;

  return (
    <button
      onClick={onAddToCart}
      disabled={!onAddToCart}
      className={className || defaultClassName}
    >
      {label}
    </button>
  );
} 