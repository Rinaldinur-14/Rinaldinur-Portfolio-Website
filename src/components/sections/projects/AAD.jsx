import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import ad from "src/assets/projects/AAD/VAAD.png";
import ada from "src/assets/projects/AAD/AR_LOGO.png";
import adb from "src/assets/projects/AAD/P_LOGO.png";
import adc from "src/assets/projects/AAD/SIO_LOGO.png";
import add from "src/assets/projects/AAD/SS_LOGO.png";
import ade from "src/assets/projects/AAD/QR_LOGO.png";
import adf from "src/assets/projects/AAD/VCARD.png";
import aa from "src/assets/projects/AAD/aa.jpeg";
import ab from "src/assets/projects/AAD/ab.jpeg";



// eslint-disable-next-line react/prop-types
const AAD = ({ onClose }) => {
    const documentationImages = [ada, adb, adc, add, ade];
    const certificationImages = [aa, ab]; 

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden" onClick={onClose}>
      <div className="bg-white/10 p-8 rounded-lg w-[80%] h-[90%] mx-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Automated QR Code-Based Attendance System for Practicum Using Virtual Cards and Spreadsheet Integration
          </h2>
                  {/*Image */}
                  <div className="flex flex-col items-center mb-2">
                                <img
                                  src={ad}
                                  alt="Special Skill Machine Learning Projectificate"
                                  className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                                />
                  </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>On 28 July 2023</strong>, I initiated the <strong>Automated QR Code-Based Attendance System</strong> project, which concluded on <strong>24 August 2023</strong>. The project was implemented in the <strong>Elementary Laboratory of Industrial Engineering at Gunadarma University</strong>, where I noticed inefficiencies in the traditional attendance tracking system. The manual process of using paper-based practicum cards was time-consuming, prone to errors, and environmentally unsustainable. Inspired by the need for a more efficient and eco-friendly solution, I set out to create a system that would streamline attendance tracking using QR codes and virtual cards.
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
              <li><strong>Efficiency:</strong> Reduce the time and effort required for attendance tracking during practicum sessions.</li>
              <li><strong>Paperless Solution:</strong> Eliminate the use of paper-based practicum cards, promoting sustainability.</li>
              <li><strong>Automation:</strong> Automate attendance data collection and processing using QR codes and spreadsheet integration.</li>
              <li><strong>Scalability:</strong> Ensure the system could handle attendance tracking for hundreds of students across multiple sessions.</li>
            </ul>
          </div>

          {/* Tools Used */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
            Tools Used
            </h3>
            <p>
              To achieve the project goals, I utilized the following tools and technologies:
            </p>

            {/* Tools Carousel */}
            <div className="mb-4">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-tools',
                  prevEl: '.swiper-button-prev-tools',
                }}
                pagination={{ clickable: true }}
                className="relative"
              >
                <div className="swiper-button-prev-tools absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
                  &larr;
                </div>
                <div className="swiper-button-next-tools absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
                  &rarr;
                </div>
                {documentationImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Tools Image ${index + 1}`}
                      className="w-full h-30 rounded-lg shadow-lg object-contain mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>
               <a
               className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://docs.google.com/spreadsheets/d/1mjv9RK_637FGaH-6J4udYQ4oXCuY3UiHdwjth5-cnAs/edit?hl=id&gid=0#gid=0"
               target="_blank"
               rel="noopener noreferrer"
             >Spreadsheet:
             </a>
             </strong> For database management and attendance automation using advanced formulas like <strong>XLOOKUP</strong>, <strong>IF</strong>, <strong>TIME</strong>,  and <strong>IFERROR</strong>.</li>
              <li><strong>
                <a               
                className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://qrexplore.com/generate/"
               target="_blank"
               rel="noopener noreferrer">
                QRExplorer Web:
                </a>
                  </strong> To convert Student ID Numbers into QR codes in bulk.</li>
              <li><strong>
                <a
              className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://www.photopea.com/"
               target="_blank"
               rel="noopener noreferrer"
                >
                Photopea:
                </a>
                </strong> For mass-producing virtual cards containing the QR codes.</li>
              <li><strong>
                <a
              className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://www.advancedrenamer.com/download"
               target="_blank"
               rel="noopener noreferrer"
                >
                Advanced Renamer:
                </a>
                </strong> To rename the virtual cards in bulk, ensuring each card was uniquely named for every practicum participant.</li>
              <li><strong>
                <a
               className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://workspace.google.com/u/0/marketplace/app/scanit_to_office/54058147825?flow_type=2"
               target="_blank"
               rel="noopener noreferrer"
                >
                Scan-It to Office:
                </a>
                </strong> To scan QR codes from virtual cards and log attendance data with customable scanning settings.</li>
            </ul>
          </div>

          {/* Implementation Process */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Implementation Process
            </h3>
            <p>
              Here’s how I implemented the system:
            </p>

                  {/*Image */}
                  <div className="flex flex-col items-center mb-2">
                                <img
                                  src={adf}
                                  alt="Special Skill Machine Learning Projectificate"
                                  className="w-full max-w-60 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                                />
                  </div>

            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li><strong>
                <a
               className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://drive.google.com/file/d/1xhgUqcNDfIkFaw4qxcxa73HWPMOc3WH7/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
                >
                Data Collection & QR Code Generation:
                </a></strong> The Public Relations division gathered student data, including names and Student ID Numbers and converted them into QR codes using QRExplorer Web.</li>
              <li><strong>
              <a
               className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://drive.google.com/file/d/193KaOFcQNFiI9YG0Elpl5Z4rurktPyc9/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
                >
                Virtual Card Creation & Bulk Renaming:
                </a></strong> The Creative Media division designed & mass-produced virtual cards using Photopea and renamed them in bulk using Advanced Renamer. Each card was renamed to match the specific Student ID Number or name, ensuring easy identification and distribution. This step was crucial for organizing and distributing the cards efficiently.</li>
                <li><strong>
                <a
                  className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
                  href="https://drive.google.com/file/d/1mtmtlIdQIoGSCPTAiN4jAJF9EcP29raz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checking Virtual Card Completeness:
                </a></strong> The Inventory division checked the completeness of the virtual cards to ensure that all cards were ready for distribution.</li>
                <li><strong>
              <a
               className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://drive.google.com/file/d/1gfHsv6TXSy3cIr_Ltjb72FfhmnSFfnTH/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
                >
                Database Creation & Formulation:
                </a></strong> The Secretary division created the attendance database in a spreadsheet and the Maintenance division implemented automation formulas like <strong>XLOOKUP</strong> and <strong>IF</strong> to streamline data processing </li>
              <li><strong>
              <a
               className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
               href="https://drive.google.com/file/d/10YNl8b03oVLALxoQxENYkEsJnNxMTq8w/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
                >
                Scan-It to Office Setup:
                </a></strong> The Maintenance division installed and set up the attendance scanning system using Scan-It to Office with settings that would match with the formulation on the database.</li>
            </ul>
            <p>Once I was confident that the system had been thoroughly tested and validated, ensuring its readiness for implementation and full functionality, I organized a training session for all lab assistants on 28 August 2023. 
              The session aimed to introduce and familiarize them with the new system and its operational protocols. To further streamline the rollout, I appointed dedicated Persons in Charge (PICs) for each region. These PICs were tasked with closely monitoring implementation progress, troubleshooting issues, and ensuring a seamless transition to the updated system.</p>

          </div>

          {/* Key Features */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Key Features
            </h3>
            <p>
              The Automated QR Code-Based Attendance System is packed with features designed to streamline attendance tracking and promote sustainability:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Virtual Cards:</strong> Each student receives a unique virtual card with an embedded QR code that representing their Student ID Numbers, replacing traditional paper-based practicum cards and reducing the risk of loss or damage.
              </li>
              <li>
                <strong>Spreadsheet Integration:</strong> Attendance data is automatically logged into a spreadsheet, reducing manual data entry and ensuring real-time updates.
              </li>
              <li>
                <strong>Automated Data Processing:</strong> Advanced spreadsheet formulas like <strong>XLOOKUP</strong>, <strong>IF</strong>, <strong>TIME</strong>, and <strong>IFERROR</strong> are used to automate attendance data processing and handle errors.
              </li>
              <li>
                <strong>Bulk QR Code Generation:</strong> Using <strong>QRExplorer Web</strong>, Student ID Numbers are converted into QR codes in bulk, saving time and effort.
              </li>
              <li>
                <strong>Mass Production of Virtual Cards:</strong> Tools like <strong>Photopea</strong> are used to mass-produce virtual cards with embedded QR codes, ensuring scalability for hundreds of students.
              </li>
              <li>
                <strong>Bulk Renaming of Virtual Cards:</strong> <strong>Advanced Renamer</strong> is used to rename virtual cards in bulk, ensuring each card is uniquely named for easy identification and distribution.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> Lab assistants can monitor attendance in real-time using the integrated spreadsheet, improving transparency and accountability.
              </li>
              <li>
                <strong>Paperless Solution:</strong> The system eliminates the need for paper-based practicum cards, promoting sustainability and reducing environmental impact.
              </li>
              <li>
                <strong>Scalability:</strong> The system is designed to handle attendance tracking for hundreds of students across multiple practicum sessions.
              </li>
            </ul>
          </div>


{/* Challenges and Solutions */}
<div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
  <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
    Challenges and Solutions
  </h3>
  <p>
    The Automated QR Code-Based Attendance System faced several challenges during development and implementation. Here are the key challenges and their corresponding solutions:
  </p>
  <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
    <li>
      <strong>Ads in Free Version of Scan-It to Office:</strong> The free version of the app displayed ads during scanning, which disrupted the attendance process. The solution was to subscribe to the premium version to remove ads or research alternative free QR code readers with customable scanning settings.
    </li>
    <li>
      <strong>Fixed Cell Position in Spreadsheet:</strong> The cell on the input data sheet in the spreadsheet cannot be moved or changed in position due to the formulation. If the cell is moved, the data will be input into another cell that is not addressed by the formulation, resulting in errors. To avoid this, the cell must remain unchanged during the taking attendance process. 
    </li>
  </ul>
</div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>

            {/* Tools Carousel */}
            <div className="mb-4">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-tools',
                  prevEl: '.swiper-button-prev-tools',
                }}
                pagination={{ clickable: true }}
                className="relative"
              >
                <div className="swiper-button-prev-tools absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
                  &larr;
                </div>
                <div className="swiper-button-next-tools absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
                  &rarr;
                </div>
                {certificationImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Tools Image ${index + 1}`}
                      className="w-full h-80 rounded-lg shadow-lg object-contain mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <p>
              The project successfully transformed the attendance tracking process in the lab. By replacing paper-based practicum cards with virtual cards and QR codes, the system significantly reduced manual effort and improved efficiency. The use of spreadsheet automation ensured accurate and real-time attendance data, while the paperless approach promoted sustainability. Although the free version of Scan-It to Office introduced minor disruptions, the overall system proved to be a resounding success.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Soft Skills:</strong> Leadership, teamwork, problem-solving, and time management.</li>
              <li><strong>Hard Skills:</strong> Spreadsheet automation, QR code generation, and virtual card design.</li>
              <li><strong>Technical Skills:</strong> Advanced spreadsheet formulas (<strong>XLOOKUP</strong>, <strong>IF</strong>, <strong>TIME</strong>, <strong>IFERROR</strong>), data management, and system integration.</li>
            </ul>
          </div>

          {/* References */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              References
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://youtu.be/_-T-oucazhA?si=QhxYq2McxUY9D7_5"
                      target="_blank" rel="noopener noreferrer"                
              >
                QRExplorer Web:</a></strong> For bulk QR code generation.</li>
              <li><strong>
                <a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://youtu.be/IdlmZ3Rqh-g?feature=shared"
                      target="_blank" rel="noopener noreferrer"                
                >Photopea:
                </a></strong> For mass-producing virtual cards.</li>
              <li><strong>
                <a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://www.advancedrenamer.com/user_guide/v4/general"
                      target="_blank" rel="noopener noreferrer"                
                >
                  Advanced Renamer:</a></strong> For renaming virtual cards in bulk. </li>
              <li><strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://youtu.be/-7vOzBYIBG4?feature=shared"
                      target="_blank" rel="noopener noreferrer"                
              >
                Scan-It to Office:</a></strong> For QR code scanning and attendance logging.</li>
              <li><strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://drive.google.com/file/d/1StYrtExtoREPgP3Vy5M_KF28H21uKRdJ/view?usp=drive_link"
                      target="_blank" rel="noopener noreferrer"                
              >Spreadsheet Formulas:</a></strong> Advanced formulas like 
              <strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://youtu.be/BGM2ts-dh3I?si=wubJ-9O3eWs75aLV"
                      target="_blank" rel="noopener noreferrer"
                > XLOOKUP</a></strong>, 
              <strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://youtu.be/9dDoZDcEpwU?si=1fC8pW9D-OUWbseZ"
                      target="_blank" rel="noopener noreferrer"
              > IF</a></strong>, 
              <strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href= "https://youtu.be/2vhmXuhOgSE?si=K9RzbfBFYOI5VrFB"
                      target="_blank" rel="noopener noreferrer"
              > TIME</a></strong>, and 
              <strong><a
                      className='transition-colors text-xs md:text-base mb-4 text-center text-blue-500'
                      href="https://youtu.be/GNl_3GQYz_I?si=lkx9La25VZm86kln"
                      target="_blank" rel="noopener noreferrer"
              > IFERROR</a></strong> for database automation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AAD;