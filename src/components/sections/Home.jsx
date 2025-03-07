import { useState } from "react";
import { RevealOnScroll } from "/src/components/RevealOnScroll.jsx";
import heroBanner from "/src/assets/herobanner.png";
import MemoryGame from "/src/components/Easteregg.jsx"; // Import the MemoryGame component
import "/src/index.css";
import "/src/components/sections/Home.css";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const Home = ({ isLightMode }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false); // State for the easter egg

  // Handle closing the mini game modal
  const handleCloseEasterEgg = () => {
    setShowEasterEgg(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      {/* Memory Mini Game Modal */}
      {showEasterEgg && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden"
          onClick={handleCloseEasterEgg}
        >
          <div
            className="bg-white/10 p-8 rounded-lg w-[90%] md:w-[80%] h-[90%] mx-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseEasterEgg}
              className={`absolute top-6 right-6 bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform text-3xl focus:outline-none cursor-pointer`}
            >
              &times;
            </button>
            <MemoryGame onClose={handleCloseEasterEgg} /> {/* Render the MemoryGame component */}
          </div>
        </div>
      )}

      {/* Rest of your Home component */}
      <RevealOnScroll>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 items-center">
          {/* Left Container */}
          <div className="flex flex-col justify-center h-full z-10 px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
              Hello & Welcome!
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
              <span className="block mb-2">
                {" "}
                I'm{" "}
                <span
                  className={`bg-clip-text text-transparent animate-fade-in animate-gradient ${
                    isLightMode
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                      : "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500"
                  }`}
                >
                  Rinaldi
                </span>{" "}
                Nurhardiansyah
              </span>
              <p className="text-white font-semibold mt-5 text-lg md:text-xl max-w-md mx-auto text-center">
                An Industrial Engineer passionate about{" "}
                <span
                  className={`bg-clip-text text-transparent animate-fade-in animate-gradient ${
                    isLightMode
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                      : "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500"
                  }`}
                >
                  supply chain management
                </span>{" "}
                and{" "}
                <span
                  className={`bg-clip-text text-transparent animate-fade-in animate-gradient ${
                    isLightMode
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                      : "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500"
                  }`}
                >
                  data analytics
                </span>{" "}
                with a drive to optimize processes and deliver data-driven
                solutions
              </p>
              <span
                className={`block mt-7 text-3xl md:text-4xl bg-clip-text text-transparent animate-gradient ${
                  isLightMode
                    ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                    : "bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500"
                }`}
              >
                Open to Work
              </span>
            </h1>
          </div>

          {/* Middle Container */}
          <div className="relative w-full max-w-[300px] h-auto mx-auto">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                isLightMode
                  ? "from-orange-500 via-blue-400 to-yellow-400"
                  : "from-blue-400 via-purple-700 to-blue-400"
              } animate-gradient rounded-full blur-lg opacity-50 animate-spin-slow -z-10`}
            ></div>

            <img
              src={heroBanner}
              alt="Hero Banner"
              className="mb-5 w-full h-auto transition-transform rounded-b-full duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => {
                // Trigger the easter egg
                setShowEasterEgg(true);
              }}
            />
          </div>

          {/* Right Container */}
          <div className="flex flex-col space-y-4 items-center w-full max-w-[220px] mx-auto px-4">
            <button
              onClick={() => scrollToSection("projects")}
              className={`w-full text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 text-center ${
                isLightMode
                  ? "bg-orange-500 hover:shadow-[0_0_15px_rgba(253,186,116,0.4)]"
                  : "bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              }`}
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`mb-10 w-full border hover:bg-blue-500/10 text-center hover:-translate-y-0.5 bg-clip-border border-transparent${
                isLightMode
                  ? "border-orange-500 text-orange-500"
                  : "border-blue-500 text-blue-500"
              } py-3 px-6 rounded font-medium transition-all duration-200`}
            >
              Contact Me
            </button>
          
            <a
              type="submit"
              className={`flex justify-center gap-2 items-center mx-auto shadow-xl text-sm backdrop-blur-md lg:font-semibold isolation-auto transition-all duration-200 hover:-translate-y-0.5 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full border-transparent before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 px-2 py-1 overflow-hidden border-2 rounded-full group text-white font-bold animate-gradient ${
                isLightMode
                ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
            }`}
              href="https://drive.google.com/drive/folders/1HAhr3b8mZyoByGw-vopfa5Z97UCmsISL?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <span className="material-symbols-outlined">
              download
              </span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};