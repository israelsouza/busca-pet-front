"use client";

import { useState } from "react";
import Image from "next/image";

export default function EmConstrucao() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#efa355] flex items-center px-6 relative" suppressHydrationWarning>
      <div className="flex">
        <Image src="/logo.png" alt="Logo" width={150} height={150} className="max-[880px]:w-[80px] max-[880px]:h-[80px]" />
      </div>

      {/* Desktop Navigation */}
      <div className="flex flex-auto p-4 max-[880px]:hidden">
        <div className="flex flex-auto justify-end">
          <ul className="flex gap-x-8 max-[1120px]:gap-x-4">
            <li className="text-2xl max-[1120px]:text-lg p-2 cursor-pointer relative transition-all duration-300 ease-out hover:scale-105 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Inicio
            </li>
            <li className="text-2xl max-[1120px]:text-lg p-2 cursor-pointer relative transition-all duration-300 ease-out hover:scale-105 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Reencontro
            </li>
            <li className="text-2xl max-[1120px]:text-lg p-2 cursor-pointer relative transition-all duration-300 ease-out hover:scale-105 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Como funciona
            </li>
            <li className="text-2xl max-[1120px]:text-lg p-2 cursor-pointer relative transition-all duration-300 ease-out hover:scale-105 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Colabore
            </li>
          </ul>
        </div>
        <div className="flex flex-auto justify-end items-center gap-x-4">
          <button className="px-6 py-2 text-lg max-[1120px]:text-base max-[1120px]:px-4 font-medium border-2 border-white/80 rounded-full bg-transparent text-gray-800 relative overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:border-white hover:text-white hover:bg-white/20 hover:shadow-lg active:scale-95">
            Cadastrar
          </button>
          <button className="px-6 py-2 text-lg max-[1120px]:text-base max-[1120px]:px-4 font-medium rounded-full bg-white text-gray-800 relative overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:bg-gray-800 hover:text-white hover:shadow-lg active:scale-95">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="hidden max-[880px]:flex flex-auto justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 cursor-pointer transition-all duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-800 transition-transform duration-300"
            style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
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
        className={`absolute top-full left-0 right-0 bg-[#efa355] shadow-lg z-50 overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          } hidden max-[880px]:block`}
      >
        <ul className="flex flex-col p-4 gap-y-2">
          <li className="text-xl p-3 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:text-white rounded-lg">
            Inicio
          </li>
          <li className="text-xl p-3 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:text-white rounded-lg">
            Reencontro
          </li>
          <li className="text-xl p-3 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:text-white rounded-lg">
            Como funciona
          </li>
          <li className="text-xl p-3 cursor-pointer transition-all duration-300 hover:bg-white/20 hover:text-white rounded-lg">
            Colabore
          </li>
        </ul>
        <div className="flex flex-col px-4 pb-8 gap-y-3">
          <button className="w-full py-3 text-lg font-medium border-2 border-white/80 rounded-full bg-transparent text-gray-800 transition-all duration-300 cursor-pointer hover:bg-white/20 hover:text-white active:scale-95">
            Cadastrar
          </button>
          <button className="w-full py-3 text-lg font-medium rounded-full bg-white text-gray-800 transition-all duration-300 cursor-pointer hover:bg-gray-800 hover:text-white active:scale-95">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
