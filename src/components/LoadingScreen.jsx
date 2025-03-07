import { useEffect, useState } from "react";
import favicon from "/src/assets/favicon.png";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);
  const fullText = "<Rinaldi's Portfolio/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setAnimationComplete(true);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-600 to-purple-400 rounded-[50%] blur-lg opacity-30 shadow-[0_0_30px_10px_rgba(59,130,246,0.5)] animate-slow-pop-up"></div>
        <img 
          src={favicon} 
          alt="Favicon" 
          className={`relative w-full h-full animate-slow-pop-up ${text.length < fullText.length ? 'animate-pop-up' : ''}`}
        />
      </div>

      <div className="mb-4 text-2xl md:text-4xl font-mono font-bold ">
        {animationComplete ? (
          <span className=" bg-gradient-to-r from-blue-400 bg-clip-text text-transparent text-center animate-fade-in via-purple-500 to-blue-600 animate-gradient">
            {fullText}
          </span>
        ) : (
          <>
            <span className="text-white">{text.split('Portfolio/>')[0]}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient">
              {text.includes('Portfolio/>') ? 'Portfolio' + text.split('Portfolio/>')[1] : ''}
            </span>
          </>
        )}
        <span className="animate-blink -ml-4"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div 
          className="w-[40%] h-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"

        ></div>
      </div>
    </div>
  );
};
