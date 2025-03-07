import React, { useEffect, useState } from 'react';
import VAULOG from "src/assets/projects/AULOG/VAULOG.png";
import va from "src/assets/projects/PYXE/PY_LOGO.png";
import vb from "src/assets/projects/AULOG/Selenium_Logo.png";
import vc from "src/assets/projects/PYXE/VS_LOGO.png";
import vd from "src/assets/projects/CMS/VEYON_LOGO.png";
import ve from "src/assets/projects/PYXE/PN_LOGO.png";
import vf from "src/assets/projects/AULOG/CG_LOGO.png";
import MAULOG from "src/assets/projects/AULOG/MAULOG.mp4";

const AULOG = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const certificationImages = [va, vb, vc, vd, ve, vf]; // Placeholder for certification images
  const documentationImages = []; // Placeholder for documentation images

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
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

  const goToPreviousDoc = () => {
    setCurrentDocIndex((prevIndex) =>
      prevIndex === 0 ? documentationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextDoc = () => {
    setCurrentDocIndex((prevIndex) =>
      prevIndex === documentationImages.length - 1 ? 0 : prevIndex + 1
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
            Web Automated Login System for Gunadarma University Wifi Access Using Python and Selenium
          </h2>


                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={VAULOG}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

          {/* View Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://github.com/Rinaldinur-14/Web-Automated-Login-System.git"
              target="_blank" rel="noopener noreferrer"
            >
              View Project on GitHub →
            </a>
          </div>


          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In November 2023</strong>, I initiated a project to develop an <strong>Automated Login System</strong> for Gunadarma University's wifi access using <strong>Python</strong> and <strong>Selenium</strong>. The goal was to streamline the process of logging into the university's wifi network, which required students to manually enter their credentials on each computer. This manual process was time-consuming and inefficient, especially in the <strong>Elementary Laboratory of Industrial Engineering</strong>, where multiple computers needed to be prepared for pre-tests and other activities. As the project manager, I aimed to create a solution that would automate this process, saving time and effort for the laboratory assistants.
            </p>
            <p>
              The project was born out of a need to improve efficiency in the laboratory. Previously, laboratory assistants had to manually log in to each computer using student credentials to access the wifi. This process was not only repetitive but also prone to errors, especially when dealing with a large number of computers. By automating the login process, I aimed to reduce the time and effort required for these tasks.
            </p>
          </div>


          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
          <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
            Tools and Technologies
          </h3>
          <p>
            To achieve the project goals, I utilized the following tools and technologies:
          </p>

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

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li>
              <strong>Python:</strong> The primary programming language used for scripting the automation process. Python’s readability and extensive library support made it ideal for this project.
            </li>
            <li>
              <strong>Selenium:</strong> A powerful web automation library used to interact with the Gunadarma University wifi login page. Selenium allowed the script to navigate the website, input credentials, and submit the login form automatically.
            </li>
            <li>
              <strong>Visual Studio Code:</strong> The Integrated Development Environment (IDE) used for writing, debugging, and testing the Python script. Its user-friendly interface and extensions made development efficient.
            </li>
            <li>
              <strong>Veyon Master:</strong> Used to deploy and run the .exe file simultaneously on multiple computers in the laboratory. Veyon Master ensured that the login process could be automated across all machines at once.
            </li>
            <li>
              <strong>PyInstaller:</strong> This library was used to convert the Python script into a standalone <code>.exe</code> file, making it easy to distribute and run on any Windows system without requiring Python to be installed.
            </li>
            <li>
                <strong>ChatGPT  AI:</strong> An AI-powered coding assistant that helped me debug issues, optimize code, and recommend solutions for implementing features like the auto-slide banner and form validation. ChatGPT AI played a crucial role in overcoming challenges and improving the overall quality of the project.
              </li>
          </ul>
        </div>

          {/* Implementation */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Implementation
            </h3>
            <p>
              The core of the project was a Python script that automated the login process for the Gunadarma University wifi portal. Here’s a breakdown of the code and its functionality:
            </p>
            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Importing Required Libraries:</strong> The script used Selenium for browser automation and WebDriverWait to ensure the script waited for specific elements to load before interacting with them.</li>
              <li><strong>Setting Up Credentials and Website Link:</strong> The script targeted the university's login page and used predefined credentials for authentication.</li>
              <li><strong>Locating Web Elements:</strong> The script identified the HTML elements for the username, password, and submit button using their respective attributes.</li>
              <li><strong>Automating the Login Process:</strong> The script initialized the Chrome browser, navigated to the login page, and waited for the username and password fields to load. It then input the credentials and clicked the submit button to complete the login process.</li>
            </ul>
          </div>

          {/* Challenges and Limitations */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Limitations
            </h3>
            <p>
              While the project was successful, it had several limitations:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Lack of Customizability:</strong> The script is tailored specifically for the Gunadarma University login page. It may not work on other websites with different element names or structures.</li>
              <li><strong>No Captcha Handling:</strong> The script cannot handle websites that use captcha for security.</li>
              <li><strong>Speed:</strong> The script takes several seconds to a minute to execute, which may be slow for some users.</li>
              <li><strong>Hardcoded Credentials:</strong> The script contains hardcoded credentials, making it necessary to update the code if the username or password changes.</li>
              <li><strong>Dependency on Website Structure:</strong> If the website’s structure changes (e.g., element names or IDs), the script will need to be updated.</li>
              <li><strong>Dependency on Veyon:</strong> The script relies on Veyon Master to run simultaneously on multiple computers, which adds an extra layer of complexity.</li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
            Recommendations for Improvement
            </h3>
            <p>
              To address these limitations and improve the project, I recommend the following:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Dynamic Credential Input:</strong> Modify the script to accept credentials as user input or from an external file, making it more flexible and secure.</li>
              <li><strong>Captcha Handling:</strong> Integrate a captcha-solving mechanism or use an alternative approach for websites with captcha.</li>
              <li><strong>Error Handling:</strong> Enhance error handling to manage unexpected changes in the website’s structure or network issues.</li>
              <li><strong>Optimization:</strong> Optimize the script to reduce execution time, possibly by minimizing wait times or using headless browser mode.</li>
              <li><strong>Generalization:</strong> Develop a more generalized solution that can adapt to different websites by dynamically identifying login elements.</li>
              <li><strong>Startup Integration:</strong> Add the application to the startup programs of the computers so that it runs automatically when the PCs are turned on. This eliminates the need for Veyon Master to run the program simultaneously, making the process more seamless and efficient.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>
            {/* Video */}
            <div className="flex flex-col items-center mb-2">
              <video
                controls
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              >
                <source src={MAULOG} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p>
              The <strong>Automated Login System for Gunadarma University Wifi Access</strong> successfully addressed the inefficiencies of manual login processes in the laboratory. By leveraging Python and Selenium, I was able to create a solution that saved time and effort for the laboratory assistants. However, the project highlighted the importance of flexibility and scalability in automation scripts. With further improvements, such as integrating the application into the startup programs and enhancing its adaptability, this system could be adapted for a wider range of applications, making it a valuable tool for automating repetitive tasks in various environments.
            </p>
          </div>

          {/* Acknowledgments */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Acknowledgments
            </h3>
            <p>
              I would like to express my gratitude to <strong>Mr. Mahesa</strong>, as elementary laboratory of Industrial Enginnering staff member, for his assistance and support throughout the project. His guidance was instrumental in overcoming challenges and ensuring the project’s success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AULOG;