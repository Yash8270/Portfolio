import React from 'react';

// --- Reusable Helper Component ---
export default function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-200">
      <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
        {React.cloneElement(icon, { className: 'w-5 h-5 text-blue-400' })}
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{title}</h4>
        <p className="text-base font-medium text-slate-200 mt-0.5 break-all sm:break-normal">{content}</p>
      </div>
    </div>
  );
}