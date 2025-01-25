import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
<img 
  src={product.image} 
  alt={product.nom}
  className="h-48 w-full object-cover"
/>
      <div className="p-4 space-y-3 border-t border-border">
        <h3 className="text-xl font-bold text-text">{product.nom}</h3>
        <p className="text-text/80 text-sm line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-button">{product.prix}€</span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}
