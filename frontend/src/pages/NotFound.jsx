import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-text mb-4">Oups, cette plante est introuvable !</h1>
      <p className="text-text/80 mb-8">La page que vous recherchez n'existe pas...</p>
      <Link 
        to="/" 
        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
      >
        Retour à la boutique
      </Link>
    </div>
  )
}
