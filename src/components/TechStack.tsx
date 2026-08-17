"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Award, Code2 } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-5 h-5 text-[#00aeef]" />,
    count: "50+",
    label: "Anggota Aktif",
  },
  {
    icon: <Rocket className="w-5 h-5 text-cyan-400" />,
    count: "20+",
    label: "Projek Selesai",
  },
  {
    icon: <Award className="w-5 h-5 text-blue-500" />,
    count: "10+",
    label: "Penghargaan",
  },
  {
    icon: <Code2 className="text-sky-300 w-5 h-5" />,
    count: "6",
    label: "Divisi Keahlian",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-4 bg-[#07080b] border-t border-white/5 overflow-hidden"
    >
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] bg-[#00aeef]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Teks Penjelasan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-xs font-semibold text-[#00aeef] w-fit">
              <span>✦ ABOUT US</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              Mewadahi Talenta Digital Masa Depan di{" "}
              <span className="text-[#00aeef]">SMKN 1 Subang</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#8d93a5] leading-relaxed">
              IT-Club adalah wadah eksplorasi teknologi bagi siswa SMKN 1
              Subang. Kami berfokus pada pengembangan perangkat lunak,
              infrastruktur cloud, keamanan siber, hingga kecerdasan buatan
              melalui proyek nyata dan kolaborasi tim.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {[
                "Web Dev",
                "DevOps",
                "CyberSec",
                "UI/UX",
                "Mobile",
                "AI & Data",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] rounded-lg bg-white/5 border border-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Grid Statistik (Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[#0e1017]/80 border border-white/10 backdrop-blur-md flex flex-col gap-2 hover:border-[#00aeef]/40 transition duration-300"
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-fit">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {stat.count}
                  </h3>
                  <p className="text-[11px] text-[#787f95] font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
