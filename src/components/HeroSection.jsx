import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Img from "../assets/static/img.jpg";
import { initializeVanta } from "../VantaEffect";

import { FaDocker, FaGitAlt } from "react-icons/fa";
import { SiRedis, SiApachespark, SiPostgresql, SiDjango, SiReact } from "react-icons/si";

export default function HeroSection() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const cleanup = initializeVanta(backgroundRef.current, "net");
    return () => cleanup();
  }, []);

  const techs = [
    { icon: <FaDocker size={25} />, name: "Docker" },
    { icon: <SiRedis size={25} />, name: "Redis" },
    { icon: <FaGitAlt size={25} />, name: "Git" },
    { icon: <SiApachespark size={25} />, name: "API Integration" },
    { icon: <SiPostgresql size={25} />, name: "PostgreSQL" },
    { icon: <SiDjango size={25} />, name: "Django" },
    { icon: <SiReact size={25} />, name: "React" },
  ];

  return (
    <section
      ref={backgroundRef}
      id="about"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-indigo-500"
        >
          <motion.img
            src={Img}
            alt="Naurangi Lal"
            className="object-cover w-full h-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="text-white max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, duration: 0.8 },
            },
          }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Hello, I&#39;m <span className="text-indigo-400">Naurangi Lal</span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl font-semibold mb-3 text-indigo-200"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Full Stack Developer | Python Developer | Backend Engineer
          </motion.h2>

          <motion.p
            className="text-gray-200 leading-relaxed mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            I specialize in{" "}
            <span className="font-semibold text-indigo-300">end-to-end applications</span> using{" "}
            <span className="font-semibold text-indigo-300">Django, Node.js, React, PostgreSQL, MySQL</span>.  
            My expertise covers{" "}
            <span className="font-semibold text-indigo-400">API Integration</span>,{" "}
            <span className="font-semibold text-indigo-400">Docker</span>,{" "}
            <span className="font-semibold text-indigo-400">Redis</span>,{" "}
            <span className="font-semibold text-indigo-400">Git & GitHub</span>,{" "}
            <span className="font-semibold text-indigo-400">real-time systems</span>.
          </motion.p>

          <motion.a
            href="#contact_me"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Let&#39;s Work Together
          </motion.a>
        </motion.div>
      </div>
      <div className="mt-16 w-full overflow-hidden space-y-6">
        <motion.div
          className="flex gap-12 text-4xl text-indigo-300 whitespace-nowrap"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <motion.div
              key={`row1-${i}`}
              className="flex flex-col items-center text-sm hover:scale-125 transition-transform"
            >
              <span className="mb-1">{tech.icon}</span>
              <span className="text-xs text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-12 text-4xl text-indigo-400 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <motion.div
              key={`row2-${i}`}
              className="flex flex-col items-center text-sm hover:scale-125 transition-transform"
            >
              <span className="mb-1">{tech.icon}</span>
              <span className="text-xs text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
