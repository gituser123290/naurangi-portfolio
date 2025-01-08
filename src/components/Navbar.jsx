
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import '../styles/main.css'; 


export default function Navbar(){
  return (
    <header>
      <nav className="navbar">
          <div className="brand_name">
            <h4 className="brand_link">Naurangi Lal</h4>
          </div>
          <div className="nav_links">
            <a href="#contact_me" className="nav_link">
              <FaEnvelope /> Contact
            </a>
            <a href="https://docs.google.com/document/d/15wgTWyxYrnZ2nl6zRlyOEM-Y8WSJiczfeHZ5wdq3iZI/edit?usp=sharing" target="_blank" className="nav_link">
              <FaFile /> Resume
            </a>
            <a href="https://github.com/Naurangi123" target="_blank" className="nav_link">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/naurangi-lal-aa3175228/" target="_blank" className="nav_link">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
      </nav>
    </header>
  );
};

