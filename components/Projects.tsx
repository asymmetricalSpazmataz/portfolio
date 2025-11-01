"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI with natural language processing and sentiment analysis.",
      tech: ["React", "Node.js", "OpenAI", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-emerald-500 to-lime-500",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop interface, team collaboration, and progress tracking.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Portfolio Generator",
      description: "An automated portfolio generator that creates beautiful portfolios from user data and templates.",
      tech: ["Next.js", "Prisma", "AWS", "Vercel"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "from-teal-400 to-green-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

