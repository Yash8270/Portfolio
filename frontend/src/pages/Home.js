import React, { useState, useEffect } from 'react';
import { MonitorCheck, Code, Award } from 'lucide-react';
import FloatingCard from '../components/FloatingCard';
import { Link } from 'react-router-dom';

export default function Home({ data, name, titles, socials }) {
  // --- Typed Text State ---
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // --- Socials Auto-Cycle State ---
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const [isHoveringSocials, setIsHoveringSocials] = useState(false);

  // --- Typed text animation ---
  useEffect(() => {
    if (index === titles.length) {
      setIndex(0);
      return;
    }

    if (subIndex === titles[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, titles]);

  // --- Social Icon Auto-Cycle Logic ---
  useEffect(() => {
    // If user is hovering, do not cycle automatically
    if (isHoveringSocials) return;

    const interval = setInterval(() => {
      setActiveSocialIndex((prev) => (prev + 1) % socials.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isHoveringSocials, socials.length]);

  return (
    <section
      id="home"
      // CHANGED: Adjusted padding for mobile (py-12) vs desktop (min-h screen)
      className="hero-section min-h-[calc(100vh-80px)] py-12 sm:py-12 flex items-center justify-center animate-fadeIn overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CHANGED: gap-12 for better separation on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- Text Section --- */}
          {/* CHANGED: order-2 lg:order-1 to ensure text can be below image if desired, 
              but usually Text First (default) is better for SEO/Reading. Keeping default order. */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {data.intro} <br />
              <span className="text-blue-400">{name}</span>
            </h1>
            <h2 className="text-xl sm:text-3xl font-medium text-gray-300 mb-6 h-[40px] flex items-center justify-center lg:justify-start">
              Passionate{' '}
              <span className="text-white font-semibold ml-2">
                {`${titles[index].substring(0, subIndex)}`}
              </span>
              <span className="blink-caret text-blue-400">|</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              {data.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="/projects"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* --- Social Icons with Bubble Animation --- */}
            <div className="flex justify-center lg:justify-start space-x-8 h-16">
              {socials.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Handle Hover Logic
                  onMouseEnter={() => {
                    setIsHoveringSocials(true);
                    setActiveSocialIndex(i); 
                  }}
                  onMouseLeave={() => {
                    setIsHoveringSocials(false); 
                  }}
                  className={`relative flex flex-col items-center group text-gray-400 hover:text-blue-400 transform transition-all duration-300 ${
                    activeSocialIndex === i ? 'text-blue-400 scale-110' : ''
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}

                  {/* --- Bubble Tooltip (Below) --- */}
                  <span
                    className={`absolute top-10 px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-xl border border-gray-600 shadow-xl z-50 whitespace-nowrap
                    transition-all duration-300 ease-out transform origin-top
                    ${
                      activeSocialIndex === i 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-0 -translate-y-2'
                    }`}
                  >
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-t border-l border-gray-600 transform rotate-45"></span>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* --- Image Section --- */}
          <div className="flex justify-center items-center relative">
            {/* CHANGED: Adjusted width/height for mobile (w-64 h-64) -> tablet (w-80) -> desktop (w-96) */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30"></div>
              <img
                src={data.imageUrl}
                alt={name}
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-700"
              />
              
              {/* CHANGED: Adjusted Floating Cards positions for mobile to prevent overflow 
                  Added 'scale-90' on mobile to make them smaller.
                  Moved positions closer to center on mobile (e.g., -left-0 instead of -left-10) 
              */}
              <FloatingCard 
                icon={<MonitorCheck />} 
                text="Debug" 
                position="top-0 -left-2 sm:top-10 sm:-left-10 scale-90 sm:scale-100 origin-bottom-right" 
              />
              <FloatingCard 
                icon={<Code />} 
                text="Code" 
                position="bottom-4 -left-2 sm:bottom-10 sm:-left-16 scale-90 sm:scale-100 origin-top-right" 
              />
              <FloatingCard 
                icon={<Award />} 
                text="Ideas" 
                position="top-8 -right-4 sm:top-20 sm:-right-10 scale-90 sm:scale-100 origin-bottom-left" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}