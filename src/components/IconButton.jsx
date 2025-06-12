const IconButton = ({ link, title, icon }) => {
  return(
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 flex mt-8 items-center justify-center rounded-full bg-[#424a3e] hover:bg-[#fe8019] text-white text-2xl shadow-lg transition"
      title={title}
    >
      {icon}
    </a>
  )
}

export default IconButton