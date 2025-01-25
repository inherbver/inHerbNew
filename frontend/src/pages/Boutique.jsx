import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../utils/products.json';

export default function Boutique() {
  const [displayProducts] = useState(products);

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#cad5c2' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8" style={{ color: '#2d2d2d' }}>
          Nos Produits Naturels
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
