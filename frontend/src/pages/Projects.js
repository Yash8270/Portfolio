import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { iconMap } from '../IconMap';

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} summary={data.summary} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg group hover:bg-gray-700 transition-all duration-300"
            >
              {/* --- Project Icon --- */}
              <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white group-hover:scale-105 transition-transform duration-300">
                {iconMap[project.icon]}
              </div>

              {/* --- Project Details --- */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              {/* --- Project Link or Private Notice --- */}
              {project.link?.toLowerCase() === 'private' ? (
                <span className="text-red-400 font-medium italic">
                  Private for company
                </span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                >
                  View Project{' '}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
