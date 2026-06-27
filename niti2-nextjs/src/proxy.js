import { NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

// Tentukan route mana saja yang harus diproteksi
const protectedRoutes = ['/admin'];

export async function proxy(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  if (isProtectedRoute) {
    const cookie = req.cookies.get('session')?.value;
    const session = await decrypt(cookie);

    // Jika tidak ada session atau session tidak valid, arahkan ke login
    if (!session?.userId) {
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
  }

  // Jika mencoba akses /login tapi sudah punya session valid, arahkan ke /admin
  if (path === '/login') {
    const cookie = req.cookies.get('session')?.value;
    const session = await decrypt(cookie);
    if (session?.userId) {
      return NextResponse.redirect(new URL('/admin', req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
