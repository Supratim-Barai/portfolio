"use client";

import { motion } from "framer-motion";
import { Activity, Code2, Database, Smartphone } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend & Mobile Developer",
      items: [
        {
          title: "Performance Optimization",
          description: "Improved production-grade fintech and e-commerce platform performance by approximately 35%.",
          icon: <Activity className="w-7 h-7 text-emerald-400" />,
          color: "from-emerald-500/20 to-emerald-500/0",
          borderColor: "hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        },
        {
          title: "Tech Stack Integration",
          description: "Specialized in building scalable architectures using React Native, TypeScript, and GraphQL.",
          icon: <Code2 className="w-7 h-7 text-blue-400" />,
          color: "from-blue-500/20 to-blue-500/0",
          borderColor: "hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        },
        {
          title: "State Management",
          description: "Expertly handled complex data flows and state transitions for seamless user experiences.",
          icon: <Database className="w-7 h-7 text-purple-400" />,
          color: "from-purple-500/20 to-purple-500/0",
          borderColor: "hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
        },
        {
          title: "Cross-Platform Delivery",
          description: "Delivered high-quality mobile and web applications with a focus on clean code and ATS-friendly documentation.",
          icon: <Smartphone className="w-7 h-7 text-rose-400" />,
          color: "from-rose-500/20 to-rose-500/0",
          borderColor: "hover:border-rose-500/50 hover:shadow-[0_0_40px_rgba(244,63,110,0.15)]"
        }
      ]
    }
  ];

  return (
    <section className="bg-[#121212] py-32 px-6 lg:px-8 relative z-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
            Work Experience
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
            A track record of building performant, scalable, and cross-platform digital experiences.
          </p>
        </motion.div>

        <div className="space-y-24">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Role Title Line */}
              <div className="flex flex-col items-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6 shadow-2xl"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">{exp.role}</span>
                </motion.div>
                <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
              </div>
              
              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
                {exp.items.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    className={`group relative bg-white/[0.03] border border-white/5 rounded-3xl p-8 lg:p-10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${item.borderColor}`}
                  >
                    {/* Hover Inner Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed font-light text-lg">
                        {item.description}
                      </p>
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
