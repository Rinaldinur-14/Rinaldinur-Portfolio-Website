import React, { useEffect, useState } from 'react';
import VAPT from "/src/assets/projects/APT/VAPT.png";
import VA from "/src/assets/projects/APT/VEYON_LOGO.png";
import VB from "/src/assets/projects/APT/SS_LOGO.png";
import VC from "/src/assets/projects/APT/GF_LOGO.png";
import ta from "/src/assets/projects/APT/ta.jpeg";
import tc from "/src/assets/projects/APT/tc.png";

const APT = ({ onClose }) => {
      const [currentDocIndex, setCurrentDocIndex] = useState(0);
      const documentationImages = [VC, VB, VA];


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
            Automated Practicum Pre-Test System Using Google Forms, Spreadsheets, and Veyon Master
          </h2>


                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={VAPT}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In early October 2023</strong>, I initiated a project aimed at <strong>revolutionizing the pre-test process</strong> for practicum participants in the <strong>Elementary Laboratory of Industrial Engineering at Gunadarma University</strong>. 
              The traditional method of conducting pre-tests using paper was not only time-consuming but also environmentally unfriendly. 
              <strong> I envisioned a system that would automate the entire process, from test administration to result evaluation, while ensuring fairness and efficiency.</strong>
            </p>
          </div>

          {/* Goals */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Project Goals
            </h3>
            <p>
              The primary objectives of this project were:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Efficiency:</strong> Reduce the time and effort required to prepare and check pre-tests.</li>
              <li><strong>Environmental Impact:</strong> Minimize paper usage by transitioning to a digital platform.</li>
              <li><strong>Fairness:</strong> Ensure that each practicum participant receives a unique set of questions by rotating seats weekly.</li>
              <li><strong>Automation:</strong> Automate the calculation and storage of test results to reduce manual errors.</li>
              <li><strong>Monitoring:</strong> Use Veyon Master to monitor participants during the test to prevent cheating.</li>
            </ul>
          </div>

          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
            Tools and Technologies
            </h3>
            <p>
              To achieve the project goals, I utilized the following tools and technologies:
            </p>

                        {/* Tools Carousel */}
                        <div className="flex justify-center items-center mt-6 relative">
              <button
                onClick={goToPreviousDoc}
                className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <img
                src={documentationImages[currentDocIndex]}
                alt={`Documentation Image ${currentDocIndex + 1}`}
                className="w-full max-w-40 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextDoc}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Google Forms:</strong> For creating and administering the pre-tests with customizable links  based on seat rotation.
              </li>
              <li>
                <strong>Google Spreadsheets:</strong> For database management, automated result calculation, and data storage using advanced formulas like <strong>IF</strong>, <strong>IFERROR</strong>, <strong>XLOOKUP</strong>, and <strong>IMPORTRANGE</strong>.
              </li>
              <li>
                <strong>Veyon Master:</strong> For real-time monitoring of participants during the test, ensuring they did not access unauthorized resources.
              </li>
            </ul>
          </div>

          {/* Implementation */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Implementation
            </h3>
            <p>
              The system was implemented using a combination of Google Forms, Google Spreadsheets, and Veyon Master. Here’s how it worked:
            </p>
                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={tc}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>
            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Test Administration:</strong> Google Forms was used to create the pre-test. Each form was customized based on the seat rotation system to ensure fairness.</li>
              <li><strong>Monitoring:</strong> Veyon Master was employed to open the test link simultaneously on all computers and to monitor participants during the test, ensuring they did not access unauthorized resources.</li>
              <li><strong>Result Calculation:</strong> Google Spreadsheets was used to store and automatically calculate the test results. Formulas like IF, IFERROR, and XLOOKUP were used to classify results based on student ID, computer number, and test type.</li>
              <li><strong>Data Storage:</strong> The results were automatically stored in the main practicum database using the IMPORTANGE function in Google Spreadsheets.</li>
            </ul>

            <p>
            After the Veyon training session on <strong>14 October 2023</strong> was done, I organized a dedicated training session about this project. 
            During this session, I explained the Automated Practicum Pre-Test System in detail, covering how it works, the reasons for transitioning from the traditional paper-based method, and the benefits of the new system, such as increased efficiency, fairness through seat rotation, and environmental sustainability by reducing paper usage. I also highlighted its key features, including real-time monitoring with Veyon Master and automated result calculation using Google Spreadsheets. Additionally, I addressed potential weaknesses, such as the inability to lock screens during tests. 
            This training ensured that lab assistants understood the system’s value and could effectively utilize it.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Key Features
            </h3>
            <p>
              The Automated Practicum Pre-Test System is designed to streamline the pre-test process, ensuring efficiency, fairness, and environmental sustainability. Here are its key features:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Digital Test Administration:</strong> Pre-tests are conducted using <strong>Google Forms</strong>, eliminating the need for paper-based tests and reducing environmental impact.
              </li>
              <li>
                <strong>Seat Rotation System:</strong> Each practicum participant receives a unique set of questions by rotating seats weekly, ensuring fairness and preventing cheating.
              </li>
              <li>
                <strong>Automated Result Calculation:</strong> Test results are automatically calculated and stored using advanced formulas like <strong>IF</strong>, <strong>IFERROR</strong>, and <strong>XLOOKUP</strong> in <strong>Google Spreadsheets</strong>.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> <strong>Veyon Master</strong> is used to monitor participants during the test, ensuring they do not access unauthorized resources or leave the test window.
              </li>
              <li>
                <strong>Centralized Data Storage:</strong> Test results are automatically stored in the main practicum database using the <strong>IMPORTRANGE</strong> function in Google Spreadsheets, ensuring easy access and organization.
              </li>
              <li>
                <strong>Customizable Test Links:</strong> Each test link is customized based on the seat rotation system, ensuring that participants receive the correct set of questions.
              </li>
              <li>
                <strong>Error Handling:</strong> The system includes filters and dropdown menus in Google Forms to prevent incorrect student ID inputs, ensuring data accuracy.
              </li>
              <li>
                <strong>Scalability:</strong> The system is designed to handle pre-tests for hundreds of participants across multiple practicum sessions.
              </li>
              <li>
                <strong>Environmental Sustainability:</strong> By transitioning to a digital platform, the system significantly reduces paper usage, promoting eco-friendly practices.
              </li>
              <li>
                <strong>Efficiency:</strong> The automation of test administration, result calculation, and data storage reduces manual effort and minimizes errors.
              </li>
            </ul>
          </div>


          {/* Challenges and Solutions */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Solutions
            </h3>
            <p>
              Despite the success of the project, there were some challenges:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Incorrect Student ID Input:</strong> Some participants entered incorrect student IDs, causing data mismatches. This was resolved by adding a filter to the student ID field in the database and using a dropdown menu in Google Forms.</li>
              <li><strong>Screen Locking:</strong> Participants could leave the test window before completing the test. To address this, I recommended researching other test media that could lock the screen during the test.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>
                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={ta}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-60 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>
            <p>
              The Automated Practicum Pre-Test System was a resounding success. It significantly reduced the time and effort required to administer and evaluate pre-tests, while also minimizing paper usage. The system ensured fairness and efficiency, making it a valuable tool for the Elementary Laboratory of Industrial Engineering at Gunadarma University. While there were some challenges, they were promptly addressed, and the system continues to evolve with ongoing improvements.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Soft Skills:</strong> Project management, problem-solving, and teamwork.</li>
              <li><strong>Hard Skills:</strong> Google Forms and Spreadsheets automation, Veyon Master configuration, and database management.</li>
              <li><strong>Technical Skills:</strong> Advanced formula usage in Google Spreadsheets, system monitoring, and remote assistance.</li>
            </ul>
          </div>

          {/* Acknowledgments */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Acknowledgments
            </h3>
            <p>
              I would like to express my gratitude to <strong>Alfredo</strong>, my senior, for providing the initial idea for this project. His inspiration and encouragement were crucial in turning the concept of this project into a reality.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default APT;