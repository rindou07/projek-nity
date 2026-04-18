import React from 'react';
import { Store, Phone, Mail, ChevronRight } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1877F2]">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E4405F]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#FF0000]">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// For TikTok since lucide doesn't have a specific TikTok icon built-in sometimes (or it's called Music), we use a simple SVG or text. I'll use text or a simple path.
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.33 6.32 6.32 6.32 0 006.31-6.31V9a7.35 7.35 0 004.36 1.45V7.05a5.16 5.16 0 01-2.41-.36z" />
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
                <p>Jl. Jenderal Sudirman No. 123,<br/>Purwokerto Timur 12345</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Operasional</h4>
                <p>Pusat Oleh-Oleh Khas Banyumas</p>
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
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Layanan</a></li>
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> F.A.Q</a></li>
            </ul>
          </div>

          {/* Column 3: Beli Produk */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Beli Produk</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Niti 2 Tokopedia</a></li>
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Niti 2 Shopee</a></li>
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Niti 2 GoFood</a></li>
              <li><a href="#" className="hover:text-brand-primary flex items-center gap-1"><ChevronRight className="w-3 h-3 text-brand-primary" /> Niti 2 GrabFood</a></li>
            </ul>
          </div>

          {/* Column 4: Sosial Media */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Sosial Media</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <FacebookIcon />
                  niti2.official
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <InstagramIcon />
                  @niti2_official
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <YoutubeIcon />
                  Niti 2 Official
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3 text-black">
                  <TikTokIcon />
                  @niti2_official
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
                  +6281 2345 6789
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  +6281 9876 5432
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-primary" />
                  cs@niti2.com
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
