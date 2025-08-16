import {
  FaReact,
  FaJsSquare,
  FaCss3,
  FaNodeJs,
  FaHtml5,
  FaPython,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiDjango, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Web Developer",
      company: "Talenrn Company",
      duration: "2021 (6 months)",
      stack: [FaHtml5, FaCss3, FaJsSquare, FaReact],
      highlights: [
        "Developed responsive Single Page Applications.",
        "Collaborated with designers for pixel-perfect UI/UX.",
        "Optimized performance, reducing load time by 40%.",
      ],
    },
    {
      role: "Training & Mentor",
      company: "Code Squadz Pvt Ltd, Noida",
      duration: "Python Full Stack Mentor",
      stack: [FaPython, SiDjango, FaReact, SiMongodb, SiMysql, FaNodeJs],
      highlights: [
        "Doing Internship and Training students in Python Full Stack Development.",
        "Mentored on backend & frontend project building.",
        "Guided real-world project development workflows.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Asv Consulting Services",
      duration: "March - Present",
      stack: [FaPython, SiDjango, FaReact, FaNodeJs, SiMysql, SiPostgresql],
      highlights: [
        "Backend developer on IETE Application ensuring scalability and security.",
        "Contributed to SIMS Product (School Information Management System).",
        "Implemented REST APIs, authentication, and PostgreSQL, MySQL database architecture.",
      ],
      special: true,
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-indigo-500">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`mb-12 ml-6 relative ${
                exp.special
                  ? "bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 rounded-xl p-1"
                  : ""
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Timeline dot with pulse */}
              <motion.div
                className="absolute w-6 h-6 bg-indigo-600 rounded-full -left-3 border-4 border-white animate-pulse"
                whileHover={{ scale: 1.2 }}
              ></motion.div>

              {/* Card */}
              <motion.div
                className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-6 transition transform hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {exp.role}{" "}
                  <span className="text-indigo-600">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>

                {/* Stack icons */}
                <div className="flex flex-wrap gap-3 text-2xl text-indigo-600 mb-4">
                  {exp.stack.map((Icon, i) => (
                    <motion.div
                      key={`${exp.company}-stack-${i}`}
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </div>

                {/* Highlights with fade-in */}
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={`${exp.company}-highlight-${i}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
