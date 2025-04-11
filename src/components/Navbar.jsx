import { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar w-full text-red-600 sticky top-0 right-0 left-0 z-30 backdrop-blur-lg shadow-md bg-white/30" data-spy="affix" data-offset-top="197">
        <div className="flex justify-between items-center gap-6 sm:py-5 lg:px-30 px-4 py-5">
          <div className="brand">
            <NavLink className="brand-link" to="/">
              <img src="/images/logo.png" alt="Logo" className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] object-contain" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-base lg:text-xl gap-10">
            <li className="active"><NavLink to="/" className={({ isActive }) =>isActive ? "border-b-2 pb-5 border-red-600" : "hover:border-b-2 pb-5 hover:border-red-300"}>HOME</NavLink></li>
            <li><NavLink to="/service" className={({ isActive }) =>isActive ? "border-b-2 pb-5 border-red-600" : "hover:border-b-2 pb-5 hover:border-red-300"}>SERVICES</NavLink></li>
            <li><NavLink to="/project" className={({ isActive }) =>isActive ? "border-b-2 pb-5 border-red-600" : "hover:border-b-2 pb-5 hover:border-red-300"}>PROJECTS</NavLink></li>
            <li><NavLink to="/product" className={({ isActive }) =>isActive ? "border-b-2 pb-5 border-red-600" : "hover:border-b-2 pb-5 hover:border-red-300"}>PRODUCTS</NavLink></li>
            <li><NavLink to="/career" className={({ isActive }) =>isActive ? "border-b-2 pb-5 border-red-600" : "hover:border-b-2 pb-5 hover:border-red-300"}>CAREER</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) =>isActive ? "border-b-2 pb-5 border-red-600" : "hover:border-b-2 pb-5 hover:border-red-300"}>CONTACT</NavLink></li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/30 w-full">
            <ul className="flex flex-col text-base p-4">
              <li className="py-2 border-b"><NavLink to="/" onClick={() => setIsOpen(false)}>HOME</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/service" onClick={() => setIsOpen(false)}>SERVICES</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/project" onClick={() => setIsOpen(false)}>PROJECTS</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/product" onClick={() => setIsOpen(false)}>PRODUCTS</NavLink></li>
              <li className="py-2 border-b"><NavLink to="/career" onClick={() => setIsOpen(false)}>CAREER</NavLink></li>
              <li className="py-2"><NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;