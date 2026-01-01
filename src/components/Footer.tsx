import Image from "next/image";
import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const ICON_STYLE = "hover:text-[#efa355] transition-colors duration-300";
  return (
    <footer className="relative bg-[#1a1510] text-gray-300 py-10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/paws-footer.jpg"
          alt="Padrão de patinhas"
          fill
          className="object-cover grayscale"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-6">
          <p className="text-xl font-medium text-white flex items-center justify-center gap-2 mb-4">
            Feito com muito
            <span className="text-[#efa355] animate-pulse">♥</span>
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/israelsouza"
              target="_blank"
              rel="noopener noreferrer"
              className={ICON_STYLE}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://br.linkedin.com/in/israel-souza-lima"
              target="_blank"
              rel="noopener noreferrer"
              className={ICON_STYLE}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://rael-portifolio.pages.dev/"
              className={ICON_STYLE}
              aria-label="Website"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>

        <div className="max-w-lg border-t border-gray-700/50 pt-6">
          <p className="text-xs md:text-sm leading-relaxed italic">
            &quot;Este é um projeto estritamente acadêmico, desenvolvido como
            parte de um processo de aprendizado. Não possui fins comerciais nem
            representa uma organização real.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
