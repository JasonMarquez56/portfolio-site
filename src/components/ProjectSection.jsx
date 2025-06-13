import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return(
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">
        PROJECTS
      </h1>
      <div className="flex justify-start gap-16 flex-col md:flex-row px-8">
        <ProjectCard 
          name={'Color Sensor'}
          description={'An Android app that extracts dominant colors from photos using image processing and Firebase.'}
          gitHubLink={'https://github.com/JasonMarquez56/ColorSensor.git'}/>
        <ProjectCard 
          name={'Portfolio Website'}
          description={'A responsive portfolio website built with React to showcase projects, skills, and contact information.'}
          gitHubLink={'https://github.com/JasonMarquez56/portfolio-site.git'}/>
      </div>
    </div>
  )
}

export default ProjectSection