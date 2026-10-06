import React, { useState, useEffect } from 'react';

// --- Reusable Helper Component ---
export default function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the bar on component mount
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-5 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-white transition-colors">{name}</span>
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">{level}%</span>
      </div>
      <div className="w-full bg-white/[0.05] border border-white/[0.06] rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}