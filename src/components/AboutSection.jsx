import AnimatedContent from "../assets/AnimatedContent"
import aboutMeImage from "../assets/about_me_img.JPG"

const AboutSection = () => {
  return (
    <>
    <div className="">
      <h1 className="text-4xl font-bold text-center mb-12">
        About Me
      </h1>
    </div>
    {/* Image */}
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.0}
        threshold={0.2}
        delay={0}
      >
        <div className="w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
          <img
            src={aboutMeImage}
            alt="Jason Marquez"
            className="w-full h-full object-cover rounded-xl border-4 border-[#fe8019] shadow-lg"
          />
        </div>
      </AnimatedContent>
      {/* Text */}
            <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.0}
        threshold={0.2}
        delay={0}
      >
        <div className="max-w-xl text-center md:text-left">
          <p className="text-lg leading-relaxed">
            A detail oriented developer who enjoys solving real-world problems through code. During my studies, I've focused on
            full-stack development, data structures, and system design. I am always aiming to create clean and maintainable code.
            I am constantly learning and improving and excited to work on and contribute to meaningful projects, collaborate with other
            developers, and grow as an engineer.
          </p>
          <br></br>
          <p>
            When I'm not coding, I enjoy spending time with my friends and family. 
          </p>
        </div>
      </AnimatedContent>
    </div>
    </>
  )
}

export default AboutSection