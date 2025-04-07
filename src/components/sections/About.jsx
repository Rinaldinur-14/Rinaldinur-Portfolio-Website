import { useState } from "react";
import { RevealOnScroll } from "src/components/RevealOnScroll";
import Education from "src/components/sections/Documentation/Education";
import Lab from "src/components/sections/Documentation/Lab";
import FFI from "src/components/sections/Documentation/FFI";
import IES from "src/components/sections/Documentation/IES";
import Accreditation from "src/components/sections/Documentation/Accreditation";
import GIEF from "src/components/sections/Documentation/GIEF";
import BKSTI from "src/components/sections/Documentation/BKSTI";
import EChar from "src/components/sections/Documentation/EChar";
import log from "src/assets/favicon.png"

// eslint-disable-next-line react/prop-types
export const About = ({ isLightMode }) => {
  const SoftSkills = [
    "Team Work", "Leadership", "Public Speaking", "Effective Communication",
    "Problem Solving", "Analytical Thinking", "Presentations", "Time Management",
    "Stress Management"
  ];
  const HardSkills = [
    "Supply Chain Management & Logistics", "Process Optimization", "Ergonomics",
    "Manufacturing & Production Systems", "Project Management", "Operation Research",
    "Environment, Health, and Safety", "HACCP", "RCA", "Simulation System",
    "Quality Management", "Financial and Cost Analysis", "Data Analysis & Statistics",
    "Data Cleaning", "Data Visualization", "Microsoft Office (Word, Excel, PowerPoint)",
    "Python (Pandas, Numpy, Seaborn, Matplotlib)", "Spreadsheet", "Tableau", "Power BI",
    "MATLAB", "MySQL", "SQLite", "Microsoft SQL Server", "MINITAB", "Tailwindcss",
    "HTML", "React.js", "CATIA", "Sketch Up", "Promodel", "Canva", "Figma", "Capcut", "3D Printing",
    "Cura", "Bambu Studio"
  ];
  const Language = [
    "Bahasa (Native)", "English (Limited Working Proficiency)"
  ];

  // State for toggling skills visibility
  const [showAll, setShowAll] = useState(false);

  // State for toggling documentation modals
  const [showEducation, setShowEducation] = useState(false);
  const [showLab, setShowLab] = useState(false);
  const [showFFI, setShowFFI] = useState(false);
  const [showIES, setShowIES] = useState(false);
  const [showAccreditation, setShowAccreditation] = useState(false);
  const [showGIEF, setShowGIEF] = useState(false);
  const [showBKSTI, setShowBKSTI] = useState(false);
  const [showEChar, setShowEChar] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* About Me Heading */}
          <h1 className={`text-4xl font-bold mb-8 text-center bg-clip-text text-transparent animate-fade-in animate-gradient ${
            isLightMode
              ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
              : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
          }`}>
            About Me
          </h1>

          {/* About Me Content */}
          <div className={`rounded-xl p-8 border hover:-translate-y-1 transition-all ${
            isLightMode
              ? "border-orange-500/60 shadow-[0_2px_8px_rgba(249,115,22,0.2)] lg:border-white/10 lg:hover:border-orange-500/60 lg:hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
              : "border-blue-500/60 shadow-[0_2px_8px_rgba(59,130,246,0.2)] lg:border-white/10 lg:hover:border-blue-500/60 lg:hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
          }`}>
            <div className="relative w-25 h-25 mx-auto mb-6">
            <div className={`absolute inset-0 bg-gradient-to-r rounded-[50%] blur-lg animate-gradient ${ 
              isLightMode 
              ? "from-orange-400 via-orange-500 to-blue-400 shadow-[0_2px_8px_rgba(249,115,22,0.5)]"
              : "from-blue-400 via-purple-600 to-purple-400  shadow-[0_0_30px_10px_rgba(59,130,246,0.5)]" }`}></div>
            <img
            src={log}
            alt="logo about me"
            className="h-25 transition-transform mx-auto rounded-b-full duration-300 ease-in-out transform hover:scale-110"
            />
            </div>

            <p className="text-white mb-6 text-justify text-xs md:text-base">
            Hello! I’m Rinaldi Nurhardiansyah, an Industrial Engineer with expertise in supply chain optimization, logistics, inventory management, cost efficiency, and data-driven decision-making. 
            Proficient in leveraging analytics tools (Excel, Python, SQL, Tableau, Power BI) to enhance operational efficiency, reduce costs, and improve inventory visibility. 
            Skilled in collaborating with teams to align supply chain processes with organizational goals. 
            Experienced in identifying inefficiencies, developing practical solutions, and improving workflow efficiency to ensure smooth operations.
            Let’s connect and explore how I can contribute to your next project!
            </p>

            {/* Skills Sections */}
            {showAll && (
              <div>
                {/* Language */}
                <div className="grid grid-cols-1 gap-6 mt-10">
                  {[Language].map((skills, index) => (
                    <div key={index} className="rounded-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center border-white/10">
                      <h3 className="text-xl font-bold mb-4 text-white">Language</h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((tech, key) => (
                          <span
                            key={key}
                            className={`py-1 px-3 rounded-full transition text-xs md:text-sm ${
                              isLightMode
                                ? 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]'
                                : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Soft & Hard Skills */}
                <div className="grid grid-cols-1 gap-6 mt-7">
                  {[SoftSkills, HardSkills].map((skills, index) => (
                    <div key={index} className="rounded-xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center border-white/10">
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {index === 0 ? "Soft Skills" : "Hard Skills"}
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((tech, key) => (
                          <span
                            key={key}
                            className={`py-1 px-3 rounded-full transition text-xs md:text-sm ${
                              isLightMode
                                ? 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]'
                                : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Toggle Skills Button */}
            <button
              onClick={() => setShowAll(!showAll)}
              className={`mx-auto block mt-8 bg-clip-text text-transparent animate-fade-in animate-gradient ${
                isLightMode
                  ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                  : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600'
              }`}
            >
              {showAll ? "↑ Close Skills" : "View Skills ↓"}
            </button>
          </div>

          {/* Education and Experience Sections */}
          <div className="flex flex-col gap-6 mt-8">
            {/* Education */}
            <CollapsibleSection title="Education" isLightMode={isLightMode}>
              <div className="flex justify-between items-center mt-10">
                <h3 className={`font-semibold mb-3 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                  isLightMode
                    ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                    : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                }`}>
                  Gunadarma University - Bachelor of Industrial Engineering
                </h3>
              </div>
              <div className="flex justify-between">
                <h5 className="mb-2 text-xs md:text-base">Grade: 3.72 / 4.00</h5>
                <span className="text-xs md:text-base">(Sep 2020 - Sep 2024)</span>
              </div>
              <ul className="list-disc ml-5 text-xs md:text-base">
                <li>Received PT Adaro Foundation Indonesia Scholarships</li>
                <li>Instructor for Promodel Workshop</li>
                <li>Assistant Instructor for Lembaga Sertifikasi Profesi (LSP)</li>
              </ul>

              {/* Education Documentation Button */}
              <div className={`transition-colors text-xs md:text-base mt-4 ${
                isLightMode
                  ? 'text-orange-500 hover:text-orange-400'
                  : 'text-blue-400 hover:text-blue-300'
              }`}>
                <button onClick={() => setShowEducation(true)}>
                  View Detail →
                </button>
              </div>
            </CollapsibleSection>

            {/* Work Experience */}
            <CollapsibleSection title="Work Experience" isLightMode={isLightMode}>
              {/* Elementary Laboratory */}
              <div>
                <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                  isLightMode
                    ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                    : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                }`}>
                  Elementary Laboratory of Industrial Engineering at Gunadarma University
                </h3>

                {/* PJ */}
                <div>
                  <div className="flex justify-between items-center mb-2 mt-3 text-xs md:text-base">
                    <h5>PIC of Assistants</h5>
                    <span>(Jan 2024 - Jan 2025)</span>
                  </div>
                  <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Led 29 assistants across 6 divisions, streamlining practicum workflows and reducing task completion time by 40%.</li>
                    <li>Trained 21 assistants in operational protocols, achieving a 90% efficiency improvement in practicum execution.</li>
                  </ul>
                </div>

                {/* Assistant */}
                <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                  <h5>Laboratory Assistant (Maintenance Division)</h5>
                  <span>(Aug 2022 - Jan 2024)</span>
                </div>
                <ul className="list-disc ml-5 text-xs md:text-base">
                  <li>Delivered training for 600+ students across 5 industrial engineering practicums, maintaining a 95% satisfaction rate.</li>
                  <li>•	Automated attendance and grading tracking using Excel, cutting administrative workload by 25%.</li>
                </ul>


                {/* Lab Documentation Button */}
                <div className={`transition-colors text-xs md:text-base mt-4 ${
                  isLightMode
                    ? 'text-orange-500 hover:text-orange-400'
                    : 'text-blue-400 hover:text-blue-300'
                }`}>
                  <button onClick={() => setShowLab(true)}>
                    View Detail →
                  </button>
                </div>
              </div>

              {/* PT. Frisian Flag Indonesia */}
              <div>
                <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                  isLightMode
                    ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                    : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                }`}>
                  PT. Frisian Flag Indonesia
                </h3>
                <div className="flex justify-between mb-2 text-xs md:text-base">
                  <h5>Production Intern</h5>
                  <span>(Mar 2024 - May 2024)</span>
                </div>
                <ul className="list-disc ml-5 text-xs md:text-base">
                  <li>Designed a check sheet for clearance activities, reducing documentation errors by 30%.</li>
                  <li>Learned HACCP protocols and assisted the Powder Spray Dryer (PSD) supervisor in conducting Root Cause Analysis (RCA) for production delays.</li>
                  <li>Created Pareto diagrams to prioritize clearance activity bottlenecks, improving compliance with safety standards by 15%.</li>
                </ul>

                {/* FFI Documentation Button */}
                <div className={`transition-colors text-xs md:text-base mt-4 ${
                  isLightMode
                    ? 'text-orange-500 hover:text-orange-400'
                    : 'text-blue-400 hover:text-blue-300'
                }`}>
                  <button onClick={() => setShowFFI(true)}>
                    View Detail →
                  </button>
                </div>
              </div>
            </CollapsibleSection>

            {/* Organization */}

              <CollapsibleSection title="Organization" isLightMode={isLightMode}>
                {/* IES */}
                <div>
                  <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                    isLightMode
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                      : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                    5th Industrial Engineering Synergy (IES)
                  </h3>
                  <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                    <h5>Consumption Committee</h5>
                    <span>(May 2023)</span>
                  </div>
                  <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Searched for vendors for food and beverages.</li>
                    <li>Prepared and distributed food and beverages during the event.</li>
                  </ul>

                  <h3 className={`font-semibold mb-3 mt-5 text-sm md:text-base bg-clip-text text-transparent animate-gradient          
                  ${isLightMode 
                    ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                    : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                    6th Industrial Engineering Synergy (IES)</h3>
                <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                  <h5>Head of Public Relation Committee</h5>
                  <span>(Aug 2024)</span>
                </div>
                <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Created designs for posters, virtual backgrounds, and certificates.</li>
                    <li>Reached out to a media partner for event promotion.</li>
               </ul>

                  {/* IES Documentation Button */}
                  <div className={`transition-colors text-xs md:text-base mt-4 ${
                    isLightMode
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-blue-400 hover:text-blue-300'
                  }`}>
                    <button onClick={() => setShowIES(true)}>
                      View Detail →
                    </button>
                  </div>
                </div>

                {/* Accreditation */}
                <div>
                  <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                    isLightMode
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                      : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                    Industrial Engineering Accreditation Preparation Committee (LAM TEKNIK)
                  </h3>
                  <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                    <h5>Assistant</h5>
                    <span>(May 2023 - June 2023)</span>
                  </div>
                  <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Attended VR training activity.</li>
                    <li>Prepared necessary documents and set up facilities.</li>
                    <li>Answered the assessor&apos;s questions and demonstrated the use of the facilities.</li>
                  </ul>

                  <h3 className={`font-semibold mb-3 mt-5 text-sm md:text-base bg-clip-text text-transparent animate-gradient          
                  ${isLightMode 
                    ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                    : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                    Industrial Engineering Accreditation Preparation Committee (IABEE)</h3>
                <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                  <h5>Head of Assistant </h5>
                  <span>(Nov 2024)</span>
                </div>
                <ul className="list-disc ml-5 text-xs md:text-base">
                      <li>Attended Environment, Health, and Safety training activities.</li>
                      <li>Coordinated assistants to prepare necessary documents and set up facilities.</li>
                      <li>Answered the assessor&apos;s questions and demonstrated the use of the facilities.</li>
                </ul>

                  {/* Accreditation Documentation Button */}
                  <div className={`transition-colors text-xs md:text-base mt-4 ${
                    isLightMode
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-blue-400 hover:text-blue-300'
                  }`}>
                    <button onClick={() => setShowAccreditation(true)}>
                      View Detail →
                    </button>
                  </div>
                </div>

                {/* GIEF */}
                <div>
                  <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                    isLightMode
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                      : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                   7th Gunadarma Industrial Engineering Fair
                  </h3>
                  <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                    <h5>Organizing Committee</h5>
                    <span>(Sep 2023)</span>
                  </div>
                  <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Assisted with the preparation and execution of the event.</li>
                    <li>Greeted and escorted important guests.</li>
                  </ul>

                  {/* GIEF Documentation Button */}
                  <div className={`transition-colors text-xs md:text-base mt-4 ${
                    isLightMode
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-blue-400 hover:text-blue-300'
                  }`}>
                    <button onClick={() => setShowGIEF(true)}>
                      View Detail →
                    </button>
                  </div>
                </div>

                {/* BKSTI */}
                <div>
                  <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                    isLightMode
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                      : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                    Rapat Kerja BKSTI
                  </h3>
                  <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                    <h5>Organizing Committee</h5>
                    <span>(Jan 2024 - Feb 2024)</span>
                  </div>
                  <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Created designs for nametag & backdrop and made a recap video.</li>
                    <li>Prepared the event schedule and coordinated with the meeting participants.</li>
                    <li>Documented the event through photos and videos.</li>
                  </ul>

                  {/* BKSTI Documentation Button */}
                  <div className={`transition-colors text-xs md:text-base mt-4 ${
                    isLightMode
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-blue-400 hover:text-blue-300'
                  }`}>
                    <button onClick={() => setShowBKSTI(true)}>
                      View Detail →
                    </button>
                  </div>
                </div>
              </CollapsibleSection>


            {/* Volunteering */}
              <CollapsibleSection title="Volunteering" isLightMode={isLightMode}>
                {/* ELITE Charity */}
                <div>
                  <h3 className={`font-semibold mb-3 mt-10 text-sm md:text-base bg-clip-text text-transparent animate-gradient ${
                    isLightMode
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                      : 'bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500'
                  }`}>
                    ELITE Charity
                  </h3>
                  <div className="flex justify-between items-center mb-2 text-xs md:text-base">
                    <h5>Fundraising Coordinator</h5>
                    <span>(Aug 2024)</span>
                  </div>
                  <ul className="list-disc ml-5 text-xs md:text-base">
                    <li>Planned fundraising strategies & surveyed orphanages as potential donation beneficiaries.</li>
                    <li>Delivered presentations to potential donors.</li>
                    <li>Coordinated and supervised over 40 assistants during the charity event.</li>
                  </ul>

                  {/* EChar Documentation Button */}
                  <div className={`transition-colors text-xs md:text-base mt-4 ${
                    isLightMode
                      ? 'text-orange-500 hover:text-orange-400'
                      : 'text-blue-400 hover:text-blue-300'
                  }`}>
                    <button onClick={() => setShowEChar(true)}>
                      View Detail →
                    </button>
                  </div>
                </div>
              </CollapsibleSection>



          </div>
        </div>
      </RevealOnScroll>

      {/* Documentation Modals */}
      {showEducation && <Education onClose={() => setShowEducation(false)} />}
      {showLab && <Lab onClose={() => setShowLab(false)} />}
      {showFFI && <FFI onClose={() => setShowFFI(false)} />}
      {showIES && <IES onClose={() => setShowIES(false)} />}
      {showAccreditation && <Accreditation onClose={() => setShowAccreditation(false)} />}
      {showGIEF && <GIEF onClose={() => setShowGIEF(false)} />}
      {showBKSTI && <BKSTI onClose={() => setShowBKSTI(false)} />}
      {showEChar && <EChar onClose={() => setShowEChar(false)} />}
    </section>
  );
};

// Collapsible Section Component
// eslint-disable-next-line react/prop-types
const CollapsibleSection = ({ title, children, isLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`p-6 rounded-xl border hover:-translate-y-1 transition-all ${
      isLightMode
        ? "border-orange-500/60 shadow-[0_2px_8px_rgba(249,115,22,0.2)] lg:border-white/10 lg:hover:border-orange-500/60 lg:hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)]"
        : "border-blue-500/60 shadow-[0_2px_8px_rgba(59,130,246,0.2)] lg:border-white/10 lg:hover:border-blue-500/60 lg:hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
    }`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <span className={`bg-clip-text text-transparent animate-gradient ${
          isLightMode
            ? "bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400"
            : "bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
        }`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};
