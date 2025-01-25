import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
<img 
  src="/images/pdct1.jpg" 
  alt="Produit 1"
  className="h-48 w-full object-cover"
/>
      <div className="p-4 space-y-3 border-t border-border">
        <h3 className="text-xl font-bold text-text">{product.nom}</h3>
        <p className="text-text/80 text-sm line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-button">{product.prix}€</span>
          <button className="bg-button text-white px-4 py-2 rounded-lg hover:brightness-110 transition-all">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}
