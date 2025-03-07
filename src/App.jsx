import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import ParticleBackground from "./components/ParticleBackground";
import QuickScroll from "./components/QuickScroll";
import "./index.css";

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
