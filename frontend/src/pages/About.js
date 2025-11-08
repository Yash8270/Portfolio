import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import profile from '../assets/profile_copy.jpg';
import { iconMap } from '../IconMap';

export default function About({ data }) {
  return (
    <section id="about" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} />

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          <div className="lg:col-span-3">
            <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">
              {data.greeting}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">
              {data.headline}
            </h2>
            {data.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#work"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                View My Work <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/Yash_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                Download Resume <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="rounded-lg shadow-2xl object-cover w-full max-w-sm"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {data.skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{iconMap[skill.icon]}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            My Journey
          </h3>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="hidden lg:block absolute left-0 right-0 top-4 h-0.5 bg-gray-700"></div>
            {data.timeline.map((item) => (
              <article key={item.year} className="relative text-center md:text-left">
                <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 -top-1 lg:top-1.5 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
                <time className="text-lg font-bold text-blue-400">{item.year}</time>
                <h4 className="text-xl font-semibold text-white mt-2 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-center mb-12">
          <p className="text-2xl lg:text-3xl italic text-gray-300 max-w-3xl mx-auto">
            {data.quote}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
