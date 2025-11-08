import React from 'react';

export default function FloatingCard({ icon, text, position }) {
  return (
    <div className={`absolute z-20 flex items-center space-x-2 px-4 py-2 bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg text-white ${position} animate-float`}>
      {React.cloneElement(icon, { className: 'w-5 h-5 text-blue-400' })}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}