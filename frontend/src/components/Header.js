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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- Navigation (Desktop) --- */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* --- Social Icons (Desktop) --- */}
          <div className="hidden md:flex items-center space-x-5">
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
                className={`relative flex flex-col items-center group text-gray-400 hover:text-blue-400 transition-colors duration-300 ${
                   activeSocialIndex === i ? 'text-blue-400' : ''
                }`}
              >
                {socialIcons[social.name] || social.icon}
                
                {/* --- Tooltip (Desktop: Positioned Below) --- */}
                <span
                  className={`absolute top-10 px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-xl border border-gray-600 shadow-xl whitespace-nowrap
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

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-gray-800 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          {/* --- Social Icons (Mobile Section) --- */}
          <div className="flex justify-center space-x-8 pt-6 pb-2 border-t border-gray-700">
            {socials.map((social, i) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                // Handle Mobile Touch/Hover
                onMouseEnter={() => {
                  setIsHoveringSocials(true);
                  setActiveSocialIndex(i);
                }}
                onMouseLeave={() => {
                  setIsHoveringSocials(false);
                }}
                onTouchStart={() => {
                  setIsHoveringSocials(true);
                  setActiveSocialIndex(i);
                }}
                className={`relative flex flex-col items-center group text-gray-400 hover:text-blue-400 transition-colors duration-300 ${
                  activeSocialIndex === i ? 'text-blue-400' : ''
                }`}
              >
                {socialIcons[social.name] || social.icon}

                {/* --- Tooltip (Mobile: Positioned ABOVE) --- */}
                {/* We use -top-12 to push it UP so it doesn't get cut off by the menu bottom */}
                <span
                  className={`absolute -top-12 px-3 py-1 bg-gray-700 text-white text-xs font-bold rounded-xl border border-gray-600 shadow-xl whitespace-nowrap
                  transition-all duration-300 ease-out transform origin-bottom
                  ${
                    activeSocialIndex === i 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-0 translate-y-2'
                  }`}
                >
                  {/* Arrow pointing DOWN */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 border-b border-r border-gray-600 transform rotate-45"></span>
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}