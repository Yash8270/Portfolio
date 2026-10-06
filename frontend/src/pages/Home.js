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
      className="hero-section min-h-[calc(100vh-80px)] py-12 sm:py-16 flex items-center justify-center animate-fadeIn overflow-hidden relative"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
          {/* --- Text Section --- */}
          <div className="text-center lg:text-left z-10">
            {/* Status / Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              {data.intro}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-6 h-[40px] flex items-center justify-center lg:justify-start">
              <span className="text-slate-400">Passionate</span>
              <span className="text-blue-400 font-semibold font-mono ml-2.5">
                {`${titles[index].substring(0, subIndex)}`}
              </span>
              <span className="blink-caret text-blue-400 font-mono font-bold ml-0.5">|</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              {data.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="/projects"
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 border border-blue-400/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white font-semibold rounded-xl border border-white/[0.12] hover:border-blue-400/40 backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* --- Social Icons with Bubble Animation --- */}
            <div className="flex justify-center lg:justify-start items-center space-x-4 h-16">
              {socials.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    setIsHoveringSocials(true);
                    setActiveSocialIndex(i); 
                  }}
                  onMouseLeave={() => {
                    setIsHoveringSocials(false); 
                  }}
                  className={`relative p-3 rounded-xl border transition-all duration-200 ${
                    activeSocialIndex === i
                      ? 'text-blue-400 bg-blue-500/15 border-blue-500/30 scale-105 shadow-md shadow-blue-500/10'
                      : 'text-slate-400 hover:text-slate-200 border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}

                  {/* --- Bubble Tooltip (Below) --- */}
                  <span
                    className={`absolute top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0e1422] text-slate-200 text-xs font-medium rounded-lg border border-white/10 shadow-2xl z-50 whitespace-nowrap pointer-events-none
                    transition-all duration-200 ease-out transform
                    ${
                      activeSocialIndex === i 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-1'
                    }`}
                  >
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0e1422] border-t border-l border-white/10 transform rotate-45"></span>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* --- Image Section --- */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Radial gradient glow halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-60"></div>
              
              {/* Profile Image container with decorative ring */}
              <div className="relative z-10 w-full h-full p-2.5 rounded-full border border-white/[0.12] bg-white/[0.02] backdrop-blur-md shadow-2xl">
                <img
                  src={data.imageUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-full shadow-inner border border-white/10"
                />
              </div>
              
              {/* Floating Cards */}
              <FloatingCard 
                icon={<MonitorCheck />} 
                text="Debug" 
                position="top-1 -left-2 sm:top-8 sm:-left-8 scale-90 sm:scale-100 origin-bottom-right" 
              />
              <FloatingCard 
                icon={<Code />} 
                text="Code" 
                position="bottom-3 -left-2 sm:bottom-8 sm:-left-12 scale-90 sm:scale-100 origin-top-right" 
              />
              <FloatingCard 
                icon={<Award />} 
                text="Ideas" 
                position="top-6 -right-4 sm:top-16 sm:-right-8 scale-90 sm:scale-100 origin-bottom-left" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}