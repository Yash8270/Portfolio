import React from 'react';

// --- Reusable Helper Component ---
export default function SectionTitle({ title, summary }) {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
      {summary && <p className="text-lg text-gray-400">{summary}</p>}
    </div>
  );
}