import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whyDropdownOpen, setWhyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate(`/${hash}`);
    }
  };

  return (
    <>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16 lg:h-18">
            <div className="flex items-center">
              <button onClick={() => isHomePage ? scrollToSection('home') : navigate('/')} className="cursor-pointer pt-5">
                <img 
                  src="/images/logo-transformation-fund.jpg" 
                  alt="Transformation Fund Logo" 
                  className="h-14 sm:h-17 md:h-19 lg:h-24 w-auto max-w-[173px] sm:max-w-[208px] md:max-w-[242px] lg:max-w-[276px] transition-all"
                  width="276"
                  height="96"
                  loading="eager"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <a href="/about" className="nav-link">About</a>
              
              {/* Why Dropdown */}
              <div 
                className="relative dropdown"
                onMouseEnter={() => setWhyDropdownOpen(true)}
                onMouseLeave={() => setWhyDropdownOpen(false)}
              >
                <a href={isHomePage ? "#why" : "/#why"} className="nav-link flex items-center" onClick={(e) => handleHashLink(e, "#why")}>
                  Why
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                {whyDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href={isHomePage ? "#policy-choice" : "/#policy-choice"} className="dropdown-item" onClick={(e) => handleHashLink(e, "#policy-choice")}>Policy Choice</a>
                    <a href={isHomePage ? "#theory" : "/#theory"} className="dropdown-item" onClick={(e) => handleHashLink(e, "#theory")}>Theory</a>
                    <a href={isHomePage ? "#value" : "/#value"} className="dropdown-item" onClick={(e) => handleHashLink(e, "#value")}>Value</a>
                    <a href={isHomePage ? "#operating-model" : "/#operating-model"} className="dropdown-item" onClick={(e) => handleHashLink(e, "#operating-model")}>Operating Model</a>
                    <a href={isHomePage ? "#implementation" : "/#implementation"} className="dropdown-item" onClick={(e) => handleHashLink(e, "#implementation")}>Implementation</a>
                    <a href={isHomePage ? "#national-agenda" : "/#national-agenda"} className="dropdown-item" onClick={(e) => handleHashLink(e, "#national-agenda")}>National Agenda</a>
                  </div>
                )}
              </div>

              <a href="/stories" className="nav-link">Stories</a>
              
              {/* Resources Dropdown */}
              <div 
                className="relative dropdown"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button className="nav-link flex items-center">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {resourcesDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="/resources/Transformation_Fund_Executive_Summary_v1_29Sept.pdf" target="_blank" rel="noopener noreferrer" className="dropdown-item">TF Executive Summary</a>
                    <a href="/resources/TransformationFundDocument_v2.4_28Sept25.pdf" target="_blank" rel="noopener noreferrer" className="dropdown-item">Full TF Document</a>
                  </div>
                )}
              </div>

              <a href="/contacts" className="nav-link">Contacts</a>
              <a 
                href="https://online.sa-transformationfund.co.za" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#007847] text-white px-6 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition-all ml-4"
              >
                Portal Login
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#007847] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold text-left w-full">Home</button>
              <a href="/about" className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold">About</a>
              <a href={isHomePage ? "#why" : "/#why"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold" onClick={(e) => { handleHashLink(e, "#why"); setMobileMenuOpen(false); }}>Why</a>
              <a href={isHomePage ? "#policy-choice" : "/#policy-choice"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold" onClick={(e) => { handleHashLink(e, "#policy-choice"); setMobileMenuOpen(false); }}>Policy Choice</a>
              <a href={isHomePage ? "#theory" : "/#theory"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold" onClick={(e) => { handleHashLink(e, "#theory"); setMobileMenuOpen(false); }}>Theory</a>
              <a href={isHomePage ? "#value" : "/#value"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold" onClick={(e) => { handleHashLink(e, "#value"); setMobileMenuOpen(false); }}>Value</a>
              <a href={isHomePage ? "#operating-model" : "/#operating-model"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold" onClick={(e) => { handleHashLink(e, "#operating-model"); setMobileMenuOpen(false); }}>Operating Model</a>
              <a href={isHomePage ? "#implementation" : "/#implementation"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold" onClick={(e) => { handleHashLink(e, "#implementation"); setMobileMenuOpen(false); }}>Implementation</a>
              <a href={isHomePage ? "#national-agenda" : "/#national-agenda"} className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold" onClick={(e) => { handleHashLink(e, "#national-agenda"); setMobileMenuOpen(false); }}>National Agenda</a>
              <a href="/stories" className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold">Stories</a>
              <div className="block text-gray-700 px-3 py-2 text-base font-bold">Resources</div>
              <a href="/resources/Transformation_Fund_Executive_Summary_v1_29Sept.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">TF Executive Summary</a>
              <a href="/resources/TransformationFundDocument_v2.4_28Sept25.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Full TF Document</a>
              <a href="/contacts" className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold">Contacts</a>
              <a href="https://online.sa-transformationfund.co.za" target="_blank" rel="noopener noreferrer" className="block bg-[#007847] text-white px-3 py-2 text-base font-bold hover:opacity-90 transition-all">Portal Login</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
