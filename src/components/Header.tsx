import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

const navItems = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Estrutura", href: "/#estrutura" },
  { label: "Processo", href: "/#processo" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between px-4 sm:px-6">
        <a href="/" aria-label={`${siteConfig.name}, início`} className="relative z-10 inline-flex items-center">
          <img src="/assets/logo-negativa.svg" alt={siteConfig.name} width="980" height="350" className="h-10 w-auto sm:h-11" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white">
            Instagram <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary/90">
            <MessageCircle className="h-4 w-4" />
            Solicitar avaliação
          </a>
        </div>

        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)} className="relative z-10 grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#07111f] px-4 pb-6 pt-3 lg:hidden">
          <nav aria-label="Navegação móvel" className="container flex flex-col px-0">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-base font-medium text-slate-200">
                {item.label}
              </a>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 font-semibold text-white">
              <MessageCircle className="h-5 w-5" />
              Solicitar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
