import "react";

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
const Footer = ({ isLightMode }) => {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
  ];

  return (
    <footer className="bg-white/10 dark:bg-gray-900/95 backdrop-blur-md border-t border-white/10 dark:border-gray-700/50 py-2" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Navigation Links */}
          <div className="mt-2 flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`bg-clip-text text-transparent transition-all duration-300 text-sm md:text-base font-medium cursor-pointer animate-gradient ${
                  isLightMode
                    ? "bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-blue-400"
                    : "bg-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-blue-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Footer Text */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="text-xs md:text-sm font-light">
              © 2025 Rinaldi Nurhardiansyah. All rights reserved.
            </p>
            <p className="text-xs md:text-sm font-light">
              Made with ❤️ and 🔥 using React, Vite, and TailwindCSS
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };