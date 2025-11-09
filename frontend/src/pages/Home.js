import React, { useState, useEffect } from 'react';
import { LayoutTemplate, Code, Award } from 'lucide-react';
import FloatingCard from '../components/FloatingCard';
import { Link } from 'react-router-dom';

export default function Home({ data, name, titles, socials }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // --- Typed text animation ---
  useEffect(() => {
    if (index === titles.length) {
      setIndex(0);
      return;
    }

    if (subIndex === titles[index].length + 1 && !reverse) {
      setReverse(true);
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, titles]);

  return (
    <section
      id="home"
      className="hero-section min-h-[calc(100vh-80px)] pb-20 sm:pb-24 flex items-center justify-center animate-fadeIn"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* --- Text Section --- */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {data.intro} <br />
              <span className="text-blue-400">{name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-300 mb-6">
              Passionate{' '}
              <span className="text-white font-semibold min-h-[40px] inline-block">
                {`${titles[index].substring(0, subIndex)}`}
              </span>
              <span className="blink-caret text-blue-400">|</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">{data.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/projects"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- Image Section --- */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30"></div>
              <img
                src={data.imageUrl}
                alt={name}
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-700"
              />
              <FloatingCard icon={<LayoutTemplate />} text="Design" position="top-10 -left-10" />
              <FloatingCard icon={<Code />} text="Code" position="bottom-10 -left-16" />
              <FloatingCard icon={<Award />} text="Ideas" position="top-20 -right-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
