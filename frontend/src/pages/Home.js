import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Code, Award } from 'lucide-react';
import FloatingCard from '../components/FloatingCard';

export default function Home({ data, name, titles, socials, setCurrentPage }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === titles.length) return setIndex(0);
    if (subIndex === titles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? 75 : 150
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, titles]);

  return (
    <section
  id="home"
  className="hero-section min-h-[calc(100vh-80px)] pb-16 sm:pb-24 flex items-center justify-center animate-fadeIn"
>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">
              {data.intro} <span className="text-blue-400">{name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
              Passionate{' '}
              <span className="text-white font-semibold">
                {`${titles[index].substring(0, subIndex)}`}
              </span>
              <span className="text-blue-400">|</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">{data.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => setCurrentPage('work')}
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="hover:text-blue-400">
                  {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30"></div>
              <img src={data.imageUrl} alt={name} className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-700" />
              <FloatingCard icon={<LayoutDashboard />} text="Debug" position="top-10 -left-10" />
              <FloatingCard icon={<Code />} text="Code" position="bottom-10 -left-16" />
              <FloatingCard icon={<Award />} text="AI" position="top-20 -right-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
