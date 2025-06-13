'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PhoneDetail, PhoneColor, StorageOption } from '@/types/phone';
import Image from 'next/image';

interface PhoneDetailResponse {
  phone: PhoneDetail;
  similarPhones: PhoneDetail[];
}

export default function PhoneDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [phoneData, setPhoneData] = useState<PhoneDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<PhoneColor | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption | null>(null);
  const [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    const fetchPhoneDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/phones/${params.id}`);
        if (!response.ok) {
          throw new Error('Phone not found');
        }
        const data: PhoneDetailResponse = await response.json();
        setPhoneData(data);
        
        // Set initial selections
        if (data.phone.colorOptions.length > 0) {
          setSelectedColor(data.phone.colorOptions[0]);
          setCurrentImage(data.phone.colorOptions[0].imageUrl);
        }
        if (data.phone.storageOptions.length > 0) {
          setSelectedStorage(data.phone.storageOptions[0]);
        }
      } catch (error) {
        console.error('Error fetching phone details:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPhoneDetail();
    }
  }, [params.id, router]);

  const handleColorChange = (color: PhoneColor) => {
    setSelectedColor(color);
    setCurrentImage(color.imageUrl);
  };

  const handleAddToCart = () => {
    if (phoneData && selectedColor && selectedStorage) {
      alert('Producto añadido al carrito correctamente');
    }
  };

  const getCurrentPrice = () => {
    if (!phoneData || !selectedStorage) return 0;
    return selectedStorage.price;
  };

  const canAddToCart = selectedColor && selectedStorage;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!phoneData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Teléfono no encontrado</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const { phone, similarPhones } = phoneData;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 text-sm"
        >
          <span>← BACK</span>
        </button>

        {/* Main Product Section */}
        <div className="border-2 border-blue-400 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gray-50 rounded-lg flex items-center justify-center border">
                <Image
                  src={currentImage}
                  alt={phone.name}
                  width={400} 
                  height={256}
                  className="max-w-full max-h-full object-contain p-4g"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  {phone.name}
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  From {phone.basePrice.toLocaleString()} EUR
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                  Storage: How much space do you need?
                </h3>
                <div className="flex gap-3">
                  {phone.storageOptions.map((storage) => (
                    <button
                      key={storage.capacity}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 border rounded text-sm font-medium transition-colors ${
                        selectedStorage?.capacity === storage.capacity
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {storage.capacity}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                  Colour: Pick your favourite
                </h3>
                <div className="flex gap-3">
                  {phone.colorOptions.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorChange(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        selectedColor?.name === color.name
                          ? 'border-blue-500 scale-110'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hexCode }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">
                  {getCurrentPrice().toLocaleString()} EUR
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className={`w-full py-3 px-6 rounded font-semibold transition-colors ${
                  canAddToCart
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">
            Specifications
          </h2>
          <div className="bg-white border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50 w-1/4">
                    BRAND
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.brand}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    MODEL
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.name}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    DESCRIPTION
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.name} - Premium smartphone with advanced features
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    SCREEN
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.screen}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    RESOLUTION
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.resolution}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    PROCESSOR
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.processor}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    MAIN CAMERA
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.mainCamera}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    SELFIE CAMERA
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.selfieCamera}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    BATTERY
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.battery}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    OS
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.os}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50">
                    SCREEN REFRESH RATE
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {phone.specs.screenRefreshRate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Similar Items */}
        {similarPhones.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">
              Similar Items
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* {similarPhones.slice(0, 5).map((similarPhone) => (
                <PhoneCard 
                  key={similarPhone.id} 
                  phone={similarPhone as unknown as Phone} 
                />
              ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 