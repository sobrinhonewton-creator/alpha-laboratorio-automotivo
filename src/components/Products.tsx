import { Activity, ArrowUpRight, Code2, Cpu, Gauge, KeyRound, ScanLine } from "lucide-react";
import { services, whatsappUrl } from "@/config/site";

const icons = {
  scan: ScanLine,
  cpu: Cpu,
  key: KeyRound,
  gauge: Gauge,
  activity: Activity,
  code: Code2,
};

const Products = () => (
  <section id="servicos" className="bg-background py-20 sm:py-24" aria-labelledby="servicos-title">
    <div className="container px-4 sm:px-6">
      <div className="max-w-3xl">
        <p className="section-kicker">Serviços especializados</p>
        <h2 id="servicos-title" className="section-title mt-4">Do sintoma à validação eletrônica.</h2>
        <p className="section-subtitle mt-5">Atuação técnica em diagnóstico, reparo e programação, sempre condicionada à aplicação e ao resultado da triagem.</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          const imageBase = service.image.replace(/\.webp$/, "");
          return (
            <article key={service.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <picture className="block h-full w-full">
                  <source media="(max-width: 767px)" srcSet={`${imageBase}-480.webp`} />
                  <source media="(max-width: 1439px)" srcSet={`${imageBase}-800.webp`} />
                  <img
                    src={service.image}
                    alt={`Execução de ${service.title.toLowerCase()}`}
                    width="1200"
                    height="900"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-[#07111f]/80 text-cyan-300 backdrop-blur">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{service.eyebrow}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{service.description}</p>
                <a href={whatsappUrl(`Olá, quero solicitar uma avaliação para ${service.title.toLowerCase()}. Veículo/modelo: _____. Sintoma apresentado: _____.`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white">
                  Consultar aplicação <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Products;
