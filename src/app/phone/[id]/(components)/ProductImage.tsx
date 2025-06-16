import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ 
  src, 
  alt, 
  className = "w-80 h-96 bg-gray-50 rounded-lg flex items-center justify-center border" 
}: ProductImageProps) {
  return (
    <div className="flex justify-center">
      <div className={className}>
        <Image
          src={src}
          alt={alt}
          width={400} 
          height={256}
          className="max-w-full max-h-full object-contain p-4"
        />
      </div>
    </div>
  );
} 