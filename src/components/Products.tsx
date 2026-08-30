import { ArrowUpRight } from "lucide-react";
import { services, whatsappUrl } from "@/config/site";

const Products = () => (
  <section id="servicos" className="bg-[#0b0b0c] py-20 sm:py-28" aria-labelledby="servicos-title">
    <div className="container px-4 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">Escopo técnico</p>
          <h2 id="servicos-title" className="section-title mt-5">O que entra no laboratório.</h2>
        </div>
        <p className="section-subtitle lg:justify-self-end">Cada serviço começa pela aplicação e pelo sintoma. O objetivo é definir o que precisa ser medido antes de indicar a intervenção.</p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const imageBase = service.image.replace(/\.webp$/, "");
          return (
            <article key={service.id} className="group cut-corner relative min-h-[430px] overflow-hidden border border-white/15 bg-[#171719]">
              <picture className="absolute inset-0 block h-full w-full">
                <source media="(max-width: 767px)" srcSet={`${imageBase}-480.webp`} />
                <source media="(max-width: 1439px)" srcSet={`${imageBase}-800.webp`} />
                <img src={service.image} alt={`Trabalho de ${service.title.toLowerCase()} no laboratório`} width="1200" height="900" loading="lazy" className="h-full w-full object-cover grayscale-[18%] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0" />
              </picture>
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,12,.98)_0%,rgba(11,11,12,.82)_38%,rgba(11,11,12,.1)_78%)]" />
              <div className="relative flex min-h-[430px] flex-col justify-between p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ff5a54]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="border-b border-white/30 pb-1 text-[10px] font-bold uppercase tracking-[.18em] text-white">{service.eyebrow}</span>
                </div>
                <div>
                  <h3 className="display-condensed text-3xl font-bold uppercase leading-none text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#b8b8bb]">{service.description}</p>
                  <a href={whatsappUrl(`Olá, quero solicitar uma avaliação para ${service.title.toLowerCase()}. Veículo/modelo: _____. Sintoma apresentado: _____.`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-white transition-colors hover:text-primary">
                    Consultar aplicação <ArrowUpRight className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Products;
