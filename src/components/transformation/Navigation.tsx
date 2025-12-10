import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import AboutModal from "./modals/AboutModal";
import StoriesModal from "./modals/StoriesModal";
import ContactsModal from "./modals/ContactsModal";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const [whyDropdownOpen, setWhyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16 lg:h-18">
            <div className="flex items-center">
              <button onClick={() => scrollToSection('home')} className="cursor-pointer pt-5">
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
              <button onClick={() => setAboutOpen(true)} className="nav-link">About</button>
              
              {/* Why Dropdown */}
              <div 
                className="relative dropdown"
                onMouseEnter={() => setWhyDropdownOpen(true)}
                onMouseLeave={() => setWhyDropdownOpen(false)}
              >
                <a href="#why" className="nav-link flex items-center">
                  Why
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                {whyDropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="#policy-choice" className="dropdown-item">Policy Choice</a>
                    <a href="#theory" className="dropdown-item">Theory</a>
                    <a href="#value" className="dropdown-item">Value</a>
                    <a href="#operating-model" className="dropdown-item">Operating Model</a>
                    <a href="#implementation" className="dropdown-item">Implementation</a>
                    <a href="#national-agenda" className="dropdown-item">National Agenda</a>
                  </div>
                )}
              </div>

              <button onClick={() => setStoriesOpen(true)} className="nav-link">Stories</button>
              
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
                    <a href="https://sa-transformationfund.co.za/uat/resources/TransformationFundDocument_v2.4_28Sept25.pdf" target="_blank" rel="noopener noreferrer" className="dropdown-item">Full TF Document</a>
                  </div>
                )}
              </div>

              <button onClick={() => setContactsOpen(true)} className="nav-link">Contacts</button>
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
              <button onClick={() => setAboutOpen(true)} className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold text-left w-full">About</button>
              <a href="#why" className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold">Why</a>
              <a href="#policy-choice" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Policy Choice</a>
              <a href="#theory" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Theory</a>
              <a href="#value" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Value</a>
              <a href="#operating-model" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Operating Model</a>
              <a href="#implementation" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Implementation</a>
              <a href="#national-agenda" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">National Agenda</a>
              <button onClick={() => setStoriesOpen(true)} className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold text-left w-full">Stories</button>
              <div className="block text-gray-700 px-3 py-2 text-base font-bold">Resources</div>
              <a href="/resources/Transformation_Fund_Executive_Summary_v1_29Sept.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">TF Executive Summary</a>
              <a href="https://sa-transformationfund.co.za/uat/resources/TransformationFundDocument_v2.4_28Sept25.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-[#007847] px-3 py-2 pl-6 text-sm font-semibold">Full TF Document</a>
              <button onClick={() => setContactsOpen(true)} className="block text-gray-700 hover:text-[#007847] px-3 py-2 text-base font-bold text-left w-full">Contacts</button>
              <a href="https://online.sa-transformationfund.co.za" target="_blank" rel="noopener noreferrer" className="block bg-[#007847] text-white px-3 py-2 text-base font-bold hover:opacity-90 transition-all">Portal Login</a>
            </div>
          </div>
        )}
      </nav>
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <StoriesModal open={storiesOpen} onClose={() => setStoriesOpen(false)} />
      <ContactsModal open={contactsOpen} onClose={() => setContactsOpen(false)} />
    </>
  );
};

export default Navigation;
