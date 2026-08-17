"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  Crown,
  UserCheck,
  FileText,
  Wallet,
  ClipboardCheck,
  Camera,
} from "lucide-react";

interface TransformProps {
  scale?: number;
  x?: string;
  y?: string;
  fit?: "cover" | "contain";
}

const structureData = {
  pembina: {
    name: "Aldy Agustiansyah, S.T.",
    role: "Pembina IT-Club",
    image: "/images/image7.png",
    transform: { scale: 1.2, x: "0%", y: "5%", fit: "cover" as const },
    icon: <ShieldAlert className="w-5 h-5 text-[#00aeef]" />,
  },
  executives: [
    {
      name: "Nashriel Enzo Hidayat",
      role: "Ketua Umum",
      image: "/images/image1.png",
      transform: { scale: 1.2, x: "25%", y: "-10%", fit: "cover" as const },
      icon: <Crown className="w-5 h-5 text-amber-400" />,
    },
    {
      name: "Raisah Azka Munifa Alfadillah",
      role: "Wakil Ketua",
      image: "/images/image2.png",
      transform: { scale: 1.4, x: "10%", y: "-17%", fit: "cover" as const },
      icon: <UserCheck className="w-5 h-5 text-blue-400" />,
    },
  ],
  adminAndFinance: [
    {
      name: "Devi Salamah Putri",
      role: "Sekretaris",
      image: "/images/image5.png",
      transform: { scale: 1.4, x: "-5%", y: "-15%", fit: "cover" as const },
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: "Kholifah Az-Zahra",
      role: "Bendahara I",
      image: "/images/image4.png",
      transform: { scale: 1.4, x: "0%", y: "5%", fit: "cover" as const },
      icon: <Wallet className="w-5 h-5 text-emerald-400" />,
    },
    {
      name: "Mega",
      role: "Bendahara II",
      image: "/images/image9.png",
      transform: { scale: 1, x: "0%", y: "15%", fit: "contain" as const },
      icon: <Wallet className="w-5 h-5 text-emerald-400" />,
    },
  ],
  divisions: [
    {
      name: "Nayomi Espanola Olexa Mi Exito",
      role: "Divisi Absensi I",
      desc: "PJ Kehadiran & Kedisiplinan",
      image: "/images/image3.png",
      transform: { scale: 1.4, x: "0%", y: "-14%", fit: "cover" as const },
      icon: <ClipboardCheck className="w-5 h-5 text-indigo-400" />,
    },
    {
      name: "Nailah Karisya Suhaya",
      role: "Divisi Absensi II",
      desc: "PJ Kehadiran & Kedisiplinan",
      image: "/images/image6.png",
      transform: { scale: 1.3, x: "5%", y: "-12%", fit: "cover" as const },
      icon: <ClipboardCheck className="w-5 h-5 text-indigo-400" />,
    },
    {
      name: "Muhammad Alfa Mafaza",
      role: "Divisi PDD",
      desc: "Publikasi, Dokumentasi & Desain",
      image: "/images/image8.png",
      transform: { scale: 1.0, x: "5%", y: "19%", fit: "cover" as const },
      icon: <Camera className="w-5 h-5 text-purple-400" />,
    },
  ],
};

export default function Structure() {
  return (
    <section
      id="structure"
      className="relative py-32 bg-[#07080b] border-t border-[#1f222e] overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00aeef]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#00aeef]"
          >
            ORGANIZATION TREE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mt-3"
          >
            Struktur Organisasi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00aeef]">
              2026–2027
            </span>
          </motion.h2>
        </div>

        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm"
          >
            <BigMemberCard {...structureData.pembina} isHighlight />
          </motion.div>

          <div className="w-0.5 h-12 bg-gradient-to-b from-[#00aeef]/60 to-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {structureData.executives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="w-0.5 h-12 bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {structureData.adminAndFinance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="w-0.5 h-12 bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {structureData.divisions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BigMemberCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BigMemberCard({
  name,
  role,
  image,
  icon,
  desc,
  transform = { scale: 1.4, x: "0%", y: "0%", fit: "cover" },
  isHighlight = false,
}: {
  name: string;
  role: string;
  image: string;
  icon: React.ReactNode;
  desc?: string;
  transform?: TransformProps;
  isHighlight?: boolean;
}) {
  const { scale = 1.4, x = "0%", y = "0%", fit = "cover" } = transform;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-3xl overflow-hidden bg-[#0e1017]/95 border backdrop-blur-xl transition-all duration-300 flex flex-col ${
        isHighlight
          ? "border-[#00aeef] shadow-[0_0_35px_rgba(0,174,239,0.3)] bg-[#0f121d]"
          : "border-white/10 hover:border-[#00aeef]/60 hover:shadow-[0_0_30px_rgba(0,174,239,0.2)]"
      }`}
    >
      <div className="relative w-full h-72 bg-[#141722] border-b border-white/10 overflow-hidden group">
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: fit,
              transform: `scale(${scale}) translate(${x}, ${y})`,
            }}
            className="transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-90 pointer-events-none" />

        <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#07080b]/80 border border-white/15 backdrop-blur-md z-10">
          {icon}
        </div>
      </div>

      <div className="p-6 text-center flex flex-col items-center justify-center flex-1">
        <span className="text-xs font-bold tracking-widest text-[#00aeef] uppercase mb-1">
          {role}
        </span>
        <h3 className="text-xl font-extrabold text-white tracking-tight">
          {name}
        </h3>
        {desc && (
          <p className="text-xs text-[#787f95] mt-2 font-medium">{desc}</p>
        )}
      </div>
    </motion.div>
  );
}
