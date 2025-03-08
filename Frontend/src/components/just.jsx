import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing Menu Icons
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo with Stylish Font & Emoji */}
        <h1 className="text-xl font-bold  flex items-center bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-3 rounded-full shadow-sm" />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Pic To Word
          </span>
        </h1>


        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex flex-2 justify-center space-x-14 text-lg">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link to="/about-us" className="hover:text-blue-400 transition duration-300">About Us</Link>
          <Link to="/services" className="hover:text-blue-400 transition duration-300">Services</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation (Visible when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-900 p-4 mt-2 text-lg">
          <Link to="/" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about-us" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" className="hover:text-blue-400 transition duration-300" onClick={() => setMenuOpen(false)}>Services</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
