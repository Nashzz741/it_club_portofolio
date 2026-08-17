"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050508]"
        >
          <div className="flex items-center gap-4 overflow-hidden px-4">
            {/* Logo: Slide Ke Kiri */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(0,174,239,0.3)]"
            >
              <Image
                src="/logo3.png"
                alt="IT-Club Logo"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Teks: Slide Dari Kanan */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="overflow-hidden"
            >
              <span className="text-3xl md:text-4xl font-extrabold tracking-wider text-[#00aeef] drop-shadow-[0_0_12px_rgba(0,174,239,0.5)]">
                IT-CLUB
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
