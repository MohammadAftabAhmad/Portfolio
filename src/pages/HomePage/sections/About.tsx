import { motion } from "framer-motion";
import img from "../../../assets/images/img1.png";

function About() {
  const glows = [
    "-top-10 -left-10 w-[360px]  h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px]  opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 w-[220px] h-[220px] opacity-10 -translate-x-1/2 blur-[100px]",
  ];

  return (
    <>
      <section
        id="about"
        className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          {glows.map((c, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-[#606c88] via-[#3f4c6b] to-[#606c88] animate-pulse ${c}`}
            />
          ))}
        </div>
        <div className="relative z-10  max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12 ">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-stretch gap-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            //  viewport={(once:true, amount:0.4)}
          >
            <motion.div
              className="relative w-[300px] h-[430px]  
            overflow-hidden shadow-2xl  "
            >
              <img
                src={img}
                alt="profile"
                className=" absolute inset-0   rounded-xl  "
              />
            </motion.div>
            <div className="flex-1 flex flex-col  text-center md:text-left lg:text-left ">
              <h2
                className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
              bg-gradient-to-r from-[#606c88] via-[#3f4c6b] to-[#606c88] mt-0 lg:mt-10 "
              >
                Mohammad Aftab Ahmad
              </h2>
              <p className="mt-2 text-lg sm:text-xl lg:text-2xl text-white/90 font-semibold">
                Frontend Developer
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
                I’m a passionate Front-End Developer who loves turning creative
                ideas into responsive, visually engaging web experiences. With
                hands-on experience in React, Next.js, Tailwind CSS, JavaScript,
                and TypeScript, I enjoy crafting clean, efficient, and
                accessible interfaces that feel effortless to use. I take pride
                in writing organized, performance-driven code that brings
                designs to life and enhances user satisfaction. I’m always
                exploring new technologies and best practices to stay ahead in
                the ever-evolving world of web development. My goal is to build
                digital experiences that not only look great but also deliver
                seamless interaction and real value to users
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
