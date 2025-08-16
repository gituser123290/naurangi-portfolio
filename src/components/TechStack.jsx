import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { initializeVanta } from "../VantaEffect";

// Icons
import { FaDocker, FaGitAlt, FaMoneyBillWave, FaPlug, FaNodeJs, FaPython } from "react-icons/fa";
import { SiRedis, SiPostgresql, SiMysql, SiPostman, SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

const categories = [
  {
    title: "⚡ Backend",
    items: [
      { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
      { name: "Django", icon: <SiDjango className="text-green-600 text-5xl" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
      { name: "React", icon: <FaReact className="text-sky-500 text-5xl" /> },
    ],
  },
  {
    title: "🗄 Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-5xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-500 text-5xl" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500 text-5xl" /> },
    ],
  },
  {
    title: "⚙️ DevOps & Tools",
    items: [
      { name: "Docker", icon: <FaDocker className="text-sky-500 text-5xl" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-600 text-5xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600 text-5xl" /> },
    ],
  },
  {
    title: "🔗 Integrations",
    items: [
      { name: "API Integration", icon: <FaPlug className="text-indigo-600 text-5xl" /> },
      { name: "Payment Integration", icon: <FaMoneyBillWave className="text-green-500 text-5xl" /> },
    ],
  },
];

export default function TechStack() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const cleanup = initializeVanta(backgroundRef.current, "cells");
    return () => cleanup();
  }, []);

  return (
    <section
      id="skills"
      ref={backgroundRef}
      className="relative py-20 px-6 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💡 Skills & Tech Stack
        </motion.h2>

        {/* Category Grid */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Title */}
              <motion.h3
                className="text-2xl font-bold text-gray-800 mb-8 text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 perspective-1000">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="relative group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center 
                               hover:shadow-2xl transition cursor-pointer transform-gpu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition" />

                    {/* Icon with shine effect */}
                    <motion.div
                      className="mb-4 relative"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="relative">
                        {tech.icon}
                        {/* Shine reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition duration-500 rounded-full" />
                      </div>
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                      {tech.name}
                    </h3>

                    {/* Tooltip */}
                    <div className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 transition text-xs bg-indigo-600 text-white px-3 py-1 rounded-lg shadow-lg">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
