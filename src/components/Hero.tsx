"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Layout,
  ShieldCheck,
  Database,
  Terminal,
  Smartphone,
  ArrowRight,
  Play,
} from "lucide-react";
import NodeCanvas from "./ui/NodeCanvas";

const nodes = [
  {
    icon: <Code className="text-cyan-400 w-4 h-4 md:w-5 md:h-5" />,
    title: "Web System",
    subtitle: "Next.js 15 & React",
    pos: "left-4 sm:left-12 top-6",
  },
  {
    icon: <Terminal className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />,
    title: "DevOps Engine",
    subtitle: "Docker & Cloud",
    pos: "left-2 sm:left-6 top-1/2 -translate-y-1/2",
  },
  {
    icon: <Layout className="text-sky-300 w-4 h-4 md:w-5 md:h-5" />,
    title: "UI/UX Design",
    subtitle: "Futuristic Glass",
    pos: "left-4 sm:left-12 bottom-6",
  },
  {
    icon: <ShieldCheck className="text-cyan-300 w-4 h-4 md:w-5 md:h-5" />,
    title: "Cyber Security",
    subtitle: "System Shield",
    pos: "right-4 sm:right-12 top-6",
  },
  {
    icon: <Database className="text-blue-500 w-4 h-4 md:w-5 md:h-5" />,
    title: "Big Data AI",
    subtitle: "Realtime Analytics",
    pos: "right-2 sm:right-6 top-1/2 -translate-y-1/2",
  },
  {
    icon: <Smartphone className="text-cyan-400 w-4 h-4 md:w-5 md:h-5" />,
    title: "Mobile Apps",
    subtitle: "Flutter & React",
    pos: "right-4 sm:right-12 bottom-6",
  },
];

export default function Hero() {
  return (
    <section className="relative h-auto pt-24 pb-8 md:pt-32 md:pb-20 flex flex-col items-center justify-start overflow-hidden bg-[#07080b]">
      {/* AMBIENT LIGHT FLARES */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[180px] sm:h-[350px] bg-gradient-to-tr from-[#00aeef]/20 via-blue-600/10 to-transparent rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-[#00aeef]/15 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 1. Header & Text Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-[10px] sm:text-xs font-semibold text-[#00aeef] mb-3 sm:mb-5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00aeef] animate-ping" />
          <span>✦ Agency Portfolio 2026/2027</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3 sm:mb-5 leading-tight"
        >
          Inference at the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00aeef]">
            Edge
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-base text-[#8d93a5] max-w-xl mx-auto mb-5 sm:mb-8 leading-relaxed"
        >
          Website portofolio dari{" "}
          <strong className="text-white">IT-Club SMKN 1 Subang</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00aeef] to-[#0077ff] text-[#ffffff] font-semibold text-xs md:text-sm shadow-[0_0_25px_rgba(0,174,239,0.4)] hover:shadow-[0_0_35px_rgba(0,174,239,0.7)] transition duration-300">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#12141c] border border-white/10 text-white font-medium text-xs md:text-sm hover:bg-white/10 transition duration-300">
            <Play className="w-3.5 h-3.5 text-[#00aeef]" /> Book a Demo
          </button>
        </motion.div>
      </div>

      {/* 2. Graph Canvas Container (Hanya Muncul di Desktop/Tablet) */}
      <div className="hidden md:block relative z-10 w-full max-w-6xl mx-auto px-4 mt-6">
        <div className="relative w-full h-[440px] flex items-center justify-center">
          <NodeCanvas />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="z-20 p-6 rounded-2xl bg-[#0f1117]/95 border border-[#00aeef]/60 shadow-[0_0_40px_rgba(0,174,239,0.35)] backdrop-blur-2xl flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-[#00aeef]/20 text-[#00aeef] shadow-[0_0_15px_rgba(0,174,239,0.5)]">
              <Cpu className="w-10 h-10" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-white">IT-CLUB</h3>
            </div>
          </motion.div>

          {nodes.map((node, i) => (
            <div key={i} className={`absolute z-20 ${node.pos}`}>
              <NodeCard
                icon={node.icon}
                title={node.title}
                subtitle={node.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NodeCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="p-2 px-2.5 sm:p-3 sm:px-4 rounded-xl bg-[#0e1017]/90 border border-white/10 shadow-lg backdrop-blur-md flex items-center gap-2 sm:gap-3 cursor-pointer hover:border-[#00aeef]/50 transition duration-300 w-full"
    >
      <div className="p-1 sm:p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-white leading-tight truncate">
          {title}
        </h4>
        <p className="text-[8px] sm:text-[10px] text-[#787f95] truncate">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}
