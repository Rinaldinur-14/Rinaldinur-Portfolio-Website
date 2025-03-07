import { useState, useEffect } from "react";
import { LoadingScreen } from "src/components/LoadingScreen";
import { Navbar } from "src/components/Navbar";
import { MobileMenu } from "src/components/MobileMenu";
import { Home } from "src/components/sections/Home";
import { About } from "src/components/sections/About";
import { Projects } from "src/components/sections/Projects";
import { Certifications } from "src/components/sections/Certifications";
import { Contact } from "src/components/sections/Contact";
import { Footer } from "src/components/sections/Footer";
import ParticleBackground from "src/components/ParticleBackground";
import QuickScroll from "src/components/QuickScroll";
import "src/index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : false;
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.className = isLightMode ? "light-mode" : "dark-mode";
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [menuOpen, isLightMode]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "assets/index-CbMZzuum.css";
    document.head.appendChild(link);
  }, []);

  return ( 
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <ParticleBackground />
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        <Home   isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        <About isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
        <Projects isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
        <Certifications isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
        <Contact isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
        <Footer isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
        <QuickScroll isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
      </div>
    </>
  );
}

export default App;
