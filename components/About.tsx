"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m a passionate developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new crafts, contributing to cross disciplinary projects, or simply enjoying the outdoors with my Golden Retriever.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
                <div className="relative w-full h-full z-10">
                  <Image 
                    src="/resources/misspants.jpg" 
                    alt="Melissandre" 
                    fill
                    className="object-cover rounded-2xl"
                    style={{ filter: "grayscale(50%)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

