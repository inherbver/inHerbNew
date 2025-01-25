import React from 'react'

export default function Events() {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-text mb-8">Ateliers & Événements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Événements statiques */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-text mb-2">Découverte des plantes sauvages</h3>
            <p className="text-sm text-text/80 mb-2">15 Mars 2025 - 14h-16h</p>
            <p className="text-text/60 text-sm">Balade initiatique en forêt</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-text mb-2">Fabrication de baumes</h3>
            <p className="text-sm text-text/80 mb-2">22 Avril 2025 - 10h-12h</p>
            <p className="text-text/60 text-sm">Atelier pratique</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-text mb-2">Cueillette responsable</h3>
            <p className="text-sm text-text/80 mb-2">5 Mai 2025 - 9h-11h</p>
            <p className="text-text/60 text-sm">Guide des bonnes pratiques</p>
          </div>
        </div>
      </div>
    </div>
  )
}
