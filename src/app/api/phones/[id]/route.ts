import { NextRequest, NextResponse } from 'next/server';
import { phonesApi } from '@/data/phonesApi';

interface RouteParams {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: RouteParams }
) {
  try {
    const { id } = await params;
    const phone = await phonesApi.fetchProductById(id);
    
    if (!phone) {
      return NextResponse.json(
        { error: 'Phone not found' },
        { status: 404 }
      );
    }

    // For now, return just the phone without similar phones
    // You can add similar phones logic later if the API supports it
    return NextResponse.json({
      phone,
      similarPhones: [] // Empty for now since we need to fetch all products to calculate this
    });
  } catch (error) {
    console.error('Error fetching phone:', error);
    return NextResponse.json(
      { error: 'Failed to fetch phone' },
      { status: 500 }
    );
  }
} 