"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "@/types/phone";

interface PhoneCardProps {
  phone: Phone;
  priority?: boolean;
}

export default function PhoneCard({ phone }: PhoneCardProps) {
  return (
    <Link href={`/phone/${phone.id}`}>
      <div className='card card--clickable'>
        <div className='card__image'>
          <Image
            src={phone.imageUrl}
            alt={phone.name}
            width={400}
            height={256}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading='lazy'
          />
        </div>
        <div className='card__content'>
          <div className='card__model'>
            <div className='card__brand'>{phone.brand}</div>
            <h3 className='card__title'>{phone.name}</h3>
          </div>
          <div className='card__price'>
            <span className='card__price-value'>{phone.basePrice} EUR</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
