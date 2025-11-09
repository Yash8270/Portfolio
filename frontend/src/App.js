import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { portfolioData, navItems } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />  {/* ✅ Always scrolls to top on route change */}

      <div className="min-h-screen bg-gray-900 text-gray-200 font-inter">
        <Header navItems={navItems} socials={portfolioData.socials} />

        <main className="pt-20 transition-all duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  data={portfolioData.hero}
                  name={portfolioData.name}
                  titles={portfolioData.titles}
                  socials={portfolioData.socials}
                />
              }
            />
            <Route path="/about" element={<About data={portfolioData.about} />} />
            <Route path="/resume" element={<Resume data={portfolioData.resume} />} />
            <Route path="/projects" element={<Projects data={portfolioData.projects} />} />
            <Route path="/contact" element={<Contact data={portfolioData.contact} />} />
          </Routes>
        </main>

        <Footer
          copyright={portfolioData.footer.copyright}
          socials={portfolioData.socials}
        />
      </div>
    </Router>
  );
}
