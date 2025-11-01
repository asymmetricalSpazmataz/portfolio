"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma
} from "react-icons/si";
import { HiCloud } from "react-icons/hi";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Python", icon: SiPython, color: "text-yellow-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "AWS", icon: HiCloud, color: "text-orange-400" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: catIndex * 0.2 + index * 0.1 }}
                        className="flex items-center space-x-4 group hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300"
                      >
                        <Icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

