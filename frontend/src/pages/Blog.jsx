import React from 'react'

export default function Blog() {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text mb-8">Blog sur les plantes sauvages</h2>
        
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-text mb-2">Les vertus méconnues du plantain</h3>
            <p className="text-text/80 mb-4">Découvrez comment cette plante commune peut soulager les piqûres...</p>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Lire la suite →
            </button>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-text mb-2">Conserver les plantes médicinales</h3>
            <p className="text-text/80 mb-4">Techniques de séchage et stockage optimal...</p>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Lire la suite →
            </button>
          </article>
        </div>
      </div>
    </div>
  )
}
