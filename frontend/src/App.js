import React, { useState } from 'react';
import { portfolioData, navItems } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            data={portfolioData.hero}
            name={portfolioData.name}
            titles={portfolioData.titles}
            socials={portfolioData.socials}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'about':
        return <About data={portfolioData.about} />;
      case 'resume':
        return <Resume data={portfolioData.resume} />;
      case 'work':
        return <Work data={portfolioData.work} />;
      case 'contact':
        return <Contact data={portfolioData.contact} />;
      default:
        return (
          <Home
            data={portfolioData.hero}
            name={portfolioData.name}
            titles={portfolioData.titles}
            socials={portfolioData.socials}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-inter">
      <Header
        navItems={navItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        socials={portfolioData.socials}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="pt-20 transition-all duration-300">{renderPage()}</main>

      <Footer
        copyright={portfolioData.footer.copyright}
        socials={portfolioData.socials}
      />
    </div>
  );
}
