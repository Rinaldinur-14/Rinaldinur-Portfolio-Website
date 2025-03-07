import React, { useEffect, useState } from "react";
import VPYXEK from "src/assets/projects/PYXEK/VPYXEK.png";
import GUI from "src/assets/projects/PYXEK/GUI.png";
import va from "src/assets/projects/PYXE/PY_lOGO.png";
import vb from "src/assets/projects/PYXE/TK_lOGO.png";
import vc from "src/assets/projects/PYXE/PI_lOGO.png";
import vd from "src/assets/projects/PYXE/PN_lOGO.png";
import ve from "src/assets/projects/PYXE/VS_lOGO.png";
import vf from "src/assets/projects/PYXEK/CM_lOGO.png";
import vg from "src/assets/projects/PYXE/DS_lOGO.png";
import MPYXEK from "src/assets/projects/PYXEK/MPYXEK.mp4";


const PYXEK = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const certificationImages = [va, vb, vc, vd, ve, vf, vg]; // Add certification images if available
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
            EXE Terminator Generator: Automating Application Management
          </h2>


                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={VPYXEK}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

          {/* View Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://github.com/Rinaldinur-14/EXE-Terminator-Generator.git"
              target="_blank" rel="noopener noreferrer"
            >
              View Project on GitHub →
            </a>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In October 2023</strong>, I embarked on a project to address a recurring inefficiency in the <strong>Elementary Laboratory of Industrial Engineering at Gunadarma University</strong>. While <strong>Veyon</strong>, a classroom management software, allowed assistants to open applications simultaneously across multiple computers, it lacked the ability to close them. This meant that assistants had to manually terminate applications on each computer, a time-consuming and tedious process. Inspired by this challenge, I developed the <strong>EXE Terminator Generator</strong>, a tool designed to automate the process of closing applications using the <code>taskkill</code> command in Windows.
            </p>
          </div>

          {/* Project Goals */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Project Goals
            </h3>
            <p>
              The primary goal of the project was to improve efficiency by automating the process of closing applications. Here’s what I aimed to achieve:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Automation:</strong> Eliminate the need for manual intervention by automating the process of closing applications.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Create an intuitive GUI that allows users to easily generate custom <code>.exe</code> files.
              </li>
              <li>
                <strong>Scalability:</strong> Ensure the tool can handle multiple target applications simultaneously.
              </li>
              <li>
                <strong>Ease of Deployment:</strong> Generate <code>.exe</code> files that can be easily distributed and run on any Windows system.
              </li>
              <li>
                <strong>Customization:</strong> Allow users to customize the generated <code>.exe</code> files with icons and other metadata using the <strong>Pillow</strong> library for image processing.
              </li>
            </ul>
          </div>

            {/* Why Python, Tkinter, and Pillow? */}
            <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Tools and Technologies
            </h3>
            To bring this project to life, I used the following tools and technologies:

          {/* Certification Carousel ( */}
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
                <strong>CMD (Command Prompt):</strong> Used for executing system commands like <strong>tasklist</strong> to search for running applications by their .exe name and <strong>taskkill</strong> to terminate specific processes programmatically.
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
              The EXE Terminator Generator was implemented using Python and several libraries to automate the process of generating custom .exe files for terminating applications. Below are the key components of the implementation:
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
              The implementation demonstrates how Python, combined with libraries like Tkinter, Pillow, and PyInstaller, can be used to create a powerful and user-friendly tool for automating application management.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Key Features
            </h3>
            <p>
              The <strong>EXE Terminator Generator</strong> is packed with features designed to make application management efficient and user-friendly:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Custom EXE Generation:</strong> Users can specify target applications and generate a custom <code>.exe</code> file to terminate them.
              </li>
              <li>
                <strong>Icon Customization:</strong> Using the <strong>Pillow</strong> library, the tool allows users to add custom icons to the generated <code>.exe</code> files.
              </li>
              <li>
                <strong>Admin Privileges:</strong> The generated <code>.exe</code> files can be configured to require admin privileges for execution.
              </li>
              <li>
                <strong>Progress Indication:</strong> A progress bar provides real-time feedback during the <code>.exe</code> generation process.
              </li>
              <li>
                <strong>Error Handling:</strong> The tool validates user inputs and provides informative error messages for issues like invalid file names or paths.
              </li>
            </ul>
          </div>

          {/* Challenges and Solutions */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Solutions
            </h3>
            <p>
              Developing the <strong>EXE Terminator Generator</strong> came with its own set of challenges. Here’s how I addressed them:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Limited Coding Knowledge:</strong> As someone with minimal coding experience, I relied on online resources like YouTube tutorials and ChatGPT to debug and refine the code.
              </li>
              <li>
                <strong>PyInstaller Conversion:</strong> Converting the Python script to an <code>.exe</code> file was initially problematic. I resolved this by integrating an auto-conversion feature within the GUI.
              </li>
              <li>
                <strong>Icon Handling:</strong> Using the <strong>Pillow</strong> library, I was able to seamlessly convert and embed custom icons into the generated <code>.exe</code> files.
              </li>
              <li>
                <strong>GUI Responsiveness:</strong> To ensure the GUI remained responsive during the <code>.exe</code> generation process, I implemented threading.
              </li>
            </ul>
          </div>

        {/* Future Recommendations */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
            Recommendations for Improvement
            </h3>
            <p>
              While the tool is functional, there are areas where it can be improved:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Batch Processing:</strong> Add support for generating <code>.exe</code> files that can terminate multiple applications simultaneously.
              </li>
              <li>
                <strong>Enhanced Error Handling:</strong> Provide more detailed error messages to help users troubleshoot issues.
              </li>
              <li>
                <strong>Performance Optimization:</strong> Optimize the <code>.exe</code> generation process to reduce the time taken for large-scale tasks.
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
                <source src={MPYXEK} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p>
              The <strong>EXE Terminator Generator</strong> was a resounding success. It significantly reduced the time and effort required to close applications across multiple computers, making the lab assistants’ work more efficient. The tool’s intuitive GUI, combined with features like icon customization using <strong>Pillow</strong> and automated <code>.exe</code> generation, demonstrated the potential of combining coding skills with practical problem-solving. As technology continues to evolve, tools like this will play a crucial role in streamlining workflows and empowering users to achieve more with less effort.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Soft Skills:</strong> Problem-solving, time management, and creativity.
              </li>
              <li>
                <strong>Hard Skills:</strong> Python programming, GUI development, and software deployment.
              </li>
              <li>
                <strong>Technical Skills:</strong> Taskkill command, PyInstaller, threading in Python, and image processing with <strong>Pillow</strong>.
              </li>
            </ul>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PYXEK;