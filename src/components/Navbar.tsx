"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ✅ Ganti sticky menjadi fixed top-0 left-0 right-0 z-50
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0b0c10]/80 backdrop-blur-md border-b border-[#1f222e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-full overflow-hidden border border-cyan-500/40 group-hover:border-cyan-400 transition">
            <Image
              src="/logo3.png"
              alt="IT-Club Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg tracking-wider text-white">
            IT-CLUB
          </span>
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#c2c7d0]">
          <button className="flex items-center gap-1 hover:text-white transition">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#structure" className="hover:text-white transition">
            Structure
          </Link>
          <button className="flex items-center gap-1 hover:text-white transition">
            About Us <ChevronDown className="w-4 h-4" />
          </button>
        </nav>

        {/* CTA Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-xs md:text-sm font-medium rounded-full bg-white/5 border border-[#2e3245] hover:bg-white/10 text-white transition">
            Contact Us
          </button>
          <button className="px-4 py-2 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-[#00aeef] to-[#0077ff] text-white shadow-[0_0_15px_rgba(0,174,239,0.3)] hover:shadow-[0_0_25px_rgba(0,174,239,0.6)] transition">
            Get Started
          </button>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#c2c7d0] hover:text-[#00aeef] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Drawer (Mobile) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-[#0b0c10]/95 backdrop-blur-xl border-b border-[#1f222e] px-4 pt-2 pb-6 flex flex-col gap-4 text-sm font-medium text-[#c2c7d0] shadow-2xl">
          <button className="flex items-center justify-between w-full py-2 hover:text-white transition border-b border-white/5">
            <span>Services</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-white transition border-b border-white/5"
          >
            Projects
          </Link>
          <Link
            href="#structure"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-white transition border-b border-white/5"
          >
            Structure
          </Link>
          <button className="flex items-center justify-between w-full py-2 hover:text-white transition border-b border-white/5">
            <span>About Us</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* CTA Buttons (Mobile) */}
          <div className="flex flex-col gap-2 pt-2">
            <button className="w-full py-2.5 text-xs font-medium rounded-full bg-white/5 border border-[#2e3245] hover:bg-white/10 text-white transition">
              Contact Us
            </button>
            <button className="w-full py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#00aeef] to-[#0077ff] text-white shadow-[0_0_15px_rgba(0,174,239,0.3)] transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
