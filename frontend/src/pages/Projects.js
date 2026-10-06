import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { iconMap } from '../IconMap';
import { ArrowUpRight, Lock, ExternalLink } from 'lucide-react';

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} summary={data.summary} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.projects.map((project) => (
            <div
              key={project.title}
              className="bento-card p-6 sm:p-8 flex flex-col justify-between group relative"
            >
              {/* Subtle top edge gradient highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div>
                {/* --- Top Card Header: Icon & Status Badge --- */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-300">
                    {iconMap[project.icon] || iconMap.default}
                  </div>

                  {project.live && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live App
                    </span>
                  )}
                  {project.link?.toLowerCase() === 'private' && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Lock className="w-3 h-3" /> Enterprise Internal
                    </span>
                  )}
                </div>

                {/* --- Project Details --- */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* --- Project Links Footer --- */}
              <div className="pt-5 border-t border-white/[0.08] mt-2">
                {project.link?.toLowerCase() === 'private' ? (
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 font-mono italic">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    Proprietary / Under NDA
                  </span>
                ) : (
                  <div className="flex items-center justify-between">
                    {/* LEFT: View Project */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      View Source
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    {/* RIGHT: Live */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-200"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
