import { useNavigate } from 'react-router-dom'

function ExperienceCard({ experience, theme, client }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(client === 'aero' ? `/aero/experience/${experience.id}` : `/experience/${experience.id}`)}
      className={`${theme.card} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200`}
    >
      <div className="flex items-center gap-4 mb-3">
        {experience.logo && (
          <img
            src={experience.logo}
            alt={experience.company}
            className="w-12 h-12 object-contain rounded-lg bg-white p-1 shrink-0"
          />
        )}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={`text-lg font-semibold ${theme.text}`}>{experience.company}</h3>
            <span className={`text-sm ${theme.subtext}`}>{experience.period}</span>
          </div>
          <p className="text-sm font-medium" style={{ color: theme.accent }}>{experience.role}</p>
        </div>
      </div>
      <p className={`text-sm ${theme.subtext}`}>{experience.summary}</p>
    </div>
  )
}

export default ExperienceCard