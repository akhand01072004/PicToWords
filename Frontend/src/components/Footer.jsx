import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Importing Icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white text-center p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400">Text Vision</h2>
      <p className="text-sm text-gray-300">Transforming Words into Insights</p>

      {/* Contact & Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="mailto:textvision@gmail.com"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-300"
        >
          <FaEnvelope className="text-lg" /> textvision@gmail.com
        </a>

        <a
          href="https://instagram.com/textvision"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition duration-300"
        >
          <FaInstagram className="text-lg" /> Instagram
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Text Vision. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
