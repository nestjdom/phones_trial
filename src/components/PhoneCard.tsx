'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from '@/types/phone';

interface PhoneCardProps {
  phone: Phone;
  priority?: boolean;
}

export default function PhoneCard({ phone, priority = false }: PhoneCardProps) {
  return (
    <Link href={`/phone/${phone.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={phone.imageUrl}
            alt={phone.name}
            width={400}
            height={256}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading={priority ? "eager" : "lazy"}
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {phone.brand}
          </div>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
            {phone.name}
          </h3>
          <div className="text-right">
            <span className="text-sm font-semibold text-gray-900">
              {phone.basePrice.toLocaleString()} EUR
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 