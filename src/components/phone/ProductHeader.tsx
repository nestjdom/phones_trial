interface ProductHeaderProps {
  name: string;
  basePrice: number;
}

export default function ProductHeader({ name, basePrice }: ProductHeaderProps) {
  return (
    <div className="product-header">
      <h1 className="product-header__title">
        {name}
      </h1>
      <p className="product-header__subtitle">
        From {basePrice.toLocaleString()} EUR
      </p>
    </div>
  );
} 