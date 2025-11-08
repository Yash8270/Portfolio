import React from 'react';
import {
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
} from 'lucide-react';

// --- Header Component ---
export default function Header({
  navItems,
  currentPage,
  setCurrentPage,
  socials,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  const socialIcons = {
    Instagram: <Instagram className="w-5 h-5" />,
    LinkedIn: <Linkedin className="w-5 h-5" />,
    GitHub: <Github className="w-5 h-5" />,
    WhatsApp: <MessageCircle className="w-5 h-5" />,
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- Navigation (Desktop) --- */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  currentPage === item.name
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                } group`}
              >
                {item.title}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300 ${
                    currentPage === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* --- Social Links (Desktop) --- */}
          <div className="hidden md:flex items-center space-x-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label={social.name}
              >
                {socialIcons[social.name] || social.icon}
              </a>
            ))}
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div
  className={`md:hidden absolute top-20 left-0 right-0 bg-gray-800 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
    isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
  }`}
>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name)}
              className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                currentPage === item.name
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* --- Social Links (Mobile) --- */}
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
