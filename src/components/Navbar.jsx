import { useEffect } from "react";

import headlog from "src/assets/headlog.svg";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// eslint-disable-next-line react/prop-types
export const Navbar = ({ menuOpen, setMenuOpen, isLightMode, setIsLightMode }) => {


  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return (
    <nav className={`fixed top-0 w-full z-40 ${isLightMode ? "bg-blur" : "bg-[rgba(10, 10, 10, 0.8)]"} backdrop-blur-lg border-b border-white/10 shadow-lg`}>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex items-center ">
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >
              <img
                src={headlog}
                alt="Logo"
              className={`w-10 h-10 mr-4 rounded-full inset-0 ${
                isLightMode ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400' : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600'
              } animate-gradient opacity-70 shadow-[0_0_30px_10px_rgba(59,1,246,0.5)]`}

              />
            </a>
            <a
              onClick={() => scrollToSection("home")}
              className="font-mono text-lg md:text-xl lg:text-2xl font-bold text-white cursor-pointer"
            >
              {" "}
              Rinaldi&apos;s
              <span className={`bg-clip-text text-transparent ${
                isLightMode ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400' : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600'
              } animate-gradient`}>

                {" "}
                Portfolio
              </span>{" "}
            </a>
          </div>

          {!menuOpen && (
            <div
              className={`w-7 h-5 relative cursor-pointer z-40 md:hidden bg-white bg-clip-text text-transparent transition-all duration-300 ${
                isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
              } animate-gradient`}

              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          )}

          <div className="hidden md:flex items-center space-x-8 ">
            
            <a
              onClick={() => scrollToSection("home")}
              className={`font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
                isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
              } animate-gradient cursor-pointer`}
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className={`font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
                isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
              } animate-gradient cursor-pointer`}
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className={`font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
                isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
              } animate-gradient cursor-pointer`}
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("certifications")}
              className={`font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
                isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
              } animate-gradient cursor-pointer`}
            >
              Certifications
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className={`font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
                isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
              } animate-gradient cursor-pointer`}
            >
              Contact
            </a>
            
            
            <label
              className={`relative inline-flex h-7 ml-5 w-[52px] cursor-pointer items-center rounded-full bg-gray-900 transition-all [-webkit-tap-highlight-color:_transparent] ${
                isLightMode
                  ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                  : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
              } animate-gradient`}
            >
              <input
                type="checkbox"
                id="themeToggle"
                className="peer sr-only"
                checked={isLightMode}
                onChange={() => setIsLightMode(!isLightMode)}
              />
              <span
                className={`absolute inset-y-0 start-0 m-1 flex size-5 items-center justify-center rounded-full text-lg transition-all duration-400 ${
                  isLightMode
                    ? "translate-x-6 rotate-180 scale-130"
                    : "translate-x-0 rotate-0 scale-130"
                }`}
              >
                {isLightMode ? "❂" : "☪︎"}
              </span>
            </label>






          </div>
        </div>
      </div>
    </nav>
  );
};
