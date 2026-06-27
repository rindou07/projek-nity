import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  try {
    let whereClause = {};

    if (category && category !== 'Semua') {
      whereClause.category = category;
    }

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { z } from 'zod';

const productSchema = z.object({
  name: z.string().min(1, 'Nama produk wajib diisi'),
  description: z.string().optional(),
  category: z.string().min(1, 'Kategori wajib dipilih'),
  price: z.number().min(0, 'Harga tidak boleh negatif'),
  stock: z.number().int().min(0, 'Stok tidak boleh negatif'),
  image: z.string().optional().or(z.literal('')),
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validasi Zod
    const validation = productSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors[0].message }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: validation.data
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
