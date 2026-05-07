import { useNavigate } from 'react-router-dom'
import { Trophy } from 'lucide-react'

function ProjectCard({ project, theme, client }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(client === 'aero' ? `/aero/project/${project.id}` : `/project/${project.id}`)}
      className={`${theme.card} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative group`}
    >
      {/* BADGE 1 — surélevé en haut à droite */}
      {project.badge && (
        <div className="absolute -top-3 -right-3 flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-lg shadow-md">
          <Trophy size={12} />
          <span>{project.badge}</span>
        </div>
      )}

      {/* IMAGE + TITRE côte à côte */}
      <div className="flex items-center gap-4 mb-3">
        {project.icon && (
          <div className="relative w-16 h-16 shrink-0 group">
            <img
              src={project.icon}
              alt={project.title}
              className="w-16 h-16 rounded-full object-cover border-0"
              style={{ borderColor: theme.accentBg }}
            />
            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/0 transition-all duration-200" />
          </div>
        )}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${theme.text}`}>{project.title}</h3>
          <h4 className={`text-sm font-medium ${theme.subtext}`}>{project.subtitle}</h4>
        </div>
      </div>

      {/* TYPE DU PROJET */}
      {project.type && project.type.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {project.type.map((t) => (
            <span
              key={t}
              className={`text-xs px-2 py-1 rounded-md border ${theme.subtext}`}
              style={{ opacity: 0.7 }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <p className={`text-sm ${theme.subtext}`}>{project.summary}</p>
    </div>
  )
}

export default ProjectCard