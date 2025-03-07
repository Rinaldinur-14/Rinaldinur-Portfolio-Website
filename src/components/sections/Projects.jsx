import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "src/components/RevealOnScroll";
import pw from "src/assets/projects/PORT_W/VPORT_W.png";
import ml from "src/assets/projects/DB_ML/VDB_ML.png";
import vru from "src/assets/projects/RUW/VRUW.png";
import vc from "src/assets/projects/CMS/VCMS.png";
import ap from "src/assets/projects/APT/VAPT.png";
import ad from "src/assets/projects/AAD/VAAD.png";
import pyk from "src/assets/projects/PYXEK/VPYXEK.png";
import pyx from "src/assets/projects/PYXE/VPYXE.png";
import aul from "src/assets/projects/AULOG/VAULOG.png";
import DB_ML from "src/components/sections//projects/DB_ML";
import RUW from "src/components/sections//projects/RUW";
import PYXE from "src/components/sections//projects/PYXE";
import AULOG from "src/components/sections//projects/AULOG";
import PYXEK from "src/components/sections//projects/PYXEK";
import APT from "src/components/sections/projects/APT";
import AAD from "src/components/sections/projects/AAD";
import CMS from "src/components/sections/projects/CMS";
import PORT_W from "src/components/sections/projects/PORT_W";

const projects = [
  // {
  //   title: "",
  //   description: "",
  //   technologies: ["", "", "", ""],
  //   image: ,
  //   link: "#",
  //   validationDate: "", // Added validation date
  // },
  {
    title: "Interactive and Responsive Portfolio Website Built with React, Vite, and Tailwind CSS",
    description: "A fully responsive and interactive portfolio website showcasing my skills, projects, certifications, and contact information. Features include a hidden memory game, reveal-on-scroll animations, advanced search and sorting, and light/dark mode.",
    technologies: ["HTML", "React", "Vite", "Tailwind CSS", "JavaScript", "EmailJS", "GitHub", "Vercel", "DeepSeek AI"],
    image: pw, // Replace with your image path
    link: "#", // Replace with your project link
    validationDate: "18 February 2025 - 7 March 2025", // Updated validation date
  },
  {
    title: "Diabetes Progression Prediction Using Random Forest Regressor: A Machine Learning Approach",
    description: "A Python-based machine learning project that predicts diabetes progression using the Random Forest Regressor. The project leverages the Diabetes dataset from Scikit-learn, which includes 10 baseline variables and a target variable measuring disease progression. The model achieved an R² score of 0.44 and an MSE of 2859.69, demonstrating moderate predictive accuracy.",
    technologies: ["Python", "Scikit-learn", "Random Forest Regressor", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    image: ml, // Ensure `ml` is defined as an image import
    link: "#", // Replace with actual link if available
    validationDate: "27 February 2025", // Added validation date
  },
  {
    title: "Responsive Travel Agency Website with JavaScript Validation and Auto-Slide Banner",
    description: "A responsive travel agency website built with HTML, CSS, and JavaScript. The website features an auto-slide banner, JavaScript form validation, and a user-friendly interface. Developed as part of the RevoU Software Engineering Mini Course, this project demonstrates foundational skills in front-end development and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git & GitHub", "DeepSeek AI"],
    image: vru, // Ensure `vru` is defined as an image import
    link: "#", // Replace with actual link if available
    validationDate: "26 February 2025", // Added validation date
  },
  {
    title: "Python to EXE Converter: Easily Convert Python Scripts into Custom Executables with a User-Friendly Interface",
    description: "A Python-based application with a Tkinter GUI that simplifies the process of converting Python scripts into executable files. It includes features like customizable output names, icons, admin privileges, and automatic cleanup of residual files.",
    technologies: ["Python", "Tkinter", "PyInstaller", "Pillow", "DeepSeek AI"],
    image: pyx, // Replace with the actual image path
    link: "#",
    validationDate: "23 November 2023 - 26 November 2023", // Added validation date
  },
  {
    title: "Web Automated Login System for Gunadarma University Wifi Access Using Python and Selenium",
    description: "A Python-based automation tool that streamlines the login process for Gunadarma University's wifi network. Using Selenium, the tool automates credential input and login, reducing manual effort, and improving efficiency in the Elementary Laboratory of Industrial Engineering.",
    technologies: ["Python", "Selenium", "Visual Studio Code", "Veyon Master", "ChatGPT AI"],
    image: aul, // Ensure `aul` is defined as an image import
    link: "#", // Replace with actual link if available
    validationDate: "8 November 2023 - 10 November 2023", // Added validation date
  },
  {
    title: "EXE Terminator Generator: Easily Create Custom Tools to Manage and Stop Unwanted Applications.",
    description: "A Python-based tool with a Tkinter GUI that automates the process of closing applications on Windows systems. It generates custom .exe files to terminate specified applications, featuring icon customization, admin privileges, and real-time progress indication.",
    technologies: ["Python", "Tkinter", "Pillow", "PyInstaller", "Taskkill Command", "DeepSeek AI"],
    image: pyk, // Ensure `pyk` is defined as an image import
    link: "#", // Replace with actual link if available
    validationDate: "23 October 2023 - 27 October 2023", // Added validation date
  },
  {
    title: "Automated Practicum Pre-Test System Using Google Forms, Spreadsheets, and Veyon Master",
    description: "A system designed to automate the practicum pre-test process, ensuring efficiency, fairness, and reduced paper usage. It integrates Google Forms for test administration, Google Spreadsheets for automated result calculation and storage, and Veyon Master for real-time monitoring and control during the test.",
    technologies: ["Google Forms", "Google Spreadsheets (IF, IFERROR, XLOOKUP, ImportRange)", "Veyon Master"],
    image: ap, // Ensure 'ap' is defined as the image path for this project
    link: "#", // Add a relevant link if available
    validationDate: "5 October 2023 - 9 October 2023", // Corrected the date format and timeline
  },
  {
    title: "Computer Management System Using Veyon Master",
    description: "Designed and implemented a centralized system to efficiently monitor, control, and manage multiple computers in a laboratory environment using Veyon Master. The system streamlined tasks such as remote power management, application control, screen locking, and file distribution, significantly reducing manual effort and improving operational efficiency.",
    technologies: ["Veyon Master", "Public-Key Cryptography", "Network Configuration", "System Administration"],
    image: vc, // Replace with your project image
    link: "#", // Add a link to the project if available
    validationDate: "2 October 2023 - 5 October 2023",
  },
  {
    title: "Automated QR Code-Based Attendance System for Practicum Using Virtual Cards and Spreadsheet Integration",
    description: "Developed a paperless attendance system using QR codes and virtual cards to streamline attendance tracking in the Elementary Laboratory of Industrial Engineering at Gunadarma University. The system integrates QR code scanning with spreadsheet automation, reducing manual effort and promoting sustainability.",
    technologies: [
      "Spreadsheet (XLOOKUP, IF, TIME, IFERROR)",
      "QRExplorer",
      "Photopea",
      "Scan It to Office",
      "Advance Renamer"
    ],
    image: ad,
    link: "#",
    validationDate: "28 July 2023 - 24 August 2023", // Added validation date
  },
];


export const Projects = ({ isLightMode }) => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [showPORT_W, setShowPORT_W] = useState(false);
  const [showDB_ML, setShowDB_ML] = useState(false);
  const [showRUW, setShowRUW] = useState(false);
  const [showPYXE, setShowPYXE] = useState(false);
  const [showAULOG, setShowAULOG] = useState(false);
  const [showPYXEK, setShowPYXEK] = useState(false);
  const [showAPT, setShowAPT] = useState(false);
  const [showCMS, setShowCMS] = useState(false);
  const [showAAD, setShowAAD] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const sortMenuRef = useRef(null);

  const handleViewToggle = () => {
    setShowAll(!showAll);
    if (showAll) {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "title") {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortBy === "validationDate") {
      const dateA = new Date(a.validationDate.split(" - ")[0]);
      const dateB = new Date(b.validationDate.split(" - ")[0]);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    }
    return 0;
  });

  // Toggle search bar visibility
  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Toggle sort menu visibility
  const toggleSortMenu = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  // Handle sort criteria and order change
  const handleSort = (criteria, order) => {
    if (sortBy === criteria && sortOrder === order) {
      // Deactivate sort if the same option is clicked again
      setSortBy("");
      setSortOrder("");
    } else {
      setSortBy(criteria);
      setSortOrder(order);
    }
    setIsSortMenuOpen(false); // Close the sort menu after selection
  };

  // Close the sort menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setIsSortMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Projects Heading with Count */}
          <h1
            className={`text-4xl font-bold mb-8 bg-clip-text text-transparent text-center animate-gradient ${
              isLightMode
                ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
            }`}
          >
            Projects ({filteredProjects.length})
          </h1>

          {/* Search Bar and Sort Feature */}
          <div className="flex justify-center md:justify-end mb-8 relative z-50">
            {/* Search Icon */}
            <span
              onClick={toggleSearchBar}
              className={`material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 bg-clip-text text-transparent animate-fade-in animate-gradient cursor-pointer ${
                isLightMode
                  ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                  : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
              }`}
            >
              search
            </span>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by title or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`p-2 pl-10 rounded-lg border transition-all duration-300 ease-in-out text-xs md:text-base ${
                isSearchVisible ? "w-full opacity-100" : "w-0 opacity-0"
              } ${
                isLightMode
                  ? "border-orange-500/60 shadow-[0_2px_8px_rgba(249,115,22,0.2)] lg:border-white/10 lg:hover:border-orange-500/60 lg:hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
                  : "border-blue-500/60 shadow-[0_2px_8px_rgba(59,130,246,0.2)] lg:border-white/10 lg:hover:border-blue-500/60 lg:hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
              } focus:outline-none focus:ring-0`}
            />

            {/* Sort Icon */}
            {isSearchVisible && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2" ref={sortMenuRef}>
                <span
                  onClick={toggleSortMenu}
                  className={`material-symbols-outlined cursor-pointer bg-clip-text text-transparent animate-gradient ${
                    isLightMode
                      ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                      : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
                  }`}
                >
                  sort
                </span>

                {/* Sort Menu */}
                {isSortMenuOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
                      isLightMode
                        ? "bg-white border border-orange-500/60"
                        : "bg-gray-800 border border-blue-500/60"
                    }`}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => handleSort("title", "asc")}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          sortBy === "title" && sortOrder === "asc"
                            ? isLightMode
                              ? "bg-orange-500/10 text-orange-500"
                              : "bg-blue-500/10 text-blue-400"
                            : isLightMode
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        Sort by Title (Asc)
                      </button>
                      <button
                        onClick={() => handleSort("title", "desc")}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          sortBy === "title" && sortOrder === "desc"
                            ? isLightMode
                              ? "bg-orange-500/10 text-orange-500"
                              : "bg-blue-500/10 text-blue-400"
                            : isLightMode
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        Sort by Title (Desc)
                      </button>
                      <button
                        onClick={() => handleSort("validationDate", "asc")}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          sortBy === "validationDate" && sortOrder === "asc"
                            ? isLightMode
                              ? "bg-orange-500/10 text-orange-500"
                              : "bg-blue-500/10 text-blue-400"
                            : isLightMode
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        Sort by Date (Asc)
                      </button>
                      <button
                        onClick={() => handleSort("validationDate", "desc")}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          sortBy === "validationDate" && sortOrder === "desc"
                            ? isLightMode
                              ? "bg-orange-500/10 text-orange-500"
                              : "bg-blue-500/10 text-blue-400"
                            : isLightMode
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        Sort by Date (Desc)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProjects
              .slice(0, showAll ? sortedProjects.length : 4)
              .map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border hover:-translate-y-1 transition ${
                    isLightMode
                      ? "border-orange-500/60 shadow-[0_2px_8px_rgba(249,115,22,0.2)] lg:border-white/10 lg:hover:border-orange-500/60 lg:hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
                      : "border-blue-500/60 shadow-[0_2px_8px_rgba(59,130,246,0.2)] lg:border-white/10 lg:hover:border-blue-500/60 lg:hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">
                    {project.title}
                  </h3>

                  <div className="flex justify-center mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-64 md:w-80 max-h-48 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </div>

                  <p className="mb-4 text-sm md:text-base text-center">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center py-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className={`py-1 px-3 rounded-full text-xs md:text-sm transition-all ${
                          isLightMode
                            ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
                            : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Validation Date */}
                  <div className="text-center text-sm text-white mt-3 mb-7">
                    {project.validationDate}
                  </div>

                  

                  <div>
                  {project.title === "Interactive and Responsive Portfolio Website Built with React, Vite, and Tailwind CSS" && (
                      <button
                        onClick={() => setShowPORT_W(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Diabetes Progression Prediction Using Random Forest Regressor: A Machine Learning Approach" && (
                      <button
                        onClick={() => setShowDB_ML(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Responsive Travel Agency Website with JavaScript Validation and Auto-Slide Banner" && (
                      <button
                        onClick={() => setShowRUW(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Python to EXE Converter: Easily Convert Python Scripts into Custom Executables with a User-Friendly Interface" && (
                      <button
                        onClick={() => setShowPYXE(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Web Automated Login System for Gunadarma University Wifi Access Using Python and Selenium" && (
                      <button
                        onClick={() => setShowAULOG(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "EXE Terminator Generator: Easily Create Custom Tools to Manage and Stop Unwanted Applications." && (
                      <button
                        onClick={() => setShowPYXEK(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Automated Practicum Pre-Test System Using Google Forms, Spreadsheets, and Veyon Master" && (
                      <button
                        onClick={() => setShowAPT(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Computer Management System Using Veyon Master" && (
                      <button
                        onClick={() => setShowCMS(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}

                    {project.title === "Automated QR Code-Based Attendance System for Practicum Using Virtual Cards and Spreadsheet Integration" && (
                      <button
                        onClick={() => setShowAAD(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Project →
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* View All / View Less Button */}
          {filteredProjects.length > 4 && (
            <button
              onClick={handleViewToggle}
              className={`mx-auto block mt-8 bg-clip-text text-transparent animate-fade-in animate-gradient ${
                isLightMode
                  ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                  : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
              }`}
            >
              {showAll ? "↑ View Less" : "View All ↓"}
            </button>
          )}
        </div>
      </RevealOnScroll>

      {/* Project Modals */}
      {showPORT_W && <PORT_W onClose={() => setShowPORT_W(false)} />}
      {showDB_ML && <DB_ML onClose={() => setShowDB_ML(false)} />}
      {showRUW && <RUW onClose={() => setShowRUW(false)} />}
      {showPYXE && <PYXE onClose={() => setShowPYXE(false)} />}
      {showAULOG && <AULOG onClose={() => setShowAULOG(false)} />}
      {showPYXEK && <PYXEK onClose={() => setShowPYXEK(false)} />}
      {showAPT && <APT onClose={() => setShowAPT(false)} />}
      {showCMS && <CMS onClose={() => setShowCMS(false)} />}
      {showAAD && <AAD onClose={() => setShowAAD(false)} />}
    </section>
  );
};