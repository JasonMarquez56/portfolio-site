import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return(
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">
        PROJECTS
      </h1>
      <div className="flex justify-start gap-16 flex-col md:flex-row">
        <ProjectCard />
      </div>
    </div>
  )
}

export default ProjectSection