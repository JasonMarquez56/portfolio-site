import AnimatedContent from "../assets/AnimatedContent"
import profileimage from '../assets/profile.jpeg'
import IconButton from '../components/IconButton'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import FadeContent from '../assets/FadeContent'

const HomeSection = () => {
  return(
    <>
    {/* Image */}
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
      delay={0}
    >
      <div className="w-72 h-72">
        <img
          src={profileimage}
          alt="Jason Marquez"
          className="w-full h-full object-cover rounded-full border-4 border-[#fe8019] shadow-lg"
        />
      </div>
    </AnimatedContent>

    {/* Text + Button */}
        <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
      delay={0}
    >
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Hi, I'm Jason Marquez
        </h1>
        <p className="text-lg mt-4">
          A software engineer with a passion for building full-stack web apps and clean, user-focused experiences.
          I recently earned a B.S. in Computer Science from California State University, Long Beach
        </p>

        <div className="flex md:justify-start justify-center flex-row gap-4">
          <IconButton 
            link="https://github.com/JasonMarquez56"
            title="Github"
            icon={<FaGithub />}
          />
          <IconButton 
            link="https://www.linkedin.com/in/jason-marquez-50498b174"
            title="LinkedIn"
            icon={<FaLinkedin />}
          />
          <IconButton 
            link="mailto:JasonMarquez56@protonmail.com"
            title="Email"
            icon={<IoMdMail />}
          />
        </div>
      </div>
    </AnimatedContent>
    </>
  )
}

export default HomeSection