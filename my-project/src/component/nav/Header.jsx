import { useState } from 'react';
import logo from '../../assets/logo-medical.png'; // Ensure this path is correct

const pages = ['Home', 'About', 'Contact', 'Resources', 'Doctors', 'Elements'];

function ResponsiveAppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

 
  return (
    <header className="bg-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          <div className="flex justify-center">
            <a href="#app-bar-with-responsive-menu">
              <img src={logo} alt="Logo" style={{ height: '40px' }} className="mr-40" />
            </a>
            {/* <h1 className="hidden md:block font-mono font-semibold text-lg tracking-wide text-gray-800"></h1> */}
          </div>

          <button
            className="block md:hidden p-2 focus:outline-none"
            aria-label="Toggle Menu"
            onClick={handleToggleNavMenu} 
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex space-x-4">
              {pages.map((page) => (
                <li key={page} className="py-2">
                  <a href={`#${page}`} className="block px-4 py-2 rounded-md text-gray-800 hover:bg-gray-200">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default ResponsiveAppBar;
