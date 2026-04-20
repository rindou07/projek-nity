import React from 'react';
import { Store, Phone, Mail, ChevronRight } from 'lucide-react';


const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E4405F]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);



const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Logo & Address */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-secondary p-1 rounded-md">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">NITI 2</span>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Head Office</h4>
                <p>Jl. DR. Soeparno,<br/>Purwokerto Timur 53111</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Operasional</h4>
                <p>Pusat Oleh-Oleh Khas Purwokerto</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Offline Store</h4>
                <p>Purwokerto, Jawa Tengah</p>
              </div>
            </div>
          </div>

          {/* Column 2: Link Terkait */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Link Terkait</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/#tentang" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Tentang Kami</a></li>
              <li><a href="/catalog" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Katalog Produk</a></li>
            </ul>
          </div>

          {/* Column 3: Beli Produk */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Beli Produk</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Niti 2 GoFood</a></li>
            </ul>
          </div>

          {/* Column 4: Sosial Media */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Sosial Media</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <InstagramIcon />
                  @niti2tempekeripik_
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Kontak Kami */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Kontak Kami</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  +6281 225 296 127
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  +6281 297 172 982
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-100 py-6 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>&copy; 2026 Pusat Oleh-Oleh Niti 2. Praktis & Autentik.</p>
      </div>
    </footer>
  );
};

export default Footer;
