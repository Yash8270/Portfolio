import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import profile from '../assets/profile_copy.jpg';
import { Link } from 'react-router-dom';
import { iconMap } from '../IconMap';

export default function About({ data }) {
  return (
    <section id="about" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} />

        {/* --- Bio and Profile Bento Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center mb-24">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              {data.greeting}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mt-1 mb-6">
              {data.headline}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              {data.bio.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 border border-blue-400/30 transition-all duration-200"
              >
                View My Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={process.env.REACT_APP_RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white font-semibold rounded-xl border border-white/[0.1] hover:border-blue-400/40 backdrop-blur-md transition-all duration-200"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="relative p-2.5 rounded-2xl bg-[#0e1422] border border-white/[0.1] shadow-2xl group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={profile}
                alt="Profile"
                className="relative rounded-xl object-cover w-full max-w-sm aspect-[4/5] shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* --- Core Competencies / Skills (Bento Grid) --- */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Expertise
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              End-to-end engineering across the application stack
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.skills.map((skill) => (
              <div
                key={skill.title}
                className="bento-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-300">
                    {iconMap[skill.icon] || iconMap['']}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Career Journey / Timeline (Bento Milestones) --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              My Journey
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Milestones and engineering growth over the years
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.timeline.map((item) => (
              <article
                key={item.year}
                className="bento-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <time className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.year}
                    </time>
                    <span className="w-2 h-2 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors"></span>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* --- Editorial Quote --- */}
        <blockquote className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-md mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight leading-relaxed italic">
            {data.quote}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
