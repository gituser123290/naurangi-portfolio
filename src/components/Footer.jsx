import { useEffect, useRef } from "react";
import { initializeVanta } from "../VantaEffect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const cleanup = initializeVanta(backgroundRef.current, "birds");
    return () => cleanup();
  }, []);

  return (
    <footer
      id="contact_me"
      ref={backgroundRef}
      className="relative text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Me */}
        <div>
          <h3 className="text-xl font-bold mb-3">About Me</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            I&apos;m a Full Stack Developer with a passion for technology,
            problem-solving, and design. I have hands-on experience in building
            real-world applications using <strong>Python, Django, React, Node.js, PostgreSQL</strong>, 
            and more. I enjoy creating digital solutions that truly connect with users.
          </p>
          <p className="mt-2 text-xs text-gray-300">
            © {new Date().getFullYear()} Naurangi Lal. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/naurangi-lal-aa3175228/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-300 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/naurangi123"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-300 transition"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:naurangilal9675329115@gmail.com"
                className="flex items-center gap-2 hover:text-indigo-300 transition"
              >
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end justify-center">
          <h3 className="text-xl font-bold mb-4">Let&apos;s Talk</h3>
          <a
            href="mailto:naurangilal9675329115@gmail.com"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition text-white shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </footer>
  );
}
