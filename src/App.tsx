import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <CustomCursor />

      <Outlet />
    </>
  );
}

export default App;
