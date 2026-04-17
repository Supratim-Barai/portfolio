"use client";

import { useEffect, useRef, useState } from "react";
import { SiReact, SiGraphql, SiTypescript, SiJavascript, SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "StockEdge Social",
    role: "Lead Developer",
    description: "Engineered a social networking platform for stock market enthusiasts, handling real-time data feeds and interactive learning modules.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2874&auto=format&fit=crop"
    ],
    tags: [
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    ],
  },
  {
    id: 2,
    title: "Zucini",
    role: "Lead Developer & AI Integration",
    description: "AI-Powered Cooking Companion. Integrated advanced contextual AI capabilities to assist users with recipes and cooking instructions.",
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop"
    ],
    tags: [
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
      { name: "Context API", icon: <SiReact className="text-[#61DAFB]" /> },
    ],
  },
  {
    id: 3,
    title: "Travelyaari",
    role: "Key Front-end Developer",
    description: "Developed the iOS version of this major bus booking platform, ensuring a seamless checkout and seat selection flow.",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2938&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2942&auto=format&fit=crop"
    ],
    tags: [
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
  },
];

type ProjectType = typeof projects[0];

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic (every 1 second)
  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  // Sync scroll position with currentIndex
  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: width * currentIndex,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col"
    >
      {/* Horizontal Auto-Scroll Gallery */}
      <div 
        ref={scrollRef}
        className="aspect-video overflow-x-hidden flex relative bg-black/20 shrink-0"
      >
        {project.images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full shrink-0 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        ))}
        
        {/* Visual indicator dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${currentIndex === idx ? 'bg-white' : 'bg-white/30'}`} 
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-xs font-semibold text-emerald-400 mb-4 tracking-wide uppercase">{project.role}</p>
        <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-medium backdrop-blur-xl border border-white/5">
              <span className="text-[12px] opacity-90">{tag.icon}</span>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-24 px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Works</h2>
          <p className="text-gray-400 text-xl max-w-2xl font-light">A collection of my recent works focusing on performance, animation, and user experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-32 border-t border-white/10 pt-12 pb-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Supratim. Built with Next.js & Framer Motion.</p>
      </footer>
    </section>
  );
}
