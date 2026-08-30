import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#080809] text-[#a7a8ac]">
    <div className="container grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_.7fr_.8fr]">
      <div>
        <img src="/assets/logo-negativa.svg" alt={siteConfig.name} width="1600" height="420" className="h-14 w-auto" />
        <p className="mt-6 max-w-md text-sm leading-6">{siteConfig.description}</p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[.16em] text-white">{siteConfig.tagline}</p>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-[.18em] text-[#ff5a54]">Navegação</h2>
        <nav className="mt-5 flex flex-col gap-3 text-sm" aria-label="Navegação do rodapé">
          <a href="/#laboratorio" className="transition hover:text-white">Laboratório</a>
          <a href="/#servicos" className="transition hover:text-white">Serviços</a>
          <a href="/#metodo" className="transition hover:text-white">Método</a>
          <a href="/#contato" className="transition hover:text-white">Contato</a>
          <a href="/auth" className="transition hover:text-white">Área administrativa</a>
        </nav>
      </div>

      <div>
        <h2 className="text-xs font-bold uppercase tracking-[.18em] text-[#ff5a54]">Fale com a Alpha</h2>
        <div className="mt-5 flex flex-col gap-4 text-sm">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><MessageCircle className="h-4 w-4 text-primary" />{siteConfig.phone.display}</a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 break-all transition hover:text-white"><Mail className="h-4 w-4 flex-none text-primary" />{siteConfig.email}</a>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container flex flex-col gap-4 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Conteúdo institucional.</p>
        <a href="#top" className="inline-flex items-center gap-2 text-white transition hover:text-primary">Voltar ao topo <ArrowUp className="h-3.5 w-3.5" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
