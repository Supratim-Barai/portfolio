"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Zap, Layout } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "AI Tools Mastery",
      subtitle: "Certification",
      description: "Certified expert in utilizing and integrating AI tools to streamline software development life cycles.",
      icon: <Award className="w-8 h-8 text-amber-400" />,
      color: "from-amber-500/20 to-amber-500/0",
      borderColor: "hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]"
    },
    {
      title: "Google Local Guide",
      subtitle: "Level 7",
      description: "Recognized for significant contributions to community mapping and local data accuracy.",
      icon: <MapPin className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-blue-500/0",
      borderColor: "hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    },
    {
      title: "Performance Engineering",
      subtitle: "30%+ Efficiency Gain",
      description: "Successfully reduced load times and increased efficiency by over 30% in professional projects.",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-500/0",
      borderColor: "hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
    },
    {
      title: "Portfolio Design",
      subtitle: "Next.js Architecture",
      description: "Developed a custom, high-performance personal site using modern frameworks like Next.js.",
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-purple-500/0",
      borderColor: "hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
    }
  ];

  return (
    <section className="bg-[#121212] py-24 px-6 lg:px-8 relative z-20 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
            Achievements
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
            Milestones and recognition gathered throughout my creative journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${item.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-start">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {item.icon}
                </div>
                
                <div>
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight mb-1">{item.title}</h3>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.subtitle}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
