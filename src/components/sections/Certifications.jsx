import { useState } from "react";
import { RevealOnScroll } from "src/components/RevealOnScroll";
import BKS from "src/assets/certificates/BK_FD/BK_FD.png";
import DQA from "src/assets/certificates/DQ_DA/DQAA.png";
import DSA from "src/assets/certificates/DS_ST/ds4.png";
import IODADA from "src/assets/certificates/IODA_DA/ioda_da.png";
import LA from "src/assets/certificates/LIA/liae.jpg";
import OCCDAA from "src/assets/certificates/OCC_DA/OCC_DA.png";
import OCCFDA from "src/assets/certificates/OCC_FD/OCC_FD.png";
import RUDA from "src/assets/certificates/RU_DA/ru_da.png";
import RUFD from "src/assets/certificates/RU_FD/RU_FD.png";
import TDL from "src/assets/certificates/SINAU_TDL/tdl.png";
import SSD from "src/assets/certificates/SS_DA/ss_da.png";
import SSM from "src/assets/certificates/SS_ML/ss_ml.png";
import BNS from "src/assets/certificates/UG/bnsp.png";
import KH from "src/assets/certificates/UG/kh.png";
import VRA from "src/assets/certificates/UG/vra.png";
import WO from "src/assets/certificates/UG/wb.png";
import ISPA from "src/assets/certificates/ISP/ISP.png";
import ALZA from "src/assets/certificates/ALZ/ALZ.png";
import BK_FD from "src/components/sections/Certifications/BK_FD";
import ALZ from "src/components/sections/Certifications/ALZ";
import BNSP from "src/components/sections/Certifications/BNSP";
import DQ_DA from "src/components/sections/Certifications/DQ_DA";
import DS_ST from "src/components/sections/Certifications/DS_ST"; 
import IODA_DA from "src/components/sections/Certifications/IODA_DA";
import KURSUS_UG from "src/components/sections/Certifications/KURSUS_UG";
import LIA from "src/components/sections/Certifications/LIA";
import OCC_DA from "src/components/sections/Certifications/OCC_DA";
import OCC_FD from "src/components/sections/Certifications/OCC_FD";
import RU_DA from "src/components/sections/Certifications/RU_DA";
import RU_FD from "src/components/sections/Certifications/RU_FD";
import SINAU_TDL from "src/components/sections/Certifications/SINAU_TDL";
import SS_DA from "src/components/sections/Certifications/SS_DA";
import SS_ML from "src/components/sections/Certifications/SS_ML";
import VR from "src/components/sections/Certifications/VR";
import WO_UG from "src/components/sections/Certifications/WO_UG";
import ISP_LMS from "src/components/sections/Certifications/ISP_LMS";

const certifications = [
  // {
  //   title: " ",
  //   description: " ",
  //   technologies: ["", "", "", ""],
  //   image: ,
  //   link: "#",
  //   validationDate: "", // Add validation date
  // },
  {
    title: "Skola Talk - DigitalSkola",
    description: "Webinar series designed to educate participants on topics related to data science, machine learning, data analysis, and other digital skills. These sessions provide insights into industry transformation, career opportunities, and essential tools for professionals.",
    technologies: ["AWS", "QA Engineering", "Postman", "Microsoft Excel", "Digital Writing", "Data Science"],
    image: DSA,
    link: "#",
    validationDate: "4 March 2025", // Add validation date
  },
  {
    title: "Frontend Fundamentals Bootcamp - OneCodeCamp",
    description: "Completed a 2-week frontend development bootcamp, covering HTML, CSS, JavaScript, and DOM manipulation. Gained foundational knowledge and practical skills essential for building and styling web pages.",
    technologies: ["HTML", "CSS", "JavaScript", "Git & GitHub", "DOM Manipulation"],
    image: OCCFDA,
    link: "#",
    validationDate: "2 March 2025", // Add validation date
  },
  {
    title: "Introduction to Software Engineering Mini Course - RevoU",
    description: "Completed a 2-week mini course on software engineering, covering theoretical concepts, practical applications, and career preparation. Gained proficiency in tools like HTML, CSS, JavaScript, and Git, along with hands-on experience in building a responsive travel agency website as a mini project.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Responsive Design",
      "UI/UX",
      "Web Development"
    ],
    image: RUFD, // Replace with your project image
    link: "#", // Add a link to the project if available
    validationDate: "28 February 2025", // Course completion date
  },
  {
    title: "Transforming On-the-Job Training Webinar - iSpring Learn",
    description: "Participated in a webinar on optimizing on-the-job training programs using the iSpring Learn platform. Gained insights into training design, assessment, and reporting for effective employee development.",
    technologies: [
      "On-the-Job Training (OJT)",
      "Training Module Design",
      "Assessment Tools",
      "Reporting and Analytics"
    ],
    image: ISPA, // Assuming ISPA is the imported image for the certificate
    link: "#",
    validationDate: "27 February 2025", // Webinar completion date
  },
  {
    title: "Data Analyst Class - Special Skill",
    description: "Completed a comprehensive data analyst program, covering data analysis concepts, tools, and practical applications using Excel and Python. Gained hands-on experience in data interpretation and analysis.",
    technologies: [
      "Excel",
      "Python",
      "Data Analysis",
      "Data Interpretation",
      "Business Decision-Making"
    ],
    image: SSD, // Assuming SSD is the imported image for the certificate
    link: "#",
    validationDate: "24 February 2025", // Training completion date
  },
  {
    title: "Machine Learning Class - Special Skill",
    description: "Completed a comprehensive machine learning program, covering AI fundamentals, machine learning concepts, and practical AI model building. Gained hands-on experience in creating AI models and understanding data for AI.",
    technologies: [
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "AI Model Building"
    ],
    image: SSM, // Assuming SSM is the imported image for the certificate
    link: "#",
    validationDate: "23 February 2025", // Training completion date
  },
  {
    title: "Data Analyst & Machine Learning Bootcamp - DQ Lab",
    description: "Completed multiple bootcamps at DQLab, covering data analysis with SQL, Python, and Excel, as well as machine learning and AI fundamentals. Gained hands-on experience in data cleaning, preprocessing, and analysis.",
    technologies: [
      "SQL",
      "Python",
      "Excel",
      "Data Cleaning",
      "Data Preprocessing",
      "Machine Learning",
      "AI"
    ],
    image: DQA, // Assuming DQA is the imported image for the latest certificate
    link: "#",
    validationDate: "19 February 2025", // Latest bootcamp completion date
  },
  {
    title: "Backend Python Mini Bootcamp - Alhazen Academy",
    description: "A 3-day intensive bootcamp focused on backend development using Python. The program covers fundamental concepts, hands-on Python programming, basic syntax, variables, input handling, and practical exercises.",
    technologies: [
      "Python",
      "Interactive Mode",
      "Scripting Mode",
      "Basic Python Functions",
      "Error Handling"
    ],
    image: ALZA,
    link: "#",
    validationDate: "19 February 2025", // Latest bootcamp completion date
  },
  {
    title: "Weekend Class Data Analyst - IODA Academy",
    description: "Completed a 2-day training program on data analysis and visualization using Excel and Looker Studio. Gained skills in data cleansing, descriptive statistics, and creating interactive dashboards.",
    technologies: [
      "Excel",
      "Looker Studio",
      "Data Cleansing",
      "Descriptive Statistics",
      "Data Visualization"
    ],
    image: IODADA, // Assuming IODADA is the imported image for the certificate
    link: "#",
    validationDate: "16 February 2025", // Training completion date
  },
  {
    title: "Introduction to Data Analytics Mini Course - RevoU",
    description: "Completed a 10-day mini course on data analytics, covering theoretical concepts, practical applications, and career preparation. Gained proficiency in tools like Python, Google Data Studio, SQL, and Tableau, along with skills in data visualization and data-driven marketing.",
    technologies: [
      "Python",
      "Google Data Studio",
      "SQL",
      "Looker",
      "Google BigQuery",
      "Tableau",
      "Data Visualization",
      "Data-Driven Marketing"
    ],
    image: RUDA, // Assuming RUDA is the imported image for the certificate
    link: "#",
    validationDate: "14 February 2025", // Bootcamp completion date
  },
  {
    title: "Data Analytics Fundamentals Bootcamp - OneCodeCamp",
    description: "Completed a 8-day data analytics bootcamp, covering theoretical concepts, practical applications, and career preparation. Gained foundational knowledge and practical skills essential for excelling in the field of data analytics.",
    technologies: ["Python", "Jupyter Notebook", "SQLite", "Matplotlib", "Pandas", "Numpy", "Visual Studio Code"],
    image: OCCDAA,
    link: "#",
    validationDate: "13 February 2025", // Add validation date
  },
  {
    title: "Building a To-Do List App Webinar - Sinau Koding",
    description: "Participated in a webinar on building a to-do list application for efficient time management. Gained hands-on experience in web development using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: TDL, // Assuming TDL is the imported image for the webinar certificate
    link: "#",
    validationDate: "11 February 2025", // Webinar completion date
  },
  {
    title: "Bootcamp Kilat Full-Stack Web Developer - harisenin.com",
    description: "Completed a 2-day intensive program on full-stack web development, covering front-end and back-end technologies, testing, deployment, and career development. Gained hands-on experience in creating landing pages and understanding UI frameworks.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "UI Frameworks",
      "Testing and Deployment",
      "Full-Stack Development"
    ],
    image: BKS, // Assuming BKS is the imported image for the certificate
    link: "#",
    validationDate: "11 February 2025", // Program completion date
  },
  {
    title: "Manufacturing System Quality Control - BNSP",
    description: "Certified competence in Manufacturing System Quality Control, covering quality standards, statistical techniques, troubleshooting, quality assurance plans, internal audits, and customer complaint follow-up.",
    technologies: ["Quality Standards Setting", "Statistical Techniques for Quality Control", "Troubleshooting Techniques", "Quality Assurance Planning", "Internal Auditing", "Customer Complaint Resolution"],
    image: BNS, // Assuming BNS is the imported image for the BNSP certification
    link: "#",
    validationDate: "6 July 2024 - 6 July 2027", // Validation period of 3 years
  },
  {
    title: "Production and Quality Management Courses - Gunadarma University",
    description: "Completed multiple training programs at Gunadarma University, covering product design, process planning, production system design, quality control, and quality assurance. Gained skills in optimizing production processes, ensuring quality standards, and developing quality assurance plans.",
    technologies: [
      "Product Design",
      "Process Planning",
      "Production System Design",
      "Quality Control",
      "Quality Assurance",
      "Statistical Techniques",
      "Internal Auditing"
    ],
    image: KH, // Assuming KH is the imported image for the latest certificate (Quality Assurance)
    link: "#",
    validationDate: "22 June 2024", // Latest training completion date
  },
  {
    title: "ProModel & ISO 14001 Workshop - Gunadarma University",
    description: "Completed workshops on ProModel simulation software and ISO 14001 Environmental Management Systems, gaining skills in process optimization and sustainable industrial practices.",
    technologies: [
      "ProModel V7.5",
      "System Modeling",
      "Simulation Analysis",
      "ISO 14001 Standards",
      "Environmental Management Systems"
    ],
    image: WO, // Assuming WO is the imported image for the workshop certificates
    link: "#",
    validationDate: "18 October 2023", // Latest workshop completion date
  },
  {
    title: "Virtual Reality (VR) Technology in Industry 4.0 - Gunadarma University",
    description: "Comprehensive training in VR applications, 3D modeling using blender, game engine integration, and user interface design for industrial applications.",
    technologies: [
      "VR Applications",
      "3D Modeling",
      "Blender",
      "Game Engine Integration",
      "Oculus Integration",
      "User Interface Design"
    ],
    image: VRA, // Assuming VRA is the imported image for the VR certificate
    link: "#",
    validationDate: "23 June 2023", // Completion date of the training
  },
  {
    title: "LIA English Certificates",
    description: "Completed multiple English language courses at Lembaga Bahasa LIA, enhancing proficiency from elementary to high-intermediate levels. Developed skills in listening, speaking, reading, and writing, with a focus on critical thinking and effective communication.",
    technologies: [
      "English Proficiency",
      "Listening",
      "Speaking",
      "Reading",
      "Writing",
      "Critical Thinking",
      "Project-Based Learning"
    ],
    image: LA, // Assuming LA is the imported image for the latest certificate
    link: "#",
    validationDate: "28 December 2018", // Latest course completion date
  },
];

export const Certifications = ({ isLightMode }) => {
  const [showRU_FD, setShowRU_FD] = useState(false);
  const [showOCC_FD, setShowOCC_FD] = useState(false);
  const [showDS_ST, setShowDS_ST] = useState(false);
  const [showISP_LMS, setShowISP_LMS] = useState(false);
  const [showSS_DA, setShowSS_DA] = useState(false);
  const [showSS_ML, setShowSS_ML] = useState(false);
  const [showDQ_DA, setShowDQ_DA] = useState(false);
  const [showALZ, setShowALZ] = useState(false);
  const [showIODA_DA, setShowIODA_DA] = useState(false);
  const [showRU_DA, setShowRU_DA] = useState(false);
  const [showOCC_DA, setShowOCC_DA] = useState(false);
  const [showSINAU_TDL, setShowSINAU_TDL] = useState(false);
  const [showBK_FD, setShowBK_FD] = useState(false);
  const [showBNSP, setShowBNSP] = useState(false);
  const [showKURSUS_UG, setShowKURSUS_UG] = useState(false);
  const [showWO_UG, setShowWO_UG] = useState(false);
  const [showVR, setShowVR] = useState(false);
  const [showLIA, setShowLIA] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const handleViewToggle = () => {
    setShowAll(!showAll);
    if (showAll) {
      const certificationsSection = document.getElementById("certifications");
      if (certificationsSection) {
        certificationsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Filter certifications based on search query
  const filteredCertifications = certifications.filter((certification) =>
    certification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    certification.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Sort certifications
  const sortedCertifications = [...filteredCertifications].sort((a, b) => {
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

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Certifications Heading with Count */}
          <h1
            className={`text-4xl font-bold mb-8 bg-clip-text text-transparent text-center animate-gradient ${
              isLightMode
                ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
                : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
            }`}
          >
            Certifications ({filteredCertifications.length})
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
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
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

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedCertifications
              .slice(0, showAll ? sortedCertifications.length : 4)
              .map((certification, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border hover:-translate-y-1 transition ${
                    isLightMode
                      ? "border-orange-500/60 shadow-[0_2px_8px_rgba(249,115,22,0.2)] lg:border-white/10 lg:hover:border-orange-500/60 lg:hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
                      : "border-blue-500/60 shadow-[0_2px_8px_rgba(59,130,246,0.2)] lg:border-white/10 lg:hover:border-blue-500/60 lg:hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">
                    {certification.title}
                  </h3>

                  <div className="flex justify-center mb-4">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="w-64 md:w-80 max-h-48 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </div>

                  <p className="mb-4 text-sm md:text-base text-center">
                    {certification.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center py-4">
                    {certification.technologies.map((tech, key) => (
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
                  <div className="text-center text-sm text-gray-400 mt-3 mb-7">
                    {certification.validationDate}
                  </div>


                  {/* Template Sertif */}
                  {/* {certification.title === " " && (
                      <button
                        onClick={() => setShow (true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )} */}

                  {certification.title === "Skola Talk - DigitalSkola" && (
                      <button
                        onClick={() => setShowDS_ST(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}


                  {certification.title === "Frontend Fundamentals Bootcamp - OneCodeCamp" && (
                      <button
                        onClick={() => setShowOCC_FD(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                {certification.title === "Introduction to Software Engineering Mini Course - RevoU" && (
                      <button
                        onClick={() => setShowRU_FD(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                  {certification.title === "Transforming On-the-Job Training Webinar - iSpring Learn" && (
                      <button
                        onClick={() => setShowISP_LMS(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                  {certification.title === "Data Analyst Class - Special Skill" && (
                      <button
                        onClick={() => setShowSS_DA (true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                  {certification.title === "Machine Learning Class - Special Skill" && (
                      <button
                        onClick={() => setShowSS_ML(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                  {certification.title === "Data Analyst & Machine Learning Bootcamp - DQ Lab" && (
                      <button
                        onClick={() => setShowDQ_DA(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Backend Python Mini Bootcamp - Alhazen Academy" && (
                      <button
                        onClick={() => setShowALZ(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                  {certification.title === "Weekend Class Data Analyst - IODA Academy" && (
                      <button
                        onClick={() => setShowIODA_DA(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Introduction to Data Analytics Mini Course - RevoU" && (
                      <button
                        onClick={() => setShowRU_DA(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Data Analytics Fundamentals Bootcamp - OneCodeCamp" && (
                      <button
                        onClick={() => setShowOCC_DA(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Building a To-Do List App Webinar - Sinau Koding" && (
                      <button
                        onClick={() => setShowSINAU_TDL(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Bootcamp Kilat Full-Stack Web Developer - harisenin.com" && (
                      <button
                        onClick={() => setShowBK_FD(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Manufacturing System Quality Control - BNSP" && (
                      <button
                        onClick={() => setShowBNSP(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Production and Quality Management Courses - Gunadarma University" && (
                      <button
                        onClick={() => setShowKURSUS_UG(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "ProModel & ISO 14001 Workshop - Gunadarma University" && (
                      <button
                        onClick={() => setShowWO_UG(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "Virtual Reality (VR) Technology in Industry 4.0 - Gunadarma University" && (
                      <button
                        onClick={() => setShowVR(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}

                    {certification.title === "LIA English Certificates" && (
                      <button
                        onClick={() => setShowLIA(true)}
                        className={`transition-colors ${
                          isLightMode
                            ? "text-orange-500 hover:text-orange-400"
                            : "text-blue-400 hover:text-blue-300"
                        }`}
                      >
                        View Certificate →
                      </button>
                    )}
                  </div>
              ))}
          </div>

          {/* View All / View Less Button */}
          {filteredCertifications.length > 4 && (
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

      {/* Certificate Modals */}
      {showRU_FD && <RU_FD onClose={() => setShowRU_FD(false)} />}
      {showOCC_FD && <OCC_FD onClose={() => setShowOCC_FD(false)} />}
      {showDS_ST && <DS_ST onClose={() => setShowDS_ST(false)} />}
      {showISP_LMS && <ISP_LMS onClose={() => setShowISP_LMS(false)} />}
      {showSS_DA && <SS_DA onClose={() => setShowSS_DA(false)} />}
      {showSS_ML && <SS_ML onClose={() => setShowSS_ML(false)} />}
      {showDQ_DA && <DQ_DA onClose={() => setShowDQ_DA(false)} />}
      {showALZ && <ALZ onClose={() => setShowALZ(false)} />}
      {showIODA_DA && <IODA_DA onClose={() => setShowIODA_DA(false)} />}
      {showRU_DA && <RU_DA onClose={() => setShowRU_DA(false)} />}
      {showOCC_DA && <OCC_DA onClose={() => setShowOCC_DA(false)} />}
      {showSINAU_TDL && <SINAU_TDL onClose={() => setShowSINAU_TDL(false)} />}
      {showBK_FD && <BK_FD onClose={() => setShowBK_FD(false)} />}
      {showBNSP && <BNSP onClose={() => setShowBNSP(false)} />}
      {showKURSUS_UG && <KURSUS_UG onClose={() => setShowKURSUS_UG(false)} />}
      {showWO_UG && <WO_UG onClose={() => setShowWO_UG(false)} />}
      {showVR && <VR onClose={() => setShowVR(false)} />}
      {showLIA && <LIA onClose={() => setShowLIA(false)} />}
    </section>
  );
};