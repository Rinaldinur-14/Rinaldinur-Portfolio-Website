import  { useEffect, useState } from "react";
import VRUW from "src/assets/projects/RUW/VRUW.png";
import va from "src/assets/projects/RUW/HTML.png";
import vb from "src/assets/projects/RUW/CSS.png";
import vc from "src/assets/projects/RUW/JS.png";
import vd from "src/assets/projects/PYXE/VS_LOGO.png";
import ve from "src/assets/projects/RUW/GH.png";
import vf from "src/assets/projects/PYXE/DS_LOGO.png";
import ru_fd from "src/assets/certificates/RU_FD/RU_FD.png";
import pfd from "src/assets/projects/RUW/PRUW.png";

// eslint-disable-next-line react/prop-types
const RUW = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0);
  const certificationImages = [va, vb, vc, vd, ve, vf]; // Add certification images if available

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
            Responsive Travel Agency Website with JavaScript Validation and Auto-Slide Banner
          </h2>


                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={VRUW}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

          {/* View Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://github.com/revou-fundamental-course/17-feb-25-Rinaldinur-14.git"
              target="_blank" rel="noopener noreferrer"
            >
              View Project on GitHub →
            </a>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In February 2025</strong>, I worked on a project to create a <strong>Responsive Travel Agency Website</strong> as part of the <strong>Introduction to Software Engineering Mini Course</strong> offered by <strong>RevoU</strong>. The goal was to build a website that showcased travel packages, included an auto-slide banner, and implemented JavaScript validation for a contact form. The project was designed to simulate real-world tasks of a software engineer, focusing on front-end development, responsiveness, and user interaction.
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
                <strong>Create a Responsive Website:</strong> Develop a website that works seamlessly on both desktop and mobile devices.
              </li>
              <li>
                <strong>Implement JavaScript Validation:</strong> Add form validation to ensure users provide correct and complete information.
              </li>
              <li>
                <strong>Auto-Slide Banner:</strong> Create an auto-sliding banner to showcase travel destinations and promotions.
              </li>
              <li>
                <strong>Certificate Achievement:</strong> I aimed to complete this project to earn a certificate. 
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
                <strong>HTML:</strong> Used to structure the content of the website, including the banner, travel packages, and contact form.
              </li>
              <li>
                <strong>CSS:</strong> Styled the website to ensure a visually appealing and responsive design that works seamlessly on both desktop and mobile devices.
              </li>
              <li>
                <strong>JavaScript:</strong> Implemented form validation for the contact form and created the auto-slide banner functionality to enhance user interaction.
              </li>
              <li>
                <strong>Visual Studio Code:</strong> The Integrated Development Environment (IDE) used for writing, debugging, and testing the website code. Its extensions and live server feature made development efficient.
              </li>
              <li>
                <strong>GitHub:</strong> Used for version control and hosting the website’s source code, ensuring easy collaboration and deployment.
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
              The Responsive Travel Agency Website was implemented using HTML, CSS, and JavaScript. Below are the key components of the implementation:
            </p>
            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Auto-Slide Banner:</strong> The banner was created using HTML and CSS for structure and styling. JavaScript was used to implement the auto-slide functionality, which cycles through images of travel destinations at regular intervals. DeepSeek AI provided recommendations for optimizing the banner’s performance and ensuring smooth transitions.
              </li>
              <li>
                <strong>Responsive Design:</strong> CSS media queries were used to ensure the website adapts to different screen sizes, providing a seamless experience on both desktop and mobile devices. DeepSeek AI suggested best practices for responsive design, such as using flexible grids and breakpoints.
              </li>
              <li>
                <strong>JavaScript Form Validation:</strong> The contact form was validated using JavaScript to ensure users provide correct and complete information. Validation checks included ensuring the name field is not empty, the email is in a valid format, and the travel destination is selected. DeepSeek AI helped refine the validation logic and provided suggestions for improving user feedback.
              </li>
              <li>
                <strong>One-Page Navigation:</strong> The website was designed as a single-page application, with  simple navigation between sections (Home, Our Package, and Call to Action) using anchor links and CSS styling. DeepSeek AI recommended techniques for enhancing the navigation features.
              </li>
              <li>
                <strong>Deployment:</strong> The website was hosted on GitHub Pages, making it accessible to users online. GitHub was also used for version control, allowing for easy updates and collaboration. DeepSeek AI assisted in troubleshooting deployment issues and optimizing the workflow.
              </li>
            </ul>
            <p>
              The implementation demonstrates how HTML, CSS, and JavaScript can be combined to create a functional and visually appealing website. With the help of DeepSeek AI, I was able to overcome challenges, optimize the code, and implement features more effectively. While the website meets the basic requirements, there is room for improvement in terms of design and functionality.
            </p>
          </div>

          {/* Website Overview */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Website Overview
            </h3>
            <p>
              The website, named <strong>Rin Agency</strong>, was designed to provide users with information about travel packages and allow them to submit inquiries via a contact form. The website consists of three main sections:
            </p>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={pfd}
              alt="RevoU Software Engineering Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
            <a
              href="https://revou-fundamental-course.github.io/17-feb-25-Rinaldinur-14/"
              target="_blank" rel="noopener noreferrer"
            >
              View Website →
            </a>
          </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Home (Banner Section):</strong> Features an auto-slide banner showcasing travel destinations.</li>
              <li><strong>Our Package Section:</strong> Displays information about available travel packages.</li>
              <li><strong>Call to Action Section:</strong> Includes a contact form for users to submit inquiries.</li>
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
                <strong>Auto-Slide Banner:</strong> The banner automatically cycles through images of travel destinations, creating an engaging user experience.
              </li>
              <li>
                <strong>JavaScript Form Validation:</strong> The contact form validates user inputs to ensure that the name, email, and travel destination fields are correctly filled out.
              </li>
              <li>
                <strong>Responsive Design:</strong> The website is designed to be responsive, ensuring it looks good on both desktop and mobile devices.
              </li>
              <li>
                <strong>One-Page Navigation:</strong> Users can navigate between sections (Home, Our Package, and Call to Action) seamlessly on a single page.
              </li>
            </ul>
          </div>

          {/* Challenges and Problems */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Challenges and Problems
            </h3>
            <p>
              While the website meets the basic requirements, there are several areas where it falls short:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Non-Sticky Navbar:</strong> The navbar does not stick to the top of the page when scrolling, which can make navigation less user-friendly.
              </li>
              <li>
                <strong>Blurry Images:</strong> Some images on the website are blurry, which detracts from the overall visual appeal.
              </li>
              <li>
                <strong>Uninteresting UI:</strong> The user interface lacks creativity and could be more engaging to attract users.
              </li>
              <li>
                <strong>Incomplete Information:</strong> The website does not provide detailed information about travel packages, which could leave users with unanswered questions.
              </li>
              <li>
                <strong>Time Constraints:</strong> Due to other important commitments, I was unable to dedicate enough time to the project, resulting in a less polished final product.
              </li>
            </ul>
          </div>

          {/* Recommendations for Improvement */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Recommendations for Improvement
            </h3>
            <p>
              To address the shortcomings and improve the website, the following steps can be taken:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Fix the Navbar:</strong> Implement a sticky navbar that remains visible at the top of the page while scrolling.
              </li>
              <li>
                <strong>Optimize Images:</strong> Use high-quality, optimized images to ensure they are clear and visually appealing.
              </li>
              <li>
                <strong>Enhance UI/UX:</strong> Redesign the user interface to make it more engaging and user-friendly. Consider adding animations, better typography, and a more modern color scheme.
              </li>
              <li>
                <strong>Add Detailed Information:</strong> Provide more comprehensive details about travel packages, including pricing, itineraries, and customer reviews.
              </li>
              <li>
                <strong>Improve Form Validation:</strong> Enhance the JavaScript validation to include more robust checks, such as validating email formats and ensuring all required fields are filled out.
              </li>
              <li>
                <strong>Add More Features:</strong> Consider adding additional features, such as a search bar, user reviews, and a booking system.
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={ru_fd}
              alt="RevoU Software Engineering Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
            <a
              href="https://drive.google.com/file/d/1BGmgkZYvmSgsM6jKfQ_B6Sjzzc_Oq0FG/view"
              target="_blank" rel="noopener noreferrer"
            >
              View Certificate →
            </a>
          </div>

            <p>
              The <strong>Responsive Travel Agency Website</strong> project was a valuable learning experience in front-end development, focusing on responsiveness, JavaScript validation, and user interaction. While the website meets the basic requirements, there is significant room for improvement in terms of design, functionality, and user experience. Despite the challenges and time constraints, the project provided me with practical skills in web development and highlighted areas for future growth. Despite facing time constraints and other commitments, I successfully completed the course and earned the <strong>RevoU Software Engineering Certificate</strong> on <strong>28 February 2025</strong>.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Technical Skills:</strong> HTML, CSS, JavaScript, responsive design, and form validation.
              </li>
              <li>
                <strong>Soft Skills:</strong> Time management, problem-solving, and attention to detail.
              </li>
              <li>
                <strong>Learning:</strong> Gained experience in building a responsive website and implementing interactive features.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RUW;