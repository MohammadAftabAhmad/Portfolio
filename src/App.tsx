import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Particlesbackground from "./components/Particlesbackground";
import About from "./pages/HomePage/sections/About";
import Hero from "./pages/HomePage/sections/Hero";

function App() {
  return (
    <>
      <Navbar />
      {/* <Particlesbackground /> */}
      <CustomCursor />
      <Hero />
      <About />
    </>
  );
}

export default App;
