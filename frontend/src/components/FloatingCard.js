import React from 'react';

export default function FloatingCard({ icon, text, position }) {
  return (
    <div className={`absolute z-20 flex items-center gap-2.5 px-3.5 py-2 bg-[#0e1422]/90 backdrop-blur-xl rounded-xl border border-white/[0.12] shadow-2xl shadow-black/50 text-white ${position} animate-float transition-transform duration-300`}>
      <div className="flex items-center justify-center p-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
        {React.cloneElement(icon, { className: 'w-4 h-4 text-blue-400' })}
      </div>
      <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">{text}</span>
    </div>
  );
}