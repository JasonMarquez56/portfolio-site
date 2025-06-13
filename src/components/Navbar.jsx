const Navbar = () => {
  return(
    <div className="fixed flex top-0 left-0 min-w-screen justify-between bg-[#252423]/50 backdrop-blur-md text-white px-3 py-3 md:px-8 md:py-8 z-50">
      <p className="font-semibold justify !text-[#fe8019]">Jason Marquez</p>
      <div className="flex justify-end px-4 gap-4 md:gap-12">
        <a href="#home" className="hover:text-[#fe8019]">
          Home
        </a>
        <a href="#about" className="hover:text-[#fe8019]">
          About
        </a>
        <a href="#projects" className="hover:text-[#fe8019]">
          Projects
        </a>
      </div>
    </div>
  )
}

export default Navbar