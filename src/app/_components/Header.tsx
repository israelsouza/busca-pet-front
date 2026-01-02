"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import type { MouseEvent } from "react";
// LIBERAR NA PROXIMA ENTREGA
// import AuthButtons from "./AuthButtons";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Reencontro", href: "/#brief" },
  { label: "Como funciona", href: "/#howworks" },
  { label: "Colabore", href: "/#cooperate" },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        menuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside as any);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside as any);
    };
  }, [menuOpen]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) {
      setMenuOpen(false);
      return;
    }

    const [pathPart, hashPart] = href.split("#");
    const targetPath = pathPart || "/";
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "/";

    if (targetPath === "/" || targetPath === currentPath) {
      e.preventDefault();
      const id = hashPart;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(href);
      }
      setMenuOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className="bg-[#efa355] flex items-center px-6 relative"
      suppressHydrationWarning
    >
      <div className="flex">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo da plataforma Busca Pet. É um cachorro com uma lupa, simbolizando a busca por um pet perdido."
            width={150}
            height={150}
            className="max-[880px]:w- max-[880px]:h-"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="flex flex-auto p-4 max-[880px]:hidden">
        <div className="flex flex-auto justify-end">
          <nav>
            <ul className="flex flex-auto justify-end gap-x-8 max-[1120px]:gap-x-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e as any, link.href)}
                    className="text-2xl max-[1120px]:text-lg p-2 cursor-pointer relative transition-all duration-300 ease-out hover:scale-105 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-auto justify-end items-center gap-x-4">
          {/* LIBERAR NA PROXIMA ENTREGA
          <AuthButtons /> */}
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="hidden max-[880px]:flex flex-auto justify-end">
        <button
          onClick={toggleMenu}
          className="p-2 cursor-pointer transition-all duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-800 transition-transform duration-300"
            style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 bg-[#efa355] shadow-lg z-50 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${menuOpen
            ? "max-h-[600px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
          } hidden max-[880px]:block`}
      >
        <ul className="flex flex-col p-4 gap-y-2">
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              className="transition-all duration-300 ease-out"
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-10px)",
              }}
            >
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className="text-xl p-3 block cursor-pointer transition-all duration-300 hover:bg-white/20 hover:text-white rounded-lg active:scale-95"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col px-4 pb-8 gap-y-3">
          {/* LIBERAR NA PROXIMA ENTREGA
          <AuthButtons isMobile /> */}
        </div>
      </div>
    </header>
  );
}
