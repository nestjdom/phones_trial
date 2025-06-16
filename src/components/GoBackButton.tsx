'use client';

import { useRouter } from 'next/navigation';

interface GoBackButtonProps {
  label?: string;
  className?: string;
}

export default function GoBackButton({ 
  label = "← BACK", 
  className = "btn-go-back" 
}: GoBackButtonProps) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={className} aria-label="Go back">
      <span>{label}</span>
    </button>
  );
} 