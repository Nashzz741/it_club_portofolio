"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Heart } from "lucide-react";

interface SocialNode {
  name: string;
  icon: string;
  url: string;
}

const socialLinks: SocialNode[] = [
  {
    name: "Instagram",
    icon: "simple-icons:instagram",
    url: "https://www.instagram.com/itc.smkn1subang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "WhatsApp",
    icon: "simple-icons:whatsapp",
    url: "https://wa.me/6283829572060",
  },
  {
    name: "TikTok",
    icon: "simple-icons:tiktok",
    url: "https://tiktok.com",
  },
  {
    name: "Facebook",
    icon: "simple-icons:facebook",
    url: "https://facebook.com",
  },
  {
    name: "YouTube",
    icon: "simple-icons:youtube",
    url: "https://youtube.com",
  },
  {
    name: "GitHub",
    icon: "simple-icons:github",
    url: "https://github.com",
  },
];

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const particlesCount = 35;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 20;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dxCenter = p.x - centerX;
        const dyCenter = p.y - centerY;
        const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);

        if (distCenter < 280) {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(0, 174, 239, ${0.25 - distCenter / 1200})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 174, 239, ${0.15 - dist / 800})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 174, 239, 0.6)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="relative bg-[#07080b] border-t border-[#1f222e] pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-70">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00aeef]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group mb-12"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00aeef] to-cyan-400 opacity-50 blur-lg group-hover:opacity-80 transition duration-500" />
          <div className="relative rounded-3xl bg-[#0e1017] border border-[#00aeef]/50 px-8 py-6 text-center backdrop-blur-xl flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#00aeef]">
              OFFICIAL COMMUNITY
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white mt-1 tracking-tight">
              IT-CLUB
            </h3>
            <p className="text-xs text-[#787f95] mt-1 font-medium">
              Connect • Innovate • Inspire
            </p>
          </div>
        </motion.div>

        <div className="w-full max-w-4xl mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative rounded-2xl bg-[#0e1017]/90 border border-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:border-[#00aeef]/60 hover:shadow-[0_0_20px_rgba(0,174,239,0.2)] flex flex-col items-center gap-2"
              >
                <div className="p-2.5 rounded-xl bg-[#141722] border border-white/10 group-hover:border-[#00aeef]/40 transition-colors text-white group-hover:text-[#00aeef]">
                  <Icon icon={social.icon} className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white group-hover:text-[#00aeef] transition-colors">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#787f95]">
          <p>© 2026–2027 IT-Club. All rights reserved.</p>

          <p className="flex items-center gap-1.5 font-medium">
            Designed & Developed with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> by
            IT-Club Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
}
