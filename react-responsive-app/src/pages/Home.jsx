import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-left">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-light text-brand-primary border border-brand-primary/20 text-sm font-semibold tracking-wide mb-6">
              Pusat Oleh-Oleh Khas Purwokerto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cita Rasa Autentik <br/>
              dari <span className="text-brand-primary">Niti 2</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Menyediakan berbagai macam oleh-oleh khas Purwokerto pilihan. Temukan keripik tempe best seller, nopia narwan, mancho, widaran, toso, kacang asin dll di satu tempat.
            </p>
            <Link 
              to="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-amber-800 text-white rounded-xl font-bold text-lg transition-transform shadow-lg shadow-amber-900/20"
            >
              Lihat Katalog 
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/niti2_hero.png" 
              alt="Oleh Oleh Niti 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Niti 2 hadir untuk menyajikan ragam jajanan tradisional kualitas unggul. 
            Tanpa perlu ragu soal rasa, seluruh produk yang kami sediakan adalah "Buah Tangan" 
            pilihan khas Purwokerto yang diproduksi dengan bahan terbaik untuk Anda dan keluarga. Terkenal sejak Tahun 1967.
          </p>
        </div>
      </section>

      {/* Info Lokasi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kunjungi Toko Kami</h2>
            <p className="text-gray-600">Terletak strategis di pusat kota Purwokerto, siap menyambut Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 p-6 bg-brand-light rounded-2xl shadow-sm border border-brand-primary/20 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lokasi Toko</h3>
                  <p className="text-gray-600">Jl. DR. Soeparno No.samping, Purwokerto Timur,<br/>Kabupaten Banyumas, Jawa Tengah</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-brand-light rounded-2xl shadow-sm border border-brand-primary/20 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Jam Operasional</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex gap-4"><span className="font-medium w-36">Senin - Jumat:</span> <span>09:00 - 20:00</span></li>
                    <li className="flex gap-4"><span className="font-medium w-36">Sabtu - Minggu:</span> <span>09:00 - 20:00</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              {/* Google Maps iframe placeholder for Niti 2 Purwokerto */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.53229074304!2d109.24465380084466!3d-7.422788681896144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655fde9a058b97%3A0x11ca885d8d0ebd06!2sniti%202!5e0!3m2!1sid!2sid!4v1776679158562!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Niti 2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Layanan & Tersedia Di Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pesan Melalui Aplikasi Favorit Anda</h2>
          <p className="text-gray-600 mb-8">
            Kini produk oleh-oleh Niti 2 bisa Anda nikmati tanpa harus keluar rumah. Pesan dengan mudah via layanan pesan antar kesayangan Anda!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://gofood.link/a/Kg61Atj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/GoFood_logo.svg/1050px-GoFood_logo.svg.png" alt="GoFood" className="h-8 object-contain bg-white px-2 py-1 rounded" />
              <span className="font-bold text-lg text-left leading-tight">Pesan di<br/>GoFood</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
