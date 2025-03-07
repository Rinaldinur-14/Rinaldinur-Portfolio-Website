import React, { useEffect, useState } from "react";
import VPORT_W from "src/assets/projects/PORT_W/VPORT_W.png"; // Replace with your image path
import va from "src/assets/projects/RUW/HTML.png";
import vb from "src/assets/projects/PORT_W/REACT.png"; // Replace with your image path
import vc from "src/assets/projects/PORT_W/VITE.png"; // Replace with your image path
import vd from "src/assets/projects/RUW/JS.png";
import ve from "src/assets/projects/PORT_W/TWCSS.png"; // Replace with your image path
import vf from "src/assets/projects/PORT_W/EMAILJS.png"; // Replace with your image path
import vh from "src/assets/projects/PORT_W/VERCEL.png"; // Replace with your image path
import vg from "src/assets/projects/RUW/GH.png";
import vi from "src/assets/projects/PYXE/DS_LOGO.png";
import imp from "src/assets/projects/PORT_W/imp.png";


const PORT_W = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const certificationImages = [va, vb, vc, vd, ve, vf, vg, vh, vi]; // Add certification images

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const goToPreviousCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === 0 ? certificationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === certificationImages.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden" onClick={onClose}>
      <div className="bg-white/10 p-8 rounded-lg w-[70%] h-[90%] mx-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4 pr-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Interactive and Responsive Portfolio Website Built with React, Vite, and Tailwind CSS
          </h2>

          {/* Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={VPORT_W}
              alt="Interactive and Responsive Portfolio Website"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          {/* View Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://github.com/Rinaldinur-14/Rinaldinur-Portfolio-Website.git" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project on GitHub →
            </a>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>From 18 February 2025 to 7 March 2025</strong>, I worked on a project 
              to <strong>create an Interactive and Responsive Portfolio Website</strong> using 
              <strong>React, Vite, and Tailwind CSS</strong>. At the time, I didn’t have a 
              portfolio, and I wanted to build one that could <strong>stand out and showcase 
              my skills, projects, certifications, and contact information</strong> in a 
              visually appealing way. The goal was to make it <strong>eye-catching and 
              engaging</strong>, ensuring it would leave a lasting impression on anyone who 
              visited it. Additionally, I aimed to design the platform to provide a 
              <strong>seamless user experience across all devices</strong>, making it 
              accessible and functional for recruiters and potential collaborators.
            </p>

          </div>

          {/* Project Goals */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Project Goals
            </h3>
            <p>
              The primary objectives of the project were:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Attract Recruiters:</strong> Create a visually appealing and interactive portfolio website that stands out from traditional designs.
              </li>
              <li>
                <strong>Showcase My Work:</strong> Provide a platform to display my projects, certifications, and personal information in an organized and accessible manner.
              </li>
              <li>
                <strong>Self-Learning and Growth:</strong> Challenge myself to learn new technologies and improve my coding skills by building the website almost entirely from scratch.
              </li>
            </ul>
          </div>

          {/* Tools and Technologies */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Tools and Technologies
            </h3>

            {/* Certification Carousel */}
            <div className="flex justify-center mb-4 relative">
              <button
                onClick={goToPreviousCert}
                className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <img
                src={certificationImages[currentCertIndex]}
                alt={`Certification Image ${currentCertIndex + 1}`}
                className="w-full max-w-40 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextCert}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>

            <p>
              To achieve the project goals, I utilized the following tools and technologies:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li>
                <strong>HTML:</strong> Used to build the website's structure.
              </li>
              <li>
                <strong>React:</strong> Used to build the website's interactive and dynamic user interface.
              </li>
              <li>
                <strong>Vite:</strong> Provided fast development and efficient performance for the project.
              </li>
              <li>
                <strong>JavaScript:</strong> Implemented interactive features like smooth scrolling, reveal-on-scroll animations, and the hidden memory game.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Styled the website with a modern and responsive design, enabling quick customization and consistency.
              </li>
              <li>
                <strong>EmailJS:</strong> Integrated a contact form that allows users to send emails directly from the website.
              </li>
              <li>
                <strong>GitHub & Vercel:</strong> Used for version control and deployment, making the website accessible online.
              </li>
              <li>
                <strong>DeepSeek AI:</strong> Assisted in debugging, optimizing code, and generating content, such as this narration.
              </li>
            </ul>
          </div>

          {/* Implementation */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Implementation
            </h3>
            <p>
              The portfolio website was implemented using <strong>React, Vite, and Tailwind CSS</strong>. Below are the key components of the implementation:
            </p>

            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Responsive Design:</strong> Tailwind CSS was used to ensure the website adapts to different screen sizes, providing a seamless experience on both desktop and mobile devices.
              </li>
              <li>
                <strong>Interactive Features:</strong> JavaScript was used to implement features like smooth scrolling, reveal-on-scroll animations, and a hidden memory game.
              </li>
              <li>
                <strong>Advanced Search and Sorting:</strong> Added a search bar and sorting options for projects and certifications, allowing users to filter and sort items by title, technologies, or date.
              </li>
              <li>
                <strong>Light and Dark Mode:</strong> Implemented a customizable theme system with subtle changes in border colors, fonts, and background tones.
              </li>
              <li>
                <strong>Deployment:</strong> The website was hosted on <strong>Vercel</strong>, making it accessible to users online. GitHub was used for version control and collaboration.
              </li>
            </ul>
          </div>

          {/* Website Overview */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Website Overview
            </h3>
            <p>
              The portfolio website was designed to provide users with a comprehensive view of my skills, projects, and certifications. The website consists of the following main sections:
            </p>

          {/* Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={imp}
              alt="Interactive and Responsive Portfolio Website"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

            <div className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
              <a
                href="https://your-vercel-deployment-link" // Replace with your Vercel link
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website →
              </a>
            </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Home:</strong> Features a hero banner with a hidden memory game and quick links to projects and contact sections.
              </li>
              <li>
                <strong>About:</strong> Provides information about me, my skills, and my journey as a developer.
              </li>
              <li>
                <strong>Projects:</strong> Displays my projects with detailed descriptions, images, and links to GitHub repositories.
              </li>
              <li>
                <strong>Certifications:</strong> Showcases my certifications with options to view detailed information and documentation.
              </li>
              <li>
                <strong>Contact:</strong> Includes a contact form powered by EmailJS and links to my social media profiles.
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Key Features
            </h3>
            <p>
              The website includes the following features:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Responsive Design:</strong> The website is fully responsive and works seamlessly on all devices.
              </li>
              <li>
                <strong>Interactive Animations:</strong> Features like reveal-on-scroll and smooth scrolling enhance user engagement.
              </li>
              <li>
                <strong>Hidden Memory Game:</strong> Clicking the hero banner reveals a fun memory game, adding an element of surprise.
              </li>
              <li>
                <strong>Advanced Search and Sorting:</strong> Users can search and sort projects and certifications by title, technologies, or date.
              </li>
              <li>
                <strong>Light and Dark Mode:</strong> The website supports customizable themes for better user experience.
              </li>
            </ul>
          </div>

          {/* Challenges and Problems */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Problems
            </h3>
            <p>
              While building this website, I faced several challenges:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>New to Programming:</strong> As a self-taught programmer, I struggled with positioning and design at times, requiring extensive research and experimentation.
              </li>
              <li>
                <strong>Time-Consuming Process:</strong> The project took longer than expected due to my focus on detail and desire to implement advanced features.
              </li>
              <li>
                <strong>Code Organization:</strong> The codebase is not as tidy as I would like, making future updates and maintenance more challenging.
              </li>
              <li>
                <strong>Unrealized Features:</strong> Some features I envisioned, such as a 3D website, were beyond my current skill level and had to be postponed for future projects.
              </li>
            </ul>
          </div>

          {/* Recommendations for Improvement */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Recommendations for Improvement
            </h3>
            <p>
              To enhance the website further, I plan to:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Improve Code Structure:</strong> Refactor the code to make it more modular and maintainable.
              </li>
              <li>
                <strong>Add 3D Elements:</strong> Explore Three.js or similar libraries to create a 3D version of the website.
              </li>
              <li>
                <strong>Enhance UI/UX:</strong> Incorporate more animations and interactive elements to make the website even more engaging.
              </li>
              <li>
                <strong>Optimize Performance:</strong> Reduce load times and improve responsiveness for an even smoother user experience.
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>

            <p>
              This portfolio website project was a <strong>transformative experience</strong> for me. It not only allowed me to showcase my skills and creativity but also pushed me to learn new technologies and overcome challenges. Despite being my first major project, I am proud of the outcome and the effort I put into it. This project taught me valuable lessons in <strong>problem-solving, time management, and attention to detail</strong>. Moving forward, I aim to build on this foundation, creating even more innovative and impactful projects.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Technical Skills:</strong> HTML, React, Vite, Tailwind CSS, JavaScript, GitHub, Vercel responsive design, and EmailJS integration.
              </li>
              <li>
                <strong>Soft Skills:</strong> Self-learning, perseverance, and creativity.
              </li>
              <li>
                <strong>Learning:</strong> Gained experience in building an interactive and responsive portfolio website using React, Vite, and Tailwind CSS.
              </li>
            </ul>
          </div>

          {/* References */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10 ">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              References
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <a
                  className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
                  href="https://youtu.be/LGdPMf-SgBA?si=-RSiVbBbk8aE_KdJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  YouTube Tutorials:
                </a>
                Followed 2 hours tutorials and heavily modified them to suit my needs.
              </li>
              <li>
                <a
                  className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
                  href="https://www.deepseek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DeepSeek AI:
                </a>
                Assisted in debugging, optimizing code, and generating content.
              </li>
              <li>
              Friends and Online Communities: Sought advice and feedback from peers and online forums.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PORT_W;
