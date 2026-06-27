import { Inter } from "next/font/google";
import Link from 'next/link';
import { LogOut, Package, LayoutDashboard } from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  async function handleLogout() {
    'use server';
    const cookieStore = await cookies();
    cookieStore.delete('session');
    redirect('/login');
  }

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col md:flex-row ${inter.className}`}>
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <span className="font-bold text-xl text-brand-primary">Niti 2 Admin</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-brand-light text-brand-primary font-medium rounded-xl">
            <Package className="w-5 h-5" />
            Produk
          </Link>
          <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium rounded-xl transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Lihat Web
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <form action={handleLogout}>
            <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors">
              <LogOut className="w-5 h-5" />
              Keluar
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
