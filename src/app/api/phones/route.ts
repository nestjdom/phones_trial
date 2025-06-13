import { NextResponse } from 'next/server';
import { phonesApi } from '@/data/phonesApi';

export async function GET() {
  try {
    const products = await phonesApi.fetchAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products', details: error }, { status: 500 });
  }
} 