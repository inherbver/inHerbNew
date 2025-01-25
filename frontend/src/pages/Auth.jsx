import React from 'react'

export default function Auth() {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-md mx-auto mt-20">
        <h2 className="text-2xl font-bold text-text mb-8">Connexion / Inscription</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-border focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">
              Mot de passe
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-border focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90"
            >
              Connexion
            </button>
            <button
              type="button"
              className="w-full bg-button text-white py-2 px-4 rounded-md hover:bg-button/90"
            >
              Inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
