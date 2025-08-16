import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFile,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        darkMode ? "bg-gray-900 text-white" : "bg-white shadow-md text-gray-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold tracking-wide">Naurangi Lal</div>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition ${
            isOpen ? "flex" : "hidden"
          } ${darkMode ? "bg-gray-900 text-white" : ""}`}
        >
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact_me" className="nav-link flex items-center gap-1"><FaEnvelope /> Contact</a>
          <a href="https://docs.google.com/document/d/15wgTWyxYrnZ2nl6zRlyOEM-Y8WSJiczfeHZ5wdq3iZI/edit?usp=sharing" target="_blank" rel="noreferrer" className="nav-link flex items-center gap-1"><FaFile /> Resume</a>
          <a href="https://github.com/Naurangi123" target="_blank" rel="noreferrer" className="nav-link flex items-center gap-1"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/naurangi-lal-aa3175228/" target="_blank" rel="noreferrer" className="nav-link flex items-center gap-1"><FaLinkedin /> LinkedIn</a>
        </div>

        {/* Menu + Dark Mode */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}
