interface ProductHeaderProps {
  name: string;
  priceMsg: string;
}

export default function ProductHeader({ name, priceMsg }: ProductHeaderProps) {
  return (
    <div className="product-header">
      <h1 className="product-header__title">
        {name}
      </h1>
      <p className="product-header__subtitle">
        {priceMsg}
      </p>
    </div>
  );
} 