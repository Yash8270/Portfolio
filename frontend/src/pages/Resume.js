import React from 'react';
import { CheckCircle, Award, Book } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';

export default function Resume({ data }) {
  return (
    <section id="resume" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} summary={data.summary} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* --- Education & Skills --- */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
                Education
              </h3>
              {data.education.map((edu) => (
                <article key={edu.degree} className="relative pl-8 mb-8">
                  <Book className="w-6 h-6 text-blue-400 absolute left-0 top-1" />
                  <h4 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-medium text-blue-400 bg-gray-800 inline-block px-3 py-1 rounded-md my-2">
                    {edu.years}
                  </div>
                  <p className="text-lg font-medium text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400">{edu.description}</p>
                </article>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
                Professional Skills
              </h3>
              {data.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* --- Experience --- */}
          <div>
            <h3 className="text-3xl font-semibold text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Professional Experience
            </h3>
            {data.experience.map((exp) => (
              <article key={exp.role} className="relative pl-8 mb-8">
                <Award className="w-6 h-6 text-blue-400 absolute left-0 top-1" />
                <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                <div className="text-sm font-medium text-blue-400 bg-gray-800 inline-block px-3 py-1 rounded-md my-2">
                  {exp.years}
                </div>
                <p className="text-lg font-medium text-gray-300 mb-3">
                  {exp.company}
                </p>
                {exp.duties.map((duty, index) => (
                  <p key={index} className="flex items-start gap-2 text-gray-400">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    {duty}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
