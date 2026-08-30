import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

const Contact = () => (
  <section id="contato" className="bg-[#0b0b0c] py-20 sm:py-28" aria-labelledby="contato-title">
    <div className="container px-4 sm:px-6">
      <div className="cut-corner grid overflow-hidden border border-white/15 lg:grid-cols-[1.15fr_.85fr]">
        <div className="bg-primary p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-white">Próxima entrada / triagem</p>
          <h2 id="contato-title" className="display-condensed mt-6 max-w-3xl text-4xl font-bold uppercase leading-[.92] tracking-[-.035em] text-white sm:text-5xl lg:text-7xl">Conte o sintoma antes de enviar o componente.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white">Informe modelo, ano, motorização, componente, histórico e códigos de falha. Fotos ajudam a preparar a avaliação inicial.</p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="cut-corner-sm mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 bg-white px-7 text-sm font-bold uppercase tracking-[.08em] text-[#0b0b0c] transition hover:bg-[#f2f0ea]">
            <MessageCircle className="h-5 w-5" /> Iniciar triagem
          </a>
        </div>

        <address className="flex flex-col bg-[#171719] p-7 not-italic sm:p-10 lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ff5a54]">Canais diretos</p>
            <div className="mt-8 border-t border-white/15">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-white/15 py-6">
                <Phone className="h-5 w-5 text-primary" />
                <span className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-[.2em] text-[#a7a8ac]">WhatsApp</span><span className="mt-1 block font-bold text-white">{siteConfig.phone.display}</span></span>
                <ArrowUpRight className="h-4 w-4 text-[#a7a8ac] transition group-hover:text-white" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 border-b border-white/15 py-6">
                <Mail className="h-5 w-5 text-primary" />
                <span className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-[.2em] text-[#a7a8ac]">E-mail</span><span className="mt-1 block truncate font-bold text-white">{siteConfig.email}</span></span>
                <ArrowUpRight className="h-4 w-4 text-[#a7a8ac] transition group-hover:text-white" />
              </a>
            </div>
          </div>
        </address>
      </div>
    </div>
  </section>
);

export default Contact;
