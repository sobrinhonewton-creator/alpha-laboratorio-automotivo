import { ArrowUp, Instagram, Mail, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050c15] text-slate-400">
    <div className="container grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_.8fr_.8fr]">
      <div>
        <img src="/assets/logo-negativa.svg" alt={siteConfig.name} width="980" height="350" className="h-12 w-auto" />
        <p className="mt-5 max-w-md text-sm leading-6">{siteConfig.description}</p>
        <p className="mt-3 text-sm font-semibold text-slate-200">{siteConfig.tagline}</p>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Navegação</h2>
        <nav className="mt-5 flex flex-col gap-3 text-sm" aria-label="Navegação do rodapé">
          <a href="/#servicos" className="transition hover:text-white">Serviços</a>
          <a href="/#estrutura" className="transition hover:text-white">Estrutura</a>
          <a href="/#processo" className="transition hover:text-white">Processo</a>
          <a href="/#contato" className="transition hover:text-white">Contato</a>
          <a href="/auth" className="transition hover:text-white">Área administrativa</a>
        </nav>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Fale com a Alpha</h2>
        <div className="mt-5 flex flex-col gap-4 text-sm">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><MessageCircle className="h-4 w-4 text-cyan-300" />{siteConfig.phone.display}</a>
          <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><Instagram className="h-4 w-4 text-cyan-300" />{siteConfig.instagram.handle}</a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 break-all transition hover:text-white"><Mail className="h-4 w-4 flex-none text-cyan-300" />{siteConfig.email}</a>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container flex flex-col gap-4 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Conteúdo institucional.</p>
        <a href="#top" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">Voltar ao topo <ArrowUp className="h-3.5 w-3.5" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
