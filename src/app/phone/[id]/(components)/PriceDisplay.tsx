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
      <span className="text-2xl font-bold text-gray-900">
        {price.toLocaleString()} EUR
      </span>
    </div>
  );
} 