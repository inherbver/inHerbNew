import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-text mb-8">Contact</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text">Nom</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-border focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-border focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text">Message</label>
            <textarea
              rows="4"
              className="mt-1 block w-full rounded-md border-border focus:ring-primary focus:border-primary"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}
