import { notFound } from 'next/navigation';
import Link from 'next/link';
import { phonesApi } from '@/data/phonesApi';
import PhoneDetailClient from './PhoneDetailClient';

interface PhoneDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PhoneDetailPage({ params }: PhoneDetailPageProps) {
  try {
    const phone = await phonesApi.fetchProductById(params.id);
    
    if (!phone) {
      notFound();
    }

    return <PhoneDetailClient phone={phone} />;
  } catch (error) {
    console.error('Error fetching phone details:', error);
    
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
} 