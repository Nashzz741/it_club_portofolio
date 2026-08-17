"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  ShieldCheck,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Film,
} from "lucide-react";

interface LearningStep {
  id: string;
  step: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

const learningData: LearningStep[] = [
  {
    id: "1",
    step: "01",
    title: "Use Case & Problem Solving",
    category: "System Analysis",
    description:
      "Memahami alur kebutuhan pengguna, pemetaan masalah, serta perancangan diagram Use Case untuk membangun solusi perangkat lunak yang tepat sasaran.",
    skills: ["UML Diagram", "Business Logic", "Requirement Gathering"],
    icon: <FileCode2 className="w-6 h-6 text-[#00aeef]" />,
  },
  {
    id: "2",
    step: "02",
    title: "Netiquette & Digital Ethics",
    category: "Professional Culture",
    description:
      "Penerapan etika berinternet, norma komunikasi profesional di tim pengembang, hingga kesadaran akan privasi data dan keamanan informasi.",
    skills: ["Digital Ethics", "Team Collaboration", "Cyber Hygiene"],
    icon: <ShieldCheck className="w-6 h-6 text-[#00aeef]" />,
  },
  {
    id: "3",
    step: "03",
    title: "Web Backend with Laravel",
    category: "Web Development",
    description:
      "Eksplorasi pembuatan aplikasi web dinamis berskala besar menggunakan framework PHP Laravel, mulai dari routing, MVC, hingga integrasi database.",
    skills: ["PHP", "Laravel MVC", "REST API", "MySQL"],
    icon: <Layers className="w-6 h-6 text-amber-400" />,
  },
  {
    id: "4",
    step: "04",
    title: "Python Programming",
    category: "Scripting & Automation",
    description:
      "Penguasaan sintaks dasar hingga lanjut Python untuk pengolahan data, logika algoritma, pembuatan script otomatisasi, serta fondasi Machine Learning.",
    skills: ["Python 3", "Data Structures", "Automation"],
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "5",
    step: "05",
    title: "Internet of Things (IoT)",
    category: "Hardware & Embedded System",
    description:
      "Menghubungkan dunia fisik dan digital melalui pemrograman mikrokontroler (ESP32/Arduino), sensor lingkungan, dan pengiriman data ke server cloud.",
    skills: ["Arduino/ESP32", "Sensors & Actuators", "MQTT/HTTP"],
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
  },
  {
    id: "6",
    step: "06",
    title: "Video Editing with DaVinci",
    category: "Video & Post-Production",
    description:
      "Penguasaan teknik cutting video, color grading profesional, serta tata suara menggunakan DaVinci Resolve untuk pembuatan konten multimedia dan dokumentasi kegiatan.",
    skills: ["Video Editing", "Color Grading", "Audio Fairlight"],
    icon: <Film className="w-6 h-6 text-rose-400" />,
  },
];

export default function LearningPath() {
  return (
    <section
      id="learning-path"
      className="relative py-32 bg-[#07080b] border-t border-[#1f222e] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00aeef]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#00aeef]"
            >
              CURRICULUM & ROADMAP
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mt-3"
            >
              Alur Belajar IT-Club
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#787f95] max-w-md text-sm leading-relaxed"
          >
            Tahapan materi terstruktur yang dipelajari setiap anggota untuk
            membangun fondasi teknikal dan etika profesional di dunia teknologi
            modern.
          </motion.p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-[#0e1017]/90 border border-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#00aeef]/50 hover:shadow-[0_0_30px_rgba(0,174,239,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[#141722] border border-white/10 group-hover:border-[#00aeef]/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-[#787f95]/30 group-hover:text-[#00aeef]/50 transition-colors">
                    PHASE {item.step}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-[#00aeef]">
                  {item.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1 mb-3 group-hover:text-[#00aeef] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9aa1b9] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#141722] text-[#9aa1b9] border border-white/5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#00aeef]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
