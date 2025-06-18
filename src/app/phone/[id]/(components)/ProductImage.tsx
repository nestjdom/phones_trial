import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ src, alt, className = "product-image__wrapper" }: ProductImageProps) {
  return (
    <div className='product-image'>
      <div className={className}>
        <Image src={src} alt={alt} width={400} height={256} priority />
      </div>
    </div>
  );
}
