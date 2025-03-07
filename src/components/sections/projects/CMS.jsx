import React, { useEffect, useState } from "react";
import VL from "src/assets/projects/CMS/VEYON_LOGO.png";
import VCMS from "src/assets/projects/CMS/VCMS.png";
import vcb from "src/assets/projects/CMS/vcb.jpg";
import vcc from "src/assets/projects/CMS/vcc.jpg";
import vc from "src/assets/projects/CMS/vc.JPG";
import ia from "src/assets/projects/CMS/ia.JPG";
import ib from "src/assets/projects/CMS/ib.JPG";
import ic from "src/assets/projects/CMS/ic.JPG";
import id from "src/assets/projects/CMS/id.JPG";
import ie from "src/assets/projects/CMS/ie.JPG";
import vz from "src/assets/projects/CMS/vz.mp4";

const CMS = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const certificationImages = [vcb, vcc];
  const documentationImages = [ia, ib, ic, id, ie];

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
            Computer Management System Using Veyon Master
          </h2>
          {/*Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={VCMS}
              alt="Special Skill Machine Learning Projectificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In early October 2023</strong>, I embarked on a project
              that would <strong> transform how computers were managed </strong>{" "}
              in the{" "}
              <strong>
                {" "}
                Elementary Laboratory of Industrial Engineering at Gunadarma
                University.{" "}
              </strong>
              The laboratory had just relocated from the F5 Building to the F7
              Building, and with the move came a new set of challenges.
              <strong>
                {" "}
                Managing and monitoring the lab’s computers, which were now
                spread across a larger space, became a daunting task.{" "}
              </strong>
              With limited human resources, the manual processes we relied on
              were not only time-consuming but also prone to errors, creating
              inefficiencies that slowed down daily operations.
            </p>
          </div>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              One day, while reflecting on the problem, I remembered how
              internet cafes (or warnet, as we call them in Indonesia)
              efficiently managed dozens of computers using centralized control
              systems. Inspired by this, I wondered if a similar approach could
              work for our laboratory. I began researching computer management
              tools and stumbled upon Veyon, an open-source software designed
              for monitoring and controlling multiple computers. Intrigued by
              its potential, I spent hours exploring its features through online
              resources, tutorials, and hands-on experimentation. I dove into
              its features, experimenting and implementing a system that would
              transform how the lab's computer operated.
            </p>
          </div>

          {/* Goals */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Project Goals
            </h3>
            <p>
              My vision for the project was to create a system that would make
              managing the lab’s computers effortless and efficient. Here’s what
              I aimed to achieve:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Centralized Control:</strong> A single interface to
                monitor and control all computers in the lab.
              </li>
              <li>
                <strong>Efficiency:</strong> Automate routine tasks like power
                management, application control, and screen locking to save
                time.
              </li>
              <li>
                <strong>Scalability:</strong> Ensure the system could handle
                from tens to hundreds of computers, making it future-proof.
              </li>
              <li>
                <strong>Security:</strong> Implement strong authentication to
                prevent unauthorized access.
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Make the system
                work seamlessly on both Windows and Linux.
              </li>
            </ul>
          </div>

          {/* Why Veyon? */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Why Veyon?
            </h3>
            <p>Choosing Veyon was a no-brainer. Here’s why:</p>
            {/*Image */}
            <div className="flex flex-col items-center mb-2">
              <img
                src={VL}
                alt="Special Skill Machine Learning Projectificate"
                className="w-full max-w-30 md:max-w-40 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>

            <div className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
              <a
                href="https://veyon.io/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Software →
              </a>
            </div>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Open Source:</strong> Free to use and highly
                customizable, perfect for our lab’s needs.
              </li>
              <li>
                <strong>Cross-Platform:</strong> Works seamlessly on both
                Windows and Linux, ensuring flexibility.
              </li>
              <li>
                <strong>Scalable:</strong> Capable of managing hundreds of
                computers, making it future-proof.
              </li>
              <li>
                <strong>Secure:</strong> Uses public-key cryptography to ensure
                only authorized users can access the system.
              </li>
              <li>
                <strong>Efficient:</strong> Automates repetitive tasks, freeing
                up time for more important work.
              </li>
            </ul>
          </div>


          {/* How It Works */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              System Implementation
            </h3>
            <p>Here’s how I implemented the system</p>

            {/* Carousel  */}
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
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextCert}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>

            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Installation:</strong>I installed Veyon Master on the
                central computer and Veyon Service on all client computers. To
                ensure a smooth setup, I collaborated with my friends from the
                maintenance division, who assisted me in installing the software
                across the lab’s computers.
              </li>
              <li>
                <strong>Authentication:</strong> To ensure security, I generated
                a public-private key pair on the master computer. With the help
                of the maintenance team, the public key was distributed to all
                client computers. This ensured that only authorized users with
                the private key could access and control the system, preventing
                unauthorized access.
              </li>
              <li>
                <strong>Configuration:</strong> I added each computer to the
                system using its IP address and set up access rules. For
                example, lab administrators could control all computers, while
                students had limited access.
              </li>
              <li>
                <strong>Functionality:</strong> With everything set up, the
                master computer could now monitor screens, remotely control
                clients, turn off, restart, screenshot, lock screens, and even
                distribute files—all from one place.
              </li>
            </ul>

            <p>
              After the implementation was complete and the system was fully
              operational, I organized a <strong>training session</strong> for
              all lab assistants on <strong>14 October 2023</strong>. During the
              session, I demonstrated the key features of Veyon and explained
              how to use them for daily lab tasks. This training ensured that
              everyone could effectively utilize the system, improving overall
              productivity and reducing reliance on manual processes.
            </p>
          </div>

                    {/* Key Features */}
                    <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Key Features
            </h3>
            <p>
              The system I built was packed with features designed to make lab's
              computer management a breeze:
            </p>
            {/*Image */}
            <div className="flex flex-col items-center mb-2">
              <img
                src={vc}
                alt="Special Skill Machine Learning Projectificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Centralized Monitoring:</strong> Real-time thumbnails of
                all connected computers, giving a quick overview of their
                status.
              </li>
              <li>
                <strong>Remote Control:</strong> Troubleshoot or assist users
                directly from the master computer.
              </li>
              <li>
                <strong>Power Management:</strong> Power on (but not work),
                reboot, or shut down computers remotely, eliminating the need
                for physical access.
              </li>
              <li>
                <strong>Application Management:</strong> Launch or close
                applications on client computers with a single click.
              </li>
              <li>
                <strong>URL Access:</strong> Open specific websites on all
                client browsers, perfect for guiding users to resources
                especially for practicum pre-test using Google Form.
              </li>
              <li>
                <strong>File Transfer:</strong> Distribute files to multiple
                computers simultaneously, saving time on updates or sharing
                files before or during practicum.
              </li>
              <li>
                <strong>Screen Lock:</strong> Lock screens during exams or
                maintenance to ensure security.
              </li>
            </ul>
          </div>


          {/* Challenges and Solutions */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Solutions
            </h3>
            <p>
              Of course, no project is without its challenges. Here’s how I
              recommend addressing them::
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Wake-on-LAN Issues:</strong> The system was unable to
                power on computers remotely, requiring lab assistants to
                manually turn them on. To address this, I recommend exploring
                solutions to enable Wake-on-LAN functionality, such as
                configuring BIOS settings on client computers or researching
                alternative software that supports this feature. This would
                allow remote power-on capabilities, reducing the need for manual
                intervention.
              </li>
              <li>
                <strong>Dynamic IP Problems:</strong> Frequent changes in IP
                addresses caused connection issues, disrupting the system's
                functionality. To resolve this, I recommend implementing DHCP
                reservations or dynamic DNS to automatically handle IP address
                changes. This would ensure consistent connectivity and eliminate
                the need for manual reconfiguration, improving the system's
                reliability.
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>

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
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextDoc}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>

                        {/* Video */}
                        <div className="flex flex-col items-center mb-2">
                          <video
                            controls
                            className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                          >
                            <source src={vz} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>

            <p>
              By the end of the project, the lab’s computer management had been
              transformed. What was once a tedious, manual process was now
              streamlined and efficient, thanks to Veyon Master. The system not
              only saved time but also reduced errors, making daily operations
              smoother. While there’s room for improvement—like enabling
              Wake-on-LAN—the project was a resounding success, proving that
              with the right tools and a bit of creativity, even the biggest
              challenges can be overcome.
            </p>

          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Soft Skills:</strong> Problem-solving, time management,
                leadership, creativity, innovation, and teamwork
              </li>
              <li>
                <strong>Hard Skills:</strong> Network configuration, project
                management, system administration, and software installation.
              </li>
              <li>
                <strong>Technical Skills:</strong> Veyon master, pblic-key
                cryptography, network configuration, and system administration.
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
                  href="https://drive.google.com/file/d/1ZHJ1EXyUXJyJT2MsXiV-nj4PAyf3BFLb/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Veyon User Manual 4.9.2
                </a>
              </li>
              <li>
                <a
                  className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500"
                  href="https://drive.google.com/file/d/1BbqTAMttK6S9qgM0rhi94ZqxnV1uy_wF/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veyon Administrator Manual 4.9.2
                </a>
              </li>
              <li>
                Online resources and tutorials on Veyon and computer management
                systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMS;
