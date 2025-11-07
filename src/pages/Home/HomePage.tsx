import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import ProjectsSection from "./sections/Projects";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
    </>
  );
}

export default HomePage;
