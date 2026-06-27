'use client';
import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <div className={`relative flex flex-col group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${product.isBestseller ? 'border-brand-primary' : 'border-gray-100'}`}>
        
        {product.isBestseller === 1 && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Best Sellerr 🔥
            </span>
          </div>
        )}

        <div 
          className="aspect-[4/3] relative overflow-hidden bg-gray-100 cursor-pointer"
          onClick={() => setIsImageModalOpen(true)}
        >
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-primary transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-gray-500 text-sm mb-4 min-h-[2.5rem]">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
            <span className="text-xl font-black text-gray-900">
              Rp{product.price.toLocaleString('id-ID')}
            </span>
            <div className={`text-xs font-semibold px-2 py-1 rounded-md ${product.stock > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {product.stock > 0 ? `Stok: ${product.stock}` : 'Stok Habis'}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && product.image && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X size={32} />
            </button>
            <img 
              src={product.image} 
              alt={product.name}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-white text-xl font-medium text-center">{product.name}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
