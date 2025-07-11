import React from "react";
import { FaShoppingBag, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      {/* <nav className="bg-blue-800 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaShoppingBag className="text-2xl" />
            <h1 className="text-xl font-bold">Urban Plaza</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-200 transition">
              Home
            </a>
            <a href="#stores" className="hover:text-blue-200 transition">
              Stores
            </a>
            <a href="#services" className="hover:text-blue-200 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-200 transition">
              Contact
            </a>
          </div>
          <button className="md:hidden text-xl">☰</button>
        </div>
      </nav> */}
      <nav className="bg-blue-800 text-white p-4 stiky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaShoppingBag className="text-2xl" />
            <h1 className="text-xl font-bold">Urban Plaza</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-200 transition">
              Home
            </a>
            <a href="#stores" className="hover:text-blue-200 transition">
              Stores
            </a>
            <a href="#services" className="hover:text-blue-200 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-200 transition">
              Contact
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-800 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-white text-2xl">
          <a
            href="#home"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#stores"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Stores
          </a>
          <a
            href="#services"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
