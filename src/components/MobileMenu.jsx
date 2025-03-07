import { useEffect } from "react";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

export const MobileMenu = ({ menuOpen, setMenuOpen, isLightMode, setIsLightMode }) => {

  return (
    <div
      id="mobile-menu"
      onClick={(e) => {
        // Only close if clicking directly on the background div
        if (e.target === e.currentTarget) {
          setMenuOpen(false);
        }
      }}
      className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${menuOpen
                       ? "h-screen opacity-100 pointer-events-auto"
                       : "h-0 opacity-0 pointer-events-none"
                     }`}
    >
            <label
              className={`relative inline-flex h-7 mb-8 w-[52px] cursor-pointer items-center rounded-full bg-gray-900 transition-all [-webkit-tap-highlight-color:_transparent] ${
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

      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform text-3xl focus:outline-none cursor-pointer`}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        onClick={() => {
          scrollToSection("home");
          setMenuOpen(false);
        }}
        className={`text-2xl font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </a>

      <a
        onClick={() => {
          scrollToSection("about");
          setMenuOpen(false);
        }}
        className={`text-2xl font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </a>

      <a
        onClick={() => {
          scrollToSection("projects");
          setMenuOpen(false);
        }}
        className={`text-2xl font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Projects
      </a>

      <a
        onClick={() => {
          scrollToSection("certifications");
          setMenuOpen(false);
        }}
        className={`text-2xl font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Certifications
      </a>

      <a
        onClick={() => {
          scrollToSection("contact");
          setMenuOpen(false);
        }}
        className={`text-2xl font-semibold bg-white bg-clip-text text-transparent transition-all duration-300 ${
          isLightMode ? 'hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400' : 'hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600'
        } animate-gradient my-4 transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </a>
    </div>
  );
};
