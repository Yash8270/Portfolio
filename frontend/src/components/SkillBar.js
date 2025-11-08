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
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}