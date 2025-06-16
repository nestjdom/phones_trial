'use client';

import { useState } from 'react';
import { PhoneDetail, PhoneColor, StorageOption } from '@/types/phone';
import GoBackButton from '@/components/GoBackButton';
import ProductImage from '@/app/phone/[id]/(components)/ProductImage';
import ProductHeader from '@/app/phone/[id]/(components)/ProductHeader';
import StorageSelector from '@/app/phone/[id]/(components)/StorageSelector';
import ColorSelector from '@/app/phone/[id]/(components)/ColorSelector';
import PriceDisplay from '@/app/phone/[id]/(components)/PriceDisplay';
import AddToCartButton from '@/components/phone/AddToCartButton';
import SpecificationTable from '@/app/phone/[id]/(components)/SpecificationTable';

interface PhoneDetailClientProps {
  phone: PhoneDetail;
}

export default function PhoneDetailClient({ phone }: PhoneDetailClientProps) {
  const [selectedColor, setSelectedColor] = useState<PhoneColor>(phone.colorOptions[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>(phone.storageOptions[0]);
  const [currentImage, setCurrentImage] = useState<string>(phone.colorOptions[0]?.imageUrl || '');

  const handleColorChange = (color: PhoneColor) => {
    setSelectedColor(color);
    setCurrentImage(color.imageUrl);
  };

  const handleAddToCart = selectedColor && selectedStorage && (() => {
      alert('Producto añadido al carrito correctamente');
  });

  const getCurrentPrice = () => {
    if (!selectedStorage) return 0;
    return selectedStorage.price;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <GoBackButton />

        <div className="border-2 border-blue-400 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductImage src={currentImage} alt={phone.name} />

            <div className="space-y-6">
              <ProductHeader name={phone.name} basePrice={phone.basePrice} />

              <StorageSelector
                storageOptions={phone.storageOptions}
                selectedStorage={selectedStorage}
                onStorageChange={setSelectedStorage}
              />

              <ColorSelector
                colorOptions={phone.colorOptions}
                selectedColor={selectedColor}
                onColorChange={handleColorChange}
              />

              <PriceDisplay price={getCurrentPrice()} />

              <AddToCartButton onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>

        <SpecificationTable phone={phone} />
      </div>
    </div>
  );
} 