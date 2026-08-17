"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  FolderGit2,
  FolderPlus,
  Github,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  techStack: string[];
}

// Tambahkan project baru kamu di dalam array ini nanti
const projectsData: ProjectItem[] = [
  /*
  {
    id: "1",
    title: "Judul Proyek Baru",
    category: "Web Development",
    description: "Deskripsi singkat mengenai proyek yang kamu buat.",
    image: "/images/proyek1.jpg",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    techStack: ["Next.js", "Tailwind CSS", "Laravel"],
  },
  */
];

export default function ProjectsShowcase() {
  const isEmpty = projectsData.length === 0;

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#07080b] border-t border-[#1f222e] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-[#00aeef]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#00aeef] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> SHOWCASE PORTFOLIO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mt-3"
            >
              Karya & Proyek Anggota
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#787f95] max-w-md text-sm leading-relaxed"
          >
            Showcase hasil karya dan proyek praktis anggota IT-Club dari
            berbagai alur pembelajaran.
          </motion.p>
        </div>

        {/* State Kosong (Empty State) */}
        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#0e1017]/60 border border-dashed border-white/15 p-16 text-center backdrop-blur-xl flex flex-col items-center justify-center max-w-2xl mx-auto"
          >
            <div className="p-4 rounded-2xl bg-[#141722] border border-white/10 mb-4 text-[#00aeef]">
              <FolderPlus className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Belum Ada Proyek Diunggah
            </h3>
            <p className="text-sm text-[#787f95] max-w-md leading-relaxed">
              Proyek terbaru sedang dalam tahap pengerjaan. Karya anggota akan
              segera ditampilkan di sini.
            </p>
          </motion.div>
        ) : (
          /* Grid Proyek (Otomatis tampil jika projectsData diisi) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-[#0e1017]/90 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-[#00aeef]/50 hover:shadow-[0_0_35px_rgba(0,174,239,0.15)] flex flex-col justify-between"
              >
                {/* Image Preview Container */}
                <div className="relative w-full h-64 bg-[#141722] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/40 to-transparent" />

                  <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#07080b]/80 border border-white/15 text-[#00aeef] backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-[#00aeef] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#9aa1b9] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#141722] text-[#787f95] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[#787f95]">
                        <FolderGit2 className="w-4 h-4 text-[#00aeef]" />
                        <span>Featured Project</span>
                      </div>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-[#141722] border border-white/10 text-white hover:border-[#00aeef] hover:text-[#00aeef] transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#00aeef]/10 border border-[#00aeef]/30 text-[#00aeef] font-semibold hover:bg-[#00aeef] hover:text-black transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
