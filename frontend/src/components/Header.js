import React, { useState } from 'react';
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

  const socialIcons = {
    Instagram: <Instagram className="w-5 h-5" />,
    LinkedIn: <Linkedin className="w-5 h-5" />,
    GitHub: <Github className="w-5 h-5" />,
    WhatsApp: <MessageCircle className="w-5 h-5" />,
  };

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
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {socialIcons[social.name] || social.icon}
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
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
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
          <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
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
