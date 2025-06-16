"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='page-container'>
      <div className='container py-8'>
        <div className='error'>
          <h1>Error fetching products</h1>
          <p>Please try again later</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </div>
    </div>
  );
}
