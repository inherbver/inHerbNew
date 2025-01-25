import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-navbg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            {['Boutique', 'Blog', 'Événements', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Boutique' ? '/boutique' : '/'}
                className="text-text hover:text-border transition-colors duration-200 font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/connexion"
              className="text-text hover:text-border font-medium"
            >
              Connexion
            </Link>
            <button className="relative p-2">
              <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-button text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
