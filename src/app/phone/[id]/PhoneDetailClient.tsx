"use client";

import { useState } from "react";
import { PhoneDetail, PhoneColor, StorageOption } from "@/types/phone";
import GoBackButton from "@/components/GoBackButton";
import AddToCartButton from "@/components/AddToCartButton";
import ProductImage from "./(components)/ProductImage";
import ProductHeader from "./(components)/ProductHeader";
import StorageSelector from "./(components)/StorageSelector";
import ColorSelector from "./(components)/ColorSelector";
import SpecificationTable from "./(components)/SpecificationTable";
import SimilarItems from "./(components)/SimilarItems";

interface PhoneDetailClientProps {
  phone: PhoneDetail;
}

const getLowestPrice = (options: StorageOption[]) => {
  return options.reduce((min, price) => (price.price < min ? price.price : min), options[0].price);
};

export default function PhoneDetailClient({ phone }: PhoneDetailClientProps) {
  const [selectedColor, setSelectedColor] = useState<PhoneColor>(phone.colorOptions[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | undefined>(undefined);
  const [currentImage, setCurrentImage] = useState<string>(phone.colorOptions[0]?.imageUrl || "");

  const handleColorChange = (color: PhoneColor) => {
    setSelectedColor(color);
    setCurrentImage(color.imageUrl);
  };

  const handleAddToCart =
    selectedColor &&
    selectedStorage &&
    (() => {
      alert("Producto añadido al carrito correctamente");
    });

  const priceMessage = !selectedStorage?.price
    ? `From ${getLowestPrice(phone.storageOptions)} EUR`
    : `${selectedStorage.price} EUR`;

  return (
    <div className='page-container'>
      <div className='container py-6'>
        <GoBackButton />

        <div className='phone-detail-card'>
          <div className='grid grid--cols-1 grid--lg-cols-2 grid--gap-12'>
            <ProductImage src={currentImage} alt={phone.name} />

            <div className='product-info'>
              <ProductHeader name={phone.name} priceMsg={priceMessage} />

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

              <AddToCartButton onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>

        <SpecificationTable phone={phone} />

        <SimilarItems similarProducts={phone.similarProducts} />
      </div>
    </div>
  );
}
