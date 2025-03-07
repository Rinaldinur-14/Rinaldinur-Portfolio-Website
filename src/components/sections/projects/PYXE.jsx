import React, { useEffect, useState } from "react";
import VPYXE from "src/assets/projects/PYXE/VPYXE.png";
import GUI from "src/assets/projects/PYXE/GUI.png";
import va from "src/assets/projects/PYXE/PY_lOGO.png";
import vb from "src/assets/projects/PYXE/TK_lOGO.png";
import vc from "src/assets/projects/PYXE/PI_lOGO.png";
import vd from "src/assets/projects/PYXE/PN_lOGO.png";
import ve from "src/assets/projects/PYXE/VS_lOGO.png";
import vf from "src/assets/projects/PYXE/DS_lOGO.png";
import MPYXE from "src/assets/projects/PYXE/MPYXE.mp4";


const PYXE = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const certificationImages = [va, vb, vc, vd, ve, vf]; // Add certification images if available
  const documentationImages = []; // Add documentation images if available

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
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      <div
        className="bg-white/10 p-8 rounded-lg w-[70%] h-[90%] mx-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4 pr-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Python to EXE Converter: Easily Convert Python Scripts into Custom Executables with a User-Friendly Interface
          </h2>

                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={VPYXE}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

        {/* View Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://github.com/Rinaldinur-14/Python-to-EXE-Converter.git"
              target="_blank" rel="noopener noreferrer"
            >
              View Project on GitHub →
            </a>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In late November 2023</strong>, I initiated a project to create a Python-to-EXE converter application that would simplify the process of converting Python scripts into executable files. This project was born out of a need to improve efficiency in my work environment, particularly for tasks like creating autologin programs and EXE terminator generators. Manually converting Python files to executables was time-consuming and required technical knowledge, which not everyone possessed. My goal was to develop a tool that could automate this process, making it accessible even to those with minimal coding experience.
            </p>
            <p>
              The project was conducted in the <strong>Elementary Laboratory of Industrial Engineering at Gunadarma University</strong>, where I took on the role of project manager. With limited coding knowledge, I relied heavily on online resources, including YouTube tutorials and ChatGPT, to guide me through the development process. The initial phase of the project lasted from <strong>21 November 2023 to 23 November 2023</strong>, during which I created the core functionality of the converter. Later, on <strong>20 February 2025</strong>, I revisited the project to optimize the code and add a user-friendly graphical interface (GUI) with the help of DeepSeek, an AI-powered coding assistant.
            </p>
          </div>

          {/* Goals */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Project Goals
            </h3>
            <p>
              The primary objective of this project was to create a tool that would:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Simplify the Conversion Process:</strong> Automate the conversion of Python scripts (.py) to executable files (.exe) with minimal user input.
              </li>
              <li>
                <strong>Enhance Efficiency:</strong> Reduce the time and effort required to create executables, especially for repetitive tasks.
              </li>
              <li>
                <strong>Provide Customization Options:</strong> Allow users to customize the output executable’s name, icon, and save location.
              </li>
              <li>
                <strong>Include Advanced Features:</strong> Offer options like requiring admin privileges and automatically opening the output folder after conversion.
              </li>
              <li>
                <strong>Ensure Clean Output:</strong> Eliminate unnecessary byproducts (e.g., temporary files) and produce only the final executable.
              </li>
            </ul>
          </div>


          {/* Why Python, Tkinter, and Pillow? */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Tools and Technologies
            </h3>
            To bring this project to life, I used the following tools and technologies:

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
                <strong>Python:</strong> Known for its readability and extensive library support, Python made it easy to implement the core functionality of the tool.
              </li>
              <li>
                <strong>Tkinter:</strong> As Python’s standard GUI library, Tkinter provided the tools needed to create a user-friendly interface without requiring additional dependencies.
              </li>
              <li>
                <strong>Pillow:</strong> This library was used to handle image processing, particularly for converting and embedding custom icons into the generated <code>.exe</code> files.
              </li>
              <li>
                <strong>PyInstaller:</strong> This library allowed me to convert the Python script into a standalone <code>.exe</code> file, making it easy to distribute and use.
              </li>
              <li>
                <strong>Visual Studi Code:</strong> This Integrated Development Environment (IDE) allowed me to write, debug, and test the code efficiently.
              </li>
              <li>
                <strong>DeepSeek AI:</strong> An AI-powered coding assistant that helped me debug issues, optimize code, and recommend solutions for implementing features like the auto-slide banner and form validation. DeepSeek AI played a crucial role in overcoming challenges and improving the overall quality of the project.
              </li>
            </ul>
          </div>

          {/* Implementation */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Implementation
            </h3>
            <p>
              The Python-to-EXE Converter was implemented using Python and several libraries to automate the process of converting Python scripts into executable files. Below are the key components of the implementation:
            </p>

                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={GUI}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Graphical User Interface (GUI):</strong> The GUI was built using <strong>Tkinter</strong>, Python’s standard GUI library. It provides an intuitive interface for users to input the Python script, specify the output .exe name, and customize the icon. The GUI also includes options to require admin privileges and open the output folder after generation.
              </li>
              <li>
                <strong>Input Validation:</strong> The tool validates user inputs to ensure the Python file is valid, the output name does not contain invalid characters, and the icon file is in a supported format (png, jpg, SVG, or ICO). If the icon is not in ICO format, the <strong>Pillow</strong> library is used to convert it.
              </li>
              <li>
                <strong>PyInstaller Integration:</strong> The core functionality of converting the Python script to a standalone .exe file is handled by <strong>PyInstaller</strong>. The tool constructs a command with parameters such as <code>--onefile</code> (to create a single executable), <code>--noconsole</code> (to hide the console window), and <code>--uac-admin</code> (to require admin privileges).
              </li>
              <li>
                <strong>Threading for Responsiveness:</strong> To ensure the GUI remains responsive during the .exe generation process, the tool uses <strong>threading</strong>. This allows the progress bar to update in real-time while the conversion runs in the background.
              </li>
              <li>
                <strong>Error Handling:</strong> The tool includes robust error handling to manage issues such as invalid inputs, PyInstaller errors, and file conversion failures. Informative error messages are displayed to guide users in resolving issues.
              </li>
              <li>
                <strong>Cleanup:</strong> After the .exe file is generated, the tool cleans up residual files such as the <code>.spec</code> file and the <code>build</code> directory created by PyInstaller. This ensures no unnecessary files are left behind.
              </li>
            </ul>
            <p>
              The implementation demonstrates how Python, combined with libraries like Tkinter, Pillow, and PyInstaller, can be used to create a powerful and user-friendly tool for automating the conversion of Python scripts into executable files.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Key Features
            </h3>
            <p>
              The Python-to-EXE converter application is packed with features designed to make the conversion process seamless and user-friendly:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Python File Selection:</strong> Users can browse and select the Python script they want to convert.
              </li>
              <li>
                <strong>Customizable Output:</strong> Set a custom name for the output executable, choose an optional icon, and specify the output directory.
              </li>
              <li>
                <strong>Advanced Options:</strong> Require admin privileges for the executable and automatically open the output folder after conversion.
              </li>
              <li>
                <strong>Progress Indicator:</strong> A progress bar provides visual feedback during the conversion process.
              </li>
              <li>
                <strong>Clean Output:</strong> The application automatically cleans up residual files generated during the conversion process.
              </li>
            </ul>
          </div>

          {/* Challenges and Solutions */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Solutions
            </h3>
            <p>
              While developing this application, I encountered several challenges:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Limited Coding Knowledge:</strong> As someone with minimal coding experience, I struggled with debugging and optimizing the code. I relied on online resources, including YouTube tutorials and ChatGPT, to guide me through the process.
              </li>
              <li>
                <strong>Handling Icon Conversion:</strong> Converting non-ICO images to ICO format was initially problematic. I integrated the Pillow library to handle image conversion seamlessly.
              </li>
              <li>
                <strong>Ensuring Clean Output:</strong> PyInstaller generates residual files that clutter the output directory. I implemented a cleanup function to remove these files after the conversion process.
              </li>
              <li>
                <strong>User Experience:</strong> Without a GUI, the application was difficult for non-technical users to operate. I added a user-friendly GUI using Tkinter, making the application accessible to everyone.
              </li>
            </ul>
          </div>

          {/* Recommendations for Improvement */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Recommendations for Improvement
            </h3>
            <p>
              While the application is functional, there are areas where it can be improved:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Error Handling:</strong> Provide more detailed error messages to help users troubleshoot issues.
              </li>
              <li>
                <strong>Batch Conversion:</strong> Add support for converting multiple Python files to executables in one go.
              </li>
              <li>
                <strong>Performance Optimization:</strong> Optimize the conversion process to reduce the time taken for large scripts.
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>

            {/* Video */}
            <div className="flex flex-col items-center mb-2">
              <video
                controls
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              >
                <source src={MPYXE} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p>
              The Python-to-EXE converter project was a resounding success. It achieved its goal of simplifying the conversion process, making it accessible to users with little to no coding experience. The addition of a user-friendly GUI and advanced features like icon customization and admin privileges further enhanced its utility.
            </p>
            <p>
              While the project presented several challenges, each one was an opportunity to learn and grow. With the help of online resources and AI tools like DeepSeek, I was able to overcome these obstacles and deliver a functional, efficient application.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Technical Skills:</strong> Python programming, Tkinter GUI development, PyInstaller integration, image conversion using Pillow.
              </li>
              <li>
                <strong>Soft Skills:</strong> Problem-solving, time management, and project management.
              </li>
              <li>
                <strong>Learning:</strong> Gained experience in debugging, optimizing code, and working with external libraries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PYXE;