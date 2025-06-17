'use client';

import { useRouter } from 'next/navigation';

export const defaultLabel = "← BACK";

interface GoBackButtonProps {
  label?: string;
  className?: string;
}
export default function GoBackButton({ 
  label = defaultLabel, 
  className = "btn-go-back" 
}: GoBackButtonProps) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={className} aria-label="Go back">
      <span>{label}</span>
    </button>
  );
} 