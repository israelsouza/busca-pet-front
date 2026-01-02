import Image from "next/image";
import { Github, Linkedin, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  id: number;
  href: string;
  label: string;
  icon: LucideIcon;
}

export default function Footer() {
  const ICON_STYLE = "hover:text-[#efa355] transition-colors duration-300";

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      href: "https://github.com/israelsouza",
      label: "GitHub",
      icon: Github,
    },
    {
      id: 2,
      href: "https://br.linkedin.com/in/israel-souza-lima",
      label: "Linkedin",
      icon: Linkedin,
    },
    {
      id: 3,
      href: "https://rael-portifolio.pages.dev/",
      label: "Portifolio",
      icon: Globe,
    },
  ];

  return (
    <footer className="relative bg-[#1a1510] text-gray-300 py-10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/paws-footer.jpg"
          alt="Imagem de background com padrão de patinhas"
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
            {socialLinks.map(({ id, href, label, icon: Icon }) => {
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ICON_STYLE}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
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
