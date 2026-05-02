import { Link } from 'react-router-dom'

function Navbar({ theme, client }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur-sm px-8 py-4 flex justify-between items-center`}>
      
      <Link to={`/${client}`} className={`text-lg font-bold ${theme.text}`}>
        Delany Pulgarin
      </Link>

      <div className="flex gap-8">
        
        <a href="#projets"
          className={`text-sm font-medium ${theme.subtext} hover:underline transition-colors`}
        >
          Projets
        </a>
        
        <a  href="#experiences"
          className={`text-sm font-medium ${theme.subtext} hover:underline transition-colors`}
        >
          Expériences
        </a>
        
        <a  href="https://www.linkedin.com/in/delany-pulgarin"
          target="_blank"
          rel="noreferrer"
          className={`text-sm font-medium ${theme.accent} hover:underline`}
        >
          LinkedIn
        </a>
      </div>

    </nav>
  )
}

export default Navbar