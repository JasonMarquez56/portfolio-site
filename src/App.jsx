import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'

const App = () => {
  return(
    <>
      <section
        id="home"
        className="min-h-screen bg-[#252423] pt-16 md:pt-64 px-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-12"
      >
        <HomeSection />
      </section>

      <section 
        id="about" 
        className="py-20 bg-[#252423] px-8 md:px-32">
        <AboutSection />
      </section>
      
      <section 
      id="projects" 
      className="py-20 w-full bg-[#252423] flex items-center justify-center">
        <ProjectSection />
      </section>
    </>
  )
}

export default App