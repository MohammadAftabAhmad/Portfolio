import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";

import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex  items-center space-x-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 405 367"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M314.216 201.847V347.777L161.817 207.4M314.216 201.847L282.354 201.933M314.216 201.847L337.198 201.933L380.317 169.456H314.216M161.817 207.4L117.361 169.307L156.817 169.456M161.817 207.4L64.8175 299.812H19.877L136.799 187.503M282.354 201.933L210.163 201.47L282.354 269.433V201.933ZM314.216 169.456H282.354M314.216 169.456L315.452 18.7788L156.817 169.456M156.817 169.456H199.817M199.817 169.456L282.354 94.8466V169.456M199.817 169.456H282.354"
              stroke="#DFDFDF"
              stroke-width="16"
            />
          </svg>

          <div className="text-2xl font-bold text-white  hidden sm:block">
            Aftab
          </div>
          <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <button
              onClick={() => setOpenMenu(true)}
              className="text-white text-3xl focus:outline-none"
              aria-label="open Menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <a
            href=""
            className="bg-gradient-to-r from-pink-500 to to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>
      <OverlayMenu isOpen={OpenMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}

export default Navbar;
