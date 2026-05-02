import { Link, useNavigate } from 'react-router-dom'

function Navbar({ theme, client }) {
  const navigate = useNavigate()

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-sm px-8 py-4 flex justify-between items-center`}>
      
      <Link to={client === 'aero' ? '/aero' : '/'} className={`text-lg font-bold ${theme.text}`}>
        Delany Pulgarin
      </Link>

      <div className="flex gap-8 items-center">
        <button
          onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
          className={`text-sm font-medium ${theme.subtext} hover:underline transition-colors`}
        >
          Expériences
        </button>

        <button
          onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
          className={`text-sm font-medium ${theme.subtext} hover:underline transition-colors`}
        >
          Projets
        </button>
        <a href="https://www.linkedin.com/in/delany-pulgarin" target="_blank" rel="noreferrer" className={`text-sm font-medium ${theme.accent} hover:underline`}>
          LinkedIn
        </a>
        <button
          onClick={() => navigate(client === 'aero' ? '/' : '/aero')}
          className="text-sm font-medium px-4 py-2 rounded-lg border transition-opacity hover:opacity-80"
          style={{ borderColor: theme.accentBg, color: theme.accent }}
        >
          {client === 'aero' ? '💼 Corporate' : '🚀 Aérospatial'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar