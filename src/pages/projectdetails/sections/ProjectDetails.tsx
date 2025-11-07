import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// ✅ Import your images here
import img1 from "../../../assets/images/project/kf1.png";
import img2 from "../../../assets/images/project/kf2.png";
import img3 from "../../../assets/images/project/kf3.png";
import img4 from "../../../assets/images/project/kf4.png";
import img5 from "../../../assets/images/project/kf5.png";
import img6 from "../../../assets/images/project/kf6.png";
import img7 from "../../../assets/images/project/kf7.png";
import img8 from "../../../assets/images/project/kf8.png";
import img9 from "../../../assets/images/project/kf9.png";
import img10 from "../../../assets/images/project/kf10.png";

const ProjectDetails = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔁 Duplicate first few images to create seamless loop
  const loopedImages = [...images, ...images.slice(0, 2)];

  // Auto-scroll smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    if (!scrollRef.current) return;

    // Find one slide width (including gap)
    const slide = scrollRef.current.querySelector("div > div");
    if (!slide) return;

    const slideWidth = slide.clientWidth + 24; // 24px ≈ gap-6 in Tailwind
    scrollRef.current.scrollTo({
      left: slideWidth * currentIndex,
      behavior: "smooth",
    });

    // Reset seamlessly when reaching duplicate end
    if (currentIndex >= images.length) {
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "instant" as ScrollBehavior,
          });
        }
        setCurrentIndex(0);
      }, 500);
    }
  }, [currentIndex, images.length]);

  // Manual pagination click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className=" bg-black pt-20 text-white">
        <IoArrowBackCircleOutline size={30} />
      </div>
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 ">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">K-FOODIES</h1>

        {/* Image Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth gap-6 w-full max-w-[83rem] rounded-xl justify-center"
        >
          {loopedImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[28rem] sm:w-[36rem] lg:w-[40rem] h-[18rem] sm:h-[22rem] rounded-xl overflow-hidden border border-[#95c6dd] shadow-xl"
            >
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex mt-6 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full border border-[#95c6dd] transition-all duration-300 ${
                index === currentIndex % images.length
                  ? "bg-[#95c6dd] scale-110"
                  : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>

        {/* Description */}

        <div className=" text-gray-200 p-6   sm:p-10 rounded-2xl shadow-lg max-w-7xl mx-auto">
          {/* Description */}
          <p className="text-lg mb-6">
            <span className="font-semibold text-white">Description: </span>
            KFoodies is a modern,responsive food blogging website that shares
            inspiring food stories, recipes, and culinary experiences from
            around the world.Along with insightful blogs and stunning visuals,
            KFoodies proudly hosts its annual Tabemono Food Fest is a
            celebration of global flavors and food culture that brings food
            enthusiasts together every year.{" "}
            <span className="text-[#95c6dd] font-medium">
              MongoDB, Express, React & Node.js (MERN)
            </span>
          </p>

          {/* Features Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Features:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <ul className="space-y-2 list-disc list-inside">
                <li>User registration and login</li>
                <li>Add Favorites</li>
                <li>Leave a Reviews</li>
                <li>Password Update</li>
                <li>Watch the trailer on YouTube</li>
                <li>Skeleton loading effect</li>
                <li>DarkMode</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>Authentication using JWT Tokens</li>
                <li>Delete Favorites</li>
                <li>Delete Reviews</li>
                <li>Search Live</li>
                <li>404 Page and many more</li>
                <li>DarkMode</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Tools & Technologies:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <ul className="space-y-2 list-disc list-inside">
                <li>React</li>
                <li>React Router Dom</li>
                <li>Material UI</li>
                <li>Formik</li>
                <li>React Toastify</li>
                <li>NodeJS</li>
                <li>Mongoose</li>
                <li>Cookie Parser</li>
                <li>Dotenv</li>
                <li>Nodemon</li>
                <li>TMDB API</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>React Hooks</li>
                <li>Axios</li>
                <li>CK Editor</li>
                <li>React Redux</li>
                <li>Swiper</li>
                <li>ExpressJS</li>
                <li>Json Web Token</li>
                <li>Cors</li>
                <li>Express Validator</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#95c6dd] text-black   px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition-all"
            >
              VISIT NOW <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
