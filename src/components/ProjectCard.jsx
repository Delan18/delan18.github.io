import { useNavigate } from 'react-router-dom'

function ProjectCard({ project, theme, client }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(client === 'aero' ? `/aero/project/${project.id}` : `/project/${project.id}`)}
      className={`${theme.card} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative`}
    >
      {project.badge && (
        <div className="absolute -top-3 left-4">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {project.badge}
          </span>
        </div>
      )}
      <h3 className={`text-lg font-semibold mb-2 ${theme.text}`}>{project.title}</h3>
      <p className={`text-sm mb-4 ${theme.subtext}`}>{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full text-white font-medium"
            style={{ backgroundColor: theme.accentBg }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard