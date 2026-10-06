import React from 'react';
import { CheckCircle, Award, Book } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { Download } from 'lucide-react';

export default function Resume({ data }) {
  return (
    <section id="resume" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} summary={data.summary} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          
          {/* --- Left Column: Education & Skills (Bento Cards) --- */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bento-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Book className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <article key={edu.degree} className="relative pl-6 border-l-2 border-white/[0.08] hover:border-blue-500/40 transition-colors">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-400"></span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <div className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 inline-block px-2.5 py-0.5 rounded-md my-2">
                      {edu.years}
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-400">{edu.description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bento-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Professional Skills
                </h3>
              </div>
              <div className="space-y-1">
                {data.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Experience (Bento Card) --- */}
          <div className="bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-8">
                {data.experience.map((exp) => (
                  <article key={exp.role} className="relative pl-6 border-l-2 border-white/[0.08] hover:border-blue-500/40 transition-colors">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-400"></span>
                    <h4 className="text-lg font-bold text-white tracking-tight">{exp.role}</h4>
                    <div className="font-mono text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 inline-block px-2.5 py-0.5 rounded-md my-2">
                      {exp.years}
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-300 mb-3">
                      {exp.company}
                    </p>
                    <div className="space-y-2">
                      {exp.duties.map((duty, index) => (
                        <p key={index} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                          <span>{duty}</span>
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* --- Styled Button Container --- */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <a 
                href={process.env.REACT_APP_RESUME} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all duration-200"
              >
                Download Resume 
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
