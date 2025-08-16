import { useEffect, useRef } from "react";
import { initializeVanta } from "../VantaEffect";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "IETE Project",
    description:
      "A live government project built with Django and React for managing memberships, approvals, and digital workflows. Includes multi-stage approvals, notifications, and secure authentication. Designed for scalability and security, it integrates PostgreSQL and TailwindCSS for a modern UI. The system features advanced Role-Based Access Control (RBAC), user-role hierarchies, dynamic permission management, and role-based authentication flows. It supports fine-grained access control for different user types, multi-stage approval processes with percentage thresholds, and automated audit logging for compliance.",
    techStack: ["Django", "React", "PostgreSQL", "TailwindCSS"],
    frontendUrl: "https://github.com/Naurangi123/iete-frontend",
    backendUrl: "https://github.com/Naurangi123/iete-backend",
    liveUrl: "http://sec.acstechconsulting.com:3000/",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPyaK5QqYcWmXnOfRkHdybXcC1jV1pM7yOQ&s",
  },
  {
    title: "Restaurant Project (QR Ordering System)",
    description:
      "A restaurant management system with QR-based menu, order placement, payments, receipts, and real-time order tracking. Built using Django REST + React.",
    techStack: ["Django REST", "React", "MySQL", "TailwindCSS"],
    frontendUrl: "https://github.com/Naurangi123/restaurant-frontend",
    backendUrl: "https://github.com/Naurangi123/restaurant-backend",
    liveUrl: "https://restaurant-demo.vercel.app/",
    imgSrc:
      "https://img.freepik.com/free-vector/restaurant-app-concept_23-2148475345.jpg",
  },
  {
    title: "Multi-Vendor Marketplace Project",
    description:
      "An e-commerce marketplace like Amazon/Flipkart where vendors can manage products, customers can browse & purchase, and admins can oversee analytics, orders, and payments.",
    techStack: ["Django", "React", "PostgreSQL", "TailwindCSS"],
    frontendUrl: "https://github.com/Naurangi123/multivendor-frontend",
    backendUrl: "https://github.com/Naurangi123/multivendor-backend",
    liveUrl: "https://multivendor-demo.vercel.app/",
    imgSrc:
      "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8183.jpg",
  },
];

const Projects = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const cleanup = initializeVanta(backgroundRef.current, "halo");
    return () => {
      cleanup();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={backgroundRef}
      className="relative py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-12">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition group"
            >
              {/* Project Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-grow p-6 relative">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="relative">
                  <p className="text-gray-600 text-sm mb-4 overflow-hidden max-h-20 group-hover:overflow-y-auto pr-2 transition-all duration-300 ease-in-out">
                    {project.description}
                  </p>

                  {/* Gradient fade when collapsed */}
                  <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex justify-between mt-auto">
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-indigo-600 flex items-center gap-1 text-sm"
                  >
                    <FaCode /> Backend
                  </a>
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-indigo-600 flex items-center gap-1 text-sm"
                  >
                    <FaGithub /> Frontend
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
