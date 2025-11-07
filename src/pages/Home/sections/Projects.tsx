import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import p1a from "../../../assets/images/zietX.png";
import p1b from "../../../assets/images/projectzietx.png";
import p2a from "../../../assets/images/kfoodies.png";
import p2b from "../../../assets/images/projectfoodies.png";

import p3a from "../../../assets/images/kfoodies.png";
import p3b from "../../../assets/images/projrcttaskmate.png";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "ZietX",
      img1: p1a,
      img2: p1b,
      live: "https://kfoodies.netlify.app/",
    },
    {
      id: 2,
      title: "K-Foodies",
      img1: p2a,
      img2: p2b,
      live: "https://taskmate.netlify.app/",
    },
    {
      id: 3,
      title: "TaskMate",
      img1: p3a,
      img2: p3b,
      live: "https://watchify.netlify.app/",
      tech: "React, Context API, Tailwind",
    },
    {
      id: 4,
      title: "Tabemono Food Fest",
      img1: p1a,
      img2: p1b,
      live: "https://tabemono.netlify.app/",
      tech: "React, Tailwind, Framer Motion",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center bg-black justify-center text-white px-4 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text pb-2 text-transparent bg-gradient-to-r from-[#a3b8d9] via-[#6c8bbd] to-[#a3b8d9]"
      >
        My Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl w-full place-items-center">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            {/* Image container — restored original fixed size */}
            <div className="relative w-[26rem] sm:w-[34rem] h-[18rem] shadow-[0_0_10px_1px_#95c6dd]  lg:h-[17rem] rounded-xl overflow-hidden  group bg-black">
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

            {/* Project info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 "
            >
              <div className="flex text-center gap-20">
                <p className="flex items-center justify-center gap-1 text-xl font-semibold text-gray-300 hover:text-[#1cd8d2] transition-colors">
                  <Link to="/projectDetails" className="flex gap-2">
                    View
                    <FaArrowRight size={16} className="mt-2" />
                  </Link>
                </p>
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
