import { useParams, useNavigate } from 'react-router-dom'
import aeroConfig from '../client/aero.config'
import corporateConfig from '../client/corporate.config'

const configs = {
  aero: aeroConfig,
  corporate: corporateConfig,
}

function ProjectDetail({ client }) {
  const { id } = useParams()
  const { client: clientParam } = useParams()
  const navigate = useNavigate()
  const config = configs[client]
  const { theme } = config
  const project = config.projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className={`min-h-screen ${theme.bg} ${theme.text} flex items-center justify-center`}>
        <p>Projet introuvable.</p>
      </div>
    )
  }
  console.log(project)


  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>

      {/* HERO IMAGE */}
      {project.image1 && (
        <div className="w-full h-72 md:h-94 overflow-hidden relative">
          <img
            src={project.image1}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* RETOUR */}
        <button
          onClick={() => navigate(client === 'aero' ? '/aero' : '/')}
          className={`mb-8 text-sm font-medium hover:underline`}
          style={{ color: theme.accent }}
        >
          ← Retour
        </button>

        {/* TITRE + TAGS */}
        {/* TITRE + BADGE2 */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          {project.badge2 && (
            <div className="flex items-center gap-2 bg-grey-800 text-blue-900 text-xs font-bold px-3 py-2 rounded-lg shadow-md shrink-0 mt-1">
              <span>{project.badge2}</span>
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold mb-8">{project.subtitle}</h2>
      
        <p className={`text-base leading-relaxed italic mb-4 ${theme.subtext}`}>{project.date}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`${theme.accentBg} text-white text-xs px-3 py-1 rounded-md font-medium`}
              
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LIENS */}
        <div className="flex gap-4 mb-10">
          {project.github && (
            
            <a  href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-opacity hover:opacity-80"
              style={{ borderColor: theme.accentBg, color: theme.accent }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            
            <a  href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: theme.accentBg }}
            >
              🔗 Demo live
            </a>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className={`text-base leading-relaxed mb-12 ${theme.subtext}`}>
          {project.description}
        </p>

        {/* SECTIONS TECHNIQUES */}
        {project.sections && project.sections.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
              Architecture du système
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.sections.map((section, index) => (
                <div
                  key={index}
                  className={`${theme.card} rounded-xl p-6`}
                >
                  <h3 className="text-base font-semibold mb-2">{section.title}</h3>
                  <p className={`text-sm leading-relaxed ${theme.subtext}`}>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IMAGES 2 & 3 côte à côte */}
        {(project.image2 || project.image3) && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.image2 && (
                <div className="flex flex-col gap-2">
                  <img
                    src={project.image2}
                    alt={`${project.title} - vue 2`}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                  />
                  <p className={`text-sm text-center ${theme.subtext}`}>
                    {project.caption2 || 'Vue du rover — angle 2'}
                  </p>
                </div>
              )}
              {project.image3 && (
                <div className="flex flex-col gap-2">
                  <img
                    src={project.image3}
                    alt={`${project.title} - vue 3`}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                  />
                  <p className={`text-sm text-center ${theme.subtext}`}>
                    {project.caption3 || 'Vue du rover — angle 3'}
                  </p>
                </div>
              )}
            </div>
          </div>
      
        )}
        {/* DESCRIPTION */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>Mes apprentissages</h2>
        <p className={`text-base leading-relaxed mb-12 ${theme.subtext}`}>
          {project.learnings}
        </p>

        {/* IMAGES 4 & 5 côte à côte */}
        {(project.image4 || project.image5) && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.image4 && (
                <div className="flex flex-col gap-2">
                  <img
                    src={project.image4}
                    alt={`${project.title} - vue 2`}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                  />
                  <p className={`text-sm text-center ${theme.subtext}`}>
                    {project.caption4 || 'Vue 3'}
                  </p>
                </div>
              )}
              {project.image5 && (
                <div className="flex flex-col gap-2">
                  <img
                    src={project.image5}
                    alt={`${project.title} - vue 3`}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                  />
                  <p className={`text-sm text-center ${theme.subtext}`}>
                    {project.caption5 || 'Vue 4'}
                  </p>
                </div>
              )}
            </div>
          </div>
      
        )}


        {/* VIDÉO */}
        {project.video && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
              Démonstration
            </h2>
            <video
              src={project.video}
              controls
              className="rounded-xl max-h-96 w-auto"
            />
          </div>
        )}

      </div>
    </div>
  )
}

export default ProjectDetail