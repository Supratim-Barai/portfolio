"use client";

import { motion } from "framer-motion";
import { Code, Layers, Wrench, Server, Rocket, Sparkles, BrainCircuit } from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiHtml5, SiGraphql,
  SiReact, SiRedux, 
  SiGit, SiAndroidstudio, SiXcode, SiFirebase
} from "react-icons/si";
import { FaServer, FaPlug, FaProjectDiagram, FaRocket, FaCodeBranch, FaBug, FaTachometerAlt, FaPaintBrush, FaCss3Alt, FaRobot, FaBrain, FaTools } from "react-icons/fa";
import { VscVscode, VscAzureDevops } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Prompt Engineering",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
      color: "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
      skills: [
        { name: "LLM Orchestration", icon: <FaBrain className="text-[#A855F7]" /> },
        { name: "AI Tooling", icon: <FaTools className="text-[#10B981]" /> },
        { name: "Prompt Engineering", icon: <FaRobot className="text-[#3B82F6]" /> },
        
      ]
    },
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      color: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      color: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "Context API", icon: <SiReact className="text-[#61DAFB]" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-purple-400" />,
      color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-[#3DDC84]" /> },
        { name: "Xcode", icon: <SiXcode className="text-[#157EFB]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Azure DevOps", icon: <VscAzureDevops className="text-[#0078D7]" /> },
      ]
    },
    {
      title: "Backend & Integration",
      icon: <Server className="w-6 h-6 text-rose-400" />,
      color: "hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,110,0.1)]",
      skills: [
        { name: "REST API", icon: <FaServer className="text-gray-400" /> },
        { name: "WebSocket", icon: <FaPlug className="text-gray-400" /> },
        { name: "API Integration", icon: <FaProjectDiagram className="text-gray-400" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: <Rocket className="w-6 h-6 text-amber-400" />,
      color: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]",
      skills: [
        { name: "Software Deployment", icon: <FaRocket className="text-gray-400" /> },
        { name: "CI/CD pipelines", icon: <FaCodeBranch className="text-gray-400" /> },
        { name: "Version control", icon: <SiGit className="text-[#F05032]" /> },
      ]
    },
    {
      title: "Other Skills",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      color: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
      skills: [
        { name: "UI/UX collaboration", icon: <FaPaintBrush className="text-gray-400" /> },
        { name: "Debugging", icon: <FaBug className="text-gray-400" /> },
        { name: "Performance tuning", icon: <FaTachometerAlt className="text-gray-400" /> },
      ]
    },
  ];

  return (
    <section className="bg-[#121212] pt-24 pb-12 px-6 lg:px-8 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
            A comprehensive toolkit for crafting modern, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${category.color} group`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill.name}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 text-gray-200 text-sm font-medium border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default shadow-sm"
                  >
                    <span className="text-[1.1rem] opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
