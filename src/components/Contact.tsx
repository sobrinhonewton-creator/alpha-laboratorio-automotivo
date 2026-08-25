import { ArrowUpRight, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";

const Contact = () => (
  <section id="contato" className="relative overflow-hidden bg-[#07111f] py-20 sm:py-24" aria-labelledby="contato-title">
    <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
    <div className="container relative grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <p className="section-kicker">Próximo passo</p>
        <h2 id="contato-title" className="section-title mt-4 max-w-2xl">Envie o contexto do veículo para começarmos pela triagem certa.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Informe modelo, ano, motorização, componente, histórico do problema e sintomas. Fotos e códigos de falha ajudam na avaliação inicial.
        </p>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20bd5a]">
          <MessageCircle className="h-5 w-5" />
          Iniciar triagem no WhatsApp
        </a>
      </div>

      <address className="not-italic">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
          <h3 className="text-lg font-bold text-white">Canais de atendimento</h3>
          <div className="mt-6 divide-y divide-white/10">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-4 first:pt-0">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-cyan-300"><Phone className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs uppercase tracking-wider text-slate-300">WhatsApp</span><span className="block font-semibold text-white">{siteConfig.phone.display}</span></span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" />
            </a>
            <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-cyan-300"><Instagram className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs uppercase tracking-wider text-slate-300">Instagram</span><span className="block truncate font-semibold text-white">{siteConfig.instagram.handle}</span></span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 py-4 last:pb-0">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-cyan-300"><Mail className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs uppercase tracking-wider text-slate-300">E-mail</span><span className="block truncate font-semibold text-white">{siteConfig.email}</span></span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-white" />
            </a>
          </div>
        </div>
      </address>
    </div>
  </section>
);

export default Contact;
