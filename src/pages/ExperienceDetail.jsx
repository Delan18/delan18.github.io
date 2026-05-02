import { useParams, useNavigate } from 'react-router-dom'
import aeroConfig from '../client/aero.config'
import corporateConfig from '../client/corporate.config'

const configs = {
  aero: aeroConfig,
  corporate: corporateConfig,
}

function ExperienceDetail() {
  const { client, id } = useParams()
  const navigate = useNavigate()
  const config = configs[client]
  const { theme } = config
  const experience = config.experiences.find((e) => e.id === id)

  if (!experience) {
    return (
      <div className={`min-h-screen ${theme.bg} ${theme.text} flex items-center justify-center`}>
        <p>Expérience introuvable.</p>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* RETOUR */}
        <button
          onClick={() => navigate(`/${client}`)}
          className="mb-8 text-sm font-medium hover:underline"
          style={{ color: theme.accent }}
        >
          ← Retour
        </button>

        {/* HEADER — logo + titre */}
        <div className="flex items-center gap-6 mb-8">
          {experience.logo && (
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-16 h-16 object-contain rounded-xl bg-white p-2"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold mb-1">{experience.company}</h1>
            <p className="text-lg font-medium" style={{ color: theme.accent }}>
              {experience.role}
            </p>
            <p className={`text-sm ${theme.subtext}`}>{experience.period}</p>
          </div>
        </div>

        {/* LIEN SITE WEB */}
        {experience.website && (
          <div className="mb-8">
            
            <a  href={experience.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-opacity hover:opacity-80"
              style={{ borderColor: theme.accentBg, color: theme.accent }}
            >
              🌐 Visiter le site
            </a>
          </div>
        )}

        {/* DESCRIPTION */}
        <p className={`text-base leading-relaxed mb-10 ${theme.subtext}`}>
          {experience.description}
        </p>

        {/* BULLETS */}
        {experience.bullets && experience.bullets.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.accent }}>
              Responsabilités
            </h2>
            <ul className="flex flex-col gap-3">
              {experience.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: theme.accentBg }} />
                  <span className={`text-sm leading-relaxed ${theme.subtext}`}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TYPE DE PROJET */}
        {experience.type_projet && (
          <div className={`${theme.card} rounded-xl p-6 mb-10`}>
            <h2 className="text-lg font-semibold mb-2">Type de projet</h2>
            <p className={`text-sm ${theme.subtext}`}>{experience.type_projet}</p>
          </div>
        )}

        {/* IMAGE IMPLICATION */}
        {experience.img && (
          <div className="mb-10">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full rounded-xl object-cover max-h-96"
            />
          </div>
        )}

        {/* CONFÉRENCES */}
        {experience.conferences && experience.conferences.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
              Conférences organisées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.conferences.map((conf, index) => (
                <div key={index} className={`${theme.card} rounded-xl overflow-hidden`}>
                  {conf.image && (
                    <img
                      src={conf.image}
                      alt={conf.legende}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className={`text-sm ${theme.subtext}`}>{conf.legende}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ExperienceDetail