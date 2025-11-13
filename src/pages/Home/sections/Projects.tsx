import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProject } from "../../../redux/project/projectSlice";
import p1a from "../../../assets/images/zietX.png";
import p1b from "../../../assets/images/projectzietx.png";
import p2a from "../../../assets/images/kfoodies.png";
import p2b from "../../../assets/images/projectfoodies.png";
import p3a from "../../../assets/images/kfoodies.png";
import p3b from "../../../assets/images/projrcttaskmate.png";

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "ZietX",
      img1: p1a,
      img2: p1b,
      live: "https://kfoodies.netlify.app/",
      tech: "React, Tailwind, Framer Motion",
    },
    {
      id: 2,
      title: "K-Foodies",
      img1: p2a,
      img2: p2b,
      live: "https://taskmate.netlify.app/",
      tech: "MERN Stack, JWT, MUI",
    },
    {
      id: 3,
      title: "TaskMate",
      img1: p3a,
      img2: p3b,
      live: "https://watchify.netlify.app/",
      tech: "React, Context API, Tailwind",
    },
  ];

  const handleViewDetails = (id: number) => {
    dispatch(selectProject(id));
    navigate("/projectdetails");
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center bg-black justify-center text-white px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text pb-2 text-transparent bg-gradient-to-r from-[#a3b8d9] via-[#6c8bbd] to-[#a3b8d9]"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl w-full place-items-center">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-[26rem] sm:w-[34rem] h-[18rem] lg:h-[17rem] shadow-[0_0_20px_3px] shadow-[#95c6dd] rounded-xl overflow-hidden group bg-black">
              <motion.img
                src={p.img1}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 group-hover:opacity-0"
              />
              <motion.img
                src={p.img2}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4"
            >
              <div className="flex text-center gap-20">
                <button
                  onClick={() => handleViewDetails(p.id)}
                  className="flex gap-2 items-center justify-center text-xl font-semibold text-gray-300 hover:text-[#1cd8d2] transition-colors"
                >
                  View
                  <FaArrowRight size={16} className="mt-[6px]" />
                </button>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-300 hover:text-[#1cd8d2] transition-colors"
                >
                  {p.title}
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">{p.tech}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
