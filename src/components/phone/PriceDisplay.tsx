interface PriceDisplayProps {
  price: number;
  className?: string;
}

export default function PriceDisplay({ 
  price, 
  className = "text-right" 
}: PriceDisplayProps) {
  return (
    <div className={className}>
      <span className="price--large">
        {price.toLocaleString()} EUR
      </span>
    </div>
  );
} 