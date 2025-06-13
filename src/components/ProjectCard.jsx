import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ name, description, gitHubLink }) => (
  <div className="bg-[#32302f] text-white p-6 rounded-xl shadow-lg max-w-md">
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <p className="text-sm mb-4">
      {description}
    </p>
    <a
      href={gitHubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#fe8019] hover:underline"
    >
      <FaGithub />
      View on GitHub
    </a>
  </div>
);

export default ProjectCard