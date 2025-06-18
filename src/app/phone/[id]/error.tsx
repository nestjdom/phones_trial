"use client";

import Link from "next/link";

export default function PhoneDetailError() {
  return (
    <div className='page-container flex--center'>
      <div className='error-state'>
        <h1 className='heading--h2'>Teléfono no encontrado</h1>
        <Link href='/' className='text--blue-600'>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
