import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { encrypt } from '@/lib/auth';

import { z } from 'zod';

const prisma = new PrismaClient();

const loginSchema = z.object({
  username: z.string().min(1, 'Username wajib diisi').max(50),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validasi input menggunakan Zod
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors[0].message }, { status: 400 });
    }

    const { username, password } = validation.data;

    // Auto-create default admin for the first time if no users exist
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.user.create({
        data: {
          username: 'admin',
          password: hashedPassword,
          role: 'ADMIN'
        }
      });
    }

    // Cari user di database
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      return NextResponse.json({ error: 'Username tidak ditemukan' }, { status: 401 });
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Password salah' }, { status: 401 });
    }

    // Buat JWT Token
    const sessionToken = await encrypt({ userId: user.id, role: user.role });

    // Set cookie
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set({
      name: 'session',
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Terjadi kesalahan pada server' }, { status: 500 });
  }
}
