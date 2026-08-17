import { Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#0b0c10] border-b border-[#1f222e] px-4 md:px-8 py-2 flex justify-between items-center text-xs text-[#a0a5b5]">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#00aeef] animate-pulse" />
        <span>GPU AI/ML Agency Platform — IT-Club 2026/2027</span>
        <a
          href="#about"
          className="text-white hover:underline hidden sm:inline"
        >
          Learn more &rarr;
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#support" className="hover:text-white transition">
          System Active
        </a>
        <a href="#login" className="hover:text-white transition">
          Log in
        </a>
        <button className="flex items-center gap-1 hover:text-white transition">
          <Globe className="w-3.5 h-3.5" /> EN
        </button>
      </div>
    </div>
  );
}
