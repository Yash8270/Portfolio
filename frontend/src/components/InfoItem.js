import React from 'react';

// --- Reusable Helper Component ---
export default function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-blue-400">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
}