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
      <div className="page-container flex--center">
        <div className="error-state">
          <h1 className="heading--h2">Teléfono no encontrado</h1>
          <Link href="/" className="text--blue-600">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }
} 