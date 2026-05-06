import aeroConfig from '../client/aero.config'
import corporateConfig from '../client/corporate.config'
import ProjectCard from '../components/ProjectCard'
import ExperienceCard from '../components/ExperienceCard'
import Navbar from '../components/Navbar'
import roverImg from '../assets/rover/rover.jpg'


const configs = {
  aero: aeroConfig,
  corporate: corporateConfig,
}

function Home({ client }) {
  const config = configs[client]
  const { theme, hero, projects, experiences } = config
  console.log(roverImg)
  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>

      <Navbar theme={theme} client={client} />

      {/* HERO */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Delany Pulgarin</h1>
          <p className="text-xl text-white/80 max-w-xl">{hero.tagline}</p>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className={`text-3xl font-bold mb-10 ${theme.accent}`}>Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              theme={theme}
              client={client}
            />
          ))}
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section id="experiences" className={`py-20 ${client === 'aero' ? 'bg-slate-900' : 'bg-gray-100'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-10 ${theme.accent}`}>Expériences</h2>
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                theme={theme}
                client={client}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home