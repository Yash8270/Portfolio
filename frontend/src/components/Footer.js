import React from 'react';

// --- Footer Component ---
export default function Footer({ copyright, socials }) {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#06080d]/90 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-3 mb-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-200"
              aria-label={social.name}
            >
              {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
              
              {/* --- Tooltip --- */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0e1422] text-slate-200 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-white/10 shadow-2xl z-50">
                {social.name}
              </span>
            </a>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-slate-500">
          © Copyright <strong className="font-semibold text-slate-300">{copyright}</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}