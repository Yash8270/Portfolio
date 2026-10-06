import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';

export default function Header({ navItems, socials }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Auto-Cycle State ---
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const [isHoveringSocials, setIsHoveringSocials] = useState(false);

  const socialIcons = {
    Instagram: <Instagram className="w-5 h-5" />,
    LinkedIn: <Linkedin className="w-5 h-5" />,
    GitHub: <Github className="w-5 h-5" />,
    WhatsApp: <MessageCircle className="w-5 h-5" />,
  };

  // --- Auto-Cycle Logic ---
  useEffect(() => {
    // If user is hovering (or touching on mobile), do not cycle automatically
    if (isHoveringSocials) return;

    const interval = setInterval(() => {
      setActiveSocialIndex((prev) => (prev + 1) % socials.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isHoveringSocials, socials.length]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080b11]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- Navigation (Desktop) --- */}
          <nav className="hidden md:flex items-center space-x-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-full backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] border border-transparent'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* --- Social Icons (Desktop) --- */}
          <div className="hidden md:flex items-center space-x-2">
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
                className={`relative p-2.5 rounded-xl border border-transparent transition-all duration-200 ${
                  activeSocialIndex === i
                    ? 'text-blue-400 bg-blue-500/10 border-blue-500/20 scale-105'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                }`}
                aria-label={social.name}
              >
                {socialIcons[social.name] || social.icon}

                {/* --- Tooltip (Desktop) --- */}
                <span
                  className={`absolute top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0e1422] text-slate-200 text-xs font-medium rounded-lg border border-white/10 shadow-2xl whitespace-nowrap pointer-events-none transition-all duration-200 ease-out z-50 ${
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

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-[#0c101a]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-1 px-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-white/[0.05] hover:text-white border border-transparent'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          {/* --- Social Icons (Mobile Section) --- */}
          <div className="flex justify-center space-x-6 pt-5 pb-2 border-t border-white/[0.08] mt-2">
            {socials.map((social, i) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onTouchStart={() => {
                  setIsHoveringSocials(true);
                  setActiveSocialIndex(i);
                }}
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  activeSocialIndex === i
                    ? 'text-blue-400 bg-blue-500/15 border-blue-500/30'
                    : 'text-slate-400 hover:text-white border-white/[0.06] bg-white/[0.02]'
                }`}
                aria-label={social.name}
              >
                {socialIcons[social.name] || social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}