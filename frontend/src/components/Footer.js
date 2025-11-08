import React from 'react';

// --- Footer Component ---
export default function Footer({ copyright, socials }) {
  return (
    <footer className="py-12 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label={social.name}
            >
              {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
            </a>
          ))}
        </div>
        <p className="text-gray-400">
          © Copyright <strong className="text-white">{copyright}</strong>.
        </p>
      </div>
    </footer>
  );
}