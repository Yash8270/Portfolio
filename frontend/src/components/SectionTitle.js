import React from 'react';

// --- Reusable Helper Component ---
export default function SectionTitle({ title, summary }) {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
        {title}
      </h2>
      {summary && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {summary}
        </p>
      )}
    </div>
  );
}