interface ProductHeaderProps {
  name: string;
  basePrice: number;
}

export default function ProductHeader({ name, basePrice }: ProductHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
        {name}
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        From {basePrice.toLocaleString()} EUR
      </p>
    </div>
  );
} 