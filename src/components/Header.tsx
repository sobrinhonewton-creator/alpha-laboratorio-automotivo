import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

const navItems = [
  { label: "Laboratório", href: "/#laboratorio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Método", href: "/#metodo" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0c]/95 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
        <a href="/" aria-label={`${siteConfig.name}, início`} className="relative z-10 inline-flex items-center">
          <img src="/assets/logo-negativa.svg" alt={siteConfig.name} width="1600" height="420" className="h-11 w-auto sm:h-12" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className="group inline-flex items-baseline gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#a7a8ac] transition-colors hover:text-white">
              <span className="text-[9px] text-[#ff5a54]">0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="cut-corner-sm hidden h-11 items-center gap-2 bg-primary px-5 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-[#ff1009] lg:inline-flex">
          <MessageCircle className="h-4 w-4" /> Solicitar avaliação
        </a>

        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)} className="relative z-10 grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#0b0b0c] px-4 pb-6 pt-2 lg:hidden">
          <nav aria-label="Navegação móvel" className="container flex flex-col px-0">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-baseline gap-3 border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[.12em] text-white">
                <span className="text-[10px] text-[#ff5a54]">0{index + 1}</span>{item.label}
              </a>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="cut-corner-sm mt-5 inline-flex h-12 items-center justify-center gap-2 bg-primary px-5 font-bold uppercase tracking-[.06em] text-white">
              <MessageCircle className="h-5 w-5" /> Solicitar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
