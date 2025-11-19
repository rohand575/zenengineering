import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b
        backdrop-blur-xl
        transition-all duration-300
        ${isScrolled ? "bg-white/95 border-slate-200 shadow-sm" : "bg-white/80 border-white/40"}
      `}
    >
    <nav className="flex w-full items-center justify-between px-6 lg:px-10 py-4 md:py-4">

        {/* Logo + Brand */}
        <Link
            to="/"
            className="flex items-center gap-3 group flex-1"
            onClick={() => setIsOpen(false)}
            >
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#0EA5E9] via-[#22D3EE] to-[#F97373] p-[2px]">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                <img
                    src="/images/zen-logo.png"
                    alt="Zen Engineering logo"
                    className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                </div>
            </div>

            <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-wide text-slate-900">
                ZEN ENGINEERING
                </span>
                <span className="text-sm text-slate-600">
                Cooling · Ventilation · Solutions
                </span>
            </div>
        </Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                [
                  "relative text-base font-semibold transition-colors group",
                  isActive ? "text-slate-900" : "text-slate-800 hover:text-black",
                ].join(" ")
              }
            >
              <span>{link.label}</span>
              <span
                className="
                  pointer-events-none
                  absolute inset-x-0 -bottom-1 h-[2px]
                  origin-center scale-x-0 group-hover:scale-x-100
                  bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#F97373]
                  transition-transform duration-300
                  rounded-full
                "
              />
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="
              ml-2 inline-flex items-center gap-2 rounded-full
              bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#F97373]
              px-4 py-2 text-sm font-semibold text-white shadow-sm
              hover:shadow-md hover:-translate-y-[1px]
              transition-all duration-300
            "
          >
            Get a Quote
            <span className="text-xs opacity-80">↗</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 rounded-full bg-slate-700 transition-transform duration-300 ${
                isOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-4 rounded-full bg-slate-500 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-slate-700 transition-transform duration-300 ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden
          transition-all duration-300
          ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="
            border-t border-slate-100
            bg-white/95 backdrop-blur-xl
          "
        >
          <div className="mx-auto max-w-6xl flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "px-1 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-slate-900 bg-slate-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                mt-2 inline-flex items-center justify-center gap-2
                rounded-full
                bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#F97373]
                px-4 py-2 text-sm font-semibold text-white shadow-sm
              "
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
