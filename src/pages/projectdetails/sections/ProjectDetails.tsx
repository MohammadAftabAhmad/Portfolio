import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const TRANSITION_MS = 700;

const ProjectDetailsPage = () => {
  const { selectedProject } = useSelector((state: RootState) => state.project);
  const navigate = useNavigate();

  // 1 slide for small screens, 2 for md and up
  const [visibleCount, setVisibleCount] = useState<number>(
    window.innerWidth >= 768 ? 2 : 1
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const transitionTimeoutRef = useRef<number | null>(null);

  // Responsive slide count
  useEffect(() => {
    const handleResize = () => {
      const count = window.innerWidth >= 768 ? 2 : 1;
      setVisibleCount(count);
      setIsAnimating(false);
      setCurrentIndex(0);
      window.setTimeout(() => setIsAnimating(true), 20);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!selectedProject) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <p>No project selected.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-5 py-2 bg-[#95c6dd] text-black rounded-md font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const images = selectedProject.images || [];
  const len = images.length;
  const loopedImages = [...images, ...images.slice(0, visibleCount)];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset loop transition
  useEffect(() => {
    if (currentIndex >= len) {
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);

      transitionTimeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
        window.setTimeout(() => setIsAnimating(true), 20);
      }, TRANSITION_MS);
    }
    return () => {
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, [currentIndex, len]);

  const translatePercent = (currentIndex * 100) / visibleCount;

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-6xl mb-6">
        <IoArrowBackCircleOutline
          size={36}
          className="text-[#95c6dd] cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">{selectedProject.title}</h1>

      {/* Carousel */}
      <div className="w-full max-w-[83rem] overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${translatePercent}%)`,
            transition: isAnimating
              ? `transform ${TRANSITION_MS}ms ease-in-out`
              : "none",
          }}
        >
          {loopedImages.map((img, i) => (
            <div
              key={i}
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
              className="px-3 box-border"
            >
              <div className="w-full h-[18rem] sm:h-[22rem] rounded-xl overflow-hidden border border-[#95c6dd] shadow-xl">
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex mt-6 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full border border-[#95c6dd] transition-all duration-300 ${
              index === currentIndex % len
                ? "bg-[#95c6dd] scale-110"
                : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>

      {/* Description Section */}
      <div className="text-gray-200 p-6 sm:p-10 rounded-2xl shadow-lg max-w-6xl mt-10">
        <p className="text-lg mb-6 leading-relaxed">
          <span className="font-semibold text-white">Description: </span>
          {selectedProject.description}{" "}
          <span className="text-[#95c6dd] font-medium">
            {selectedProject.techStack?.join(", ")}
          </span>
        </p>

        {selectedProject.features && selectedProject.features.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Features:
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 space-y-2 list-disc list-inside">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {selectedProject.link && (
          <div className="flex justify-center">
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#95c6dd] text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all hover:opacity-90"
            >
              Visit Website <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
