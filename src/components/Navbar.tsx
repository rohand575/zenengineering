// Navbar.tsx

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500 ease-in-out
        border-b
        ${
          isScrolled
            ? "bg-[#050A14]/90 backdrop-blur-md border-white/10 py-3 shadow-md"
            : "bg-[#050A14] border-white/5 py-5" 
        }
      `}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* --- Brand Logo (Modified) --- */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
            <img
              src="/zen-logo.png"
              alt="Zen Engineering"
              className="h-6 w-6 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-white leading-none shadow-black drop-shadow-md">
              ZEN<span className="text-blue-400"> </span>ENGINEERING SOLUTIONS
              {/* === ADDED REGISTERED TRADEMARK SYMBOL HERE === */}
              <span className="align-super text-[0.6em] ml-0.5">&reg;</span>
              {/* ============================================== */}
            </span>
            {/* <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-medium mt-1 drop-shadow-md">
              Industrial Solutions
            </span> */}
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links Container */}
          <div className={`
            flex items-center gap-1 rounded-full px-2 py-1 transition-colors duration-300
            ${isScrolled ? "bg-white/5 border border-white/5" : "bg-transparent"}
          `}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                    isActive
                      ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      : "text-slate-300 hover:text-white hover:bg-white/10",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Call to Action */}
          <Link
            to="/contact"
            className="
              group relative inline-flex items-center gap-2 overflow-hidden rounded-full
              bg-white px-5 py-2.5 text-sm font-bold text-slate-900
              transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
            "
          >
            <span>Get a Quote</span>
            <span className="text-lg leading-none mb-[2px] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- Mobile Dropdown --- */}
      <div
        className={`
          absolute top-full left-0 right-0
          bg-[#050A14] border-b border-white/10
          backdrop-blur-xl shadow-2xl
          transition-all duration-300 ease-in-out origin-top
          ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                [
                  "flex items-center justify-between p-4 rounded-xl text-base font-medium transition-all",
                  isActive
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5",
                ].join(" ")
              }
            >
              {link.label}
              <span className="opacity-50">→</span>
            </NavLink>
          ))}
          
          <div className="h-px bg-white/10 my-2" />
          
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold text-center hover:bg-blue-500 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;