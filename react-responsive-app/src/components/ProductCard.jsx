import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className={`relative group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${product.isBestseller ? 'border-brand-primary' : 'border-gray-100'}`}>
      
      {product.isBestseller === 1 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Best Sellerr 🔥
          </span>
        </div>
      )}

      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-black text-gray-900">
            Rp{product.price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
