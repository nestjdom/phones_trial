'use client';

import { useRouter } from 'next/navigation';

interface GoBackButtonProps {
  label?: string;
  className?: string;
}

export default function GoBackButton({ 
  label = "← BACK", 
  className = "flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 text-sm" 
}: GoBackButtonProps) {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={className} aria-label="Go back">
      <span>{label}</span>
    </button>
  );
} 