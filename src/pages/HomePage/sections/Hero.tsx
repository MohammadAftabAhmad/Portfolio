import { useEffect, useMemo, useState } from "react";
import Particlesbackground from "../../../components/Particlesbackground";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const scocials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    herf: "https://www.linkedin.com/in/mohammadaftabahmad/",
  },
  {
    Icon: FaGithub,
    label: "Github",
    herf: "https://github.com/MohammadAftabAhmad",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    herf: "https://github.com/MohammadAftabAhmad",
  },
  // {Icon: FaxLinkedin, label:"LinkedIn", herf: " "};
];
const glowVarients = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

function Hero() {
  const roles = useMemo(
    () => [
      "Web Developer",
      "Frontend Developer",
      "ReactJs Developer",
      "UI/UX Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1500);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <>
      <section id="home" className="w-full h-screen bg-black overflow-hidden">
        <Particlesbackground />
        <div className="absolute inset-0">
          <div
            className="absolute -top-32 -left-32 
                       w-[70vw] sm:w-[z-500vw] md:w-[40vw]
                       h-[70vw] sm:h-[50vw] md:h-[40vw] 
                       max-w-[500px] max-h-[500px] 
                       rounded-full
                       bg-gradient-to-r from-[#606c88] via-[#3f4c6b] to-[#606c88]
                       opacity-30 sm:opacity-20 md:opacity-10 
                       blur-[100px] sm:blur-[130px] md:blur-[150px] 
                       animate-pulse"
          ></div>
          <div
            className="absolute bottom-0 right-0
                       w-[70vw] sm:w-[z-500vw] md:w-[40vw]
                       h-[70vw] sm:h-[50vw] md:h-[40vw] 
                       max-w-[500px] max-h-[500px] 
                       rounded-full
                       bg-gradient-to-r from-[#606c88] via-[#3f4c6b] to-[#606c88]
                       opacity-30 sm:opacity-20 md:opacity-10 
                       blur-[100px] sm:blur-[130px] md:blur-[150px] 
                       animate-pulse delay-500"
          ></div>
        </div>
        <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
            <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
              <motion.div
                className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>{roles[index].substring(0, subIndex)}</span>
                <span
                  className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                  style={{ height: "2rem" }}
                ></span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
                bg-gradient-to-r from-[#a3b8d9] via-[#6c8bbd] to-[#a3b8d9] drop-shadow-lg"
              >
                Hello I'm <br />
                <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:whitespace-nowrap ">
                  Mohammad Aftab Ahmad
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className=" mt-6 text-base sm:text-lg md:text-xl  text-gray-300 max-w-2xl mx-auto lg:mx-0"
              >
                I turn complex ideas into seamless, high-impact web experiences
                — building modern, scalable, and lightning-fast applications
                that make a difference.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 fles flex-wrap items-center justify-center lg:justify-start gap-6 space-x-6"
              >
                <a
                  href="#projects"
                  className=" px-6 py-3 gap-6 rounded-full font-medium text-lg  bg-gradient-to-r from-[#a3b8d9] via-[#6c8bbd] to-[#a3b8d9]
                  shadow-lg  hover:scale-105 transition-all "
                >
                  View My Work
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white hover:bg-gray-400 shadow-lg hover:scale-105 transition-all"
                >
                  MY Resume
                </a>
              </motion.div>
              <div className="mt-10 flex gap-5 text-2xl md:text-3xl ">
                {scocials.map(({ Icon, label, herf }) => (
                  <motion.a
                    href={herf}
                    key={label}
                    target="_blank"
                    aria-label={label}
                    rel="noopener noreferrer"
                    variants={glowVarients}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className=" hidden lg:block"
            initial={{ opacity: 0, y: 0, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <DotLottieReact
              src="https://lottie.host/01145810-0ce6-48cb-af6f-b006599fc3c5/O4mdg8UU7F.lottie"
              loop
              autoplay
              className="absolute mt-[300px] w-[700px] h-[750px] -translate-y-1/2 object-contain select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
