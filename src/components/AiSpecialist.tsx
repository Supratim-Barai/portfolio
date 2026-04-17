"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

export default function AiSpecialist() {
  return (
    <section className="bg-[#121212] py-24 px-6 lg:px-8 relative z-20 overflow-hidden">
      {/* Deep purple/pink AI glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2.5rem] p-10 md:p-16 border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden group"
        >
          {/* Animated gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Left side: Icon/Title */}
            <div className="md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 flex items-center justify-center border border-white/20 mb-8 shadow-[0_0_50px_rgba(192,38,211,0.2)] group-hover:scale-110 transition-transform duration-500">
                <Bot className="w-10 h-10 text-fuchsia-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400 tracking-tight leading-tight">
                AI Integration Specialist
              </h2>
            </div>

            {/* Right side: Content */}
            <div className="md:w-7/12">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <Sparkles className="w-6 h-6 text-fuchsia-400" />
                  <h3 className="text-2xl font-bold text-white tracking-tight">AI-Driven Development</h3>
                </div>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed font-light">
                  Leveraging advanced LLMs (like Claude and Gemini) to accelerate feature delivery and automate repetitive coding tasks, resulting in faster sprint cycles.
                </p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
