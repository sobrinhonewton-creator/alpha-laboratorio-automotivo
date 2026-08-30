import { ArrowDownRight, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

const proofPoints = [
  ["01", "Diagnóstico eletrônico"],
  ["02", "Simulação em bancada"],
  ["03", "Envio para todo o Brasil"],
];

const Hero = () => (
  <section className="relative isolate min-h-[820px] overflow-hidden bg-[#0b0b0c] pt-20" aria-labelledby="hero-title">
    <div className="absolute inset-0 -z-20">
      <picture className="block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/assets/hero-laboratorio-640.webp" />
        <source media="(max-width: 1439px)" srcSet="/assets/hero-laboratorio-1280.webp" />
        <img src="/assets/hero-laboratorio.webp" alt="Bancada real do Alpha Laboratório Automotivo" className="h-full w-full object-cover object-[58%_center] grayscale-[20%]" width="1800" height="1200" />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0b0c_0%,rgba(11,11,12,.98)_33%,rgba(11,11,12,.76)_60%,rgba(11,11,12,.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b0b0c_0%,transparent_40%)]" />
    </div>

    <div aria-hidden="true" className="display-condensed absolute -bottom-12 right-[-2vw] -z-10 text-[24vw] font-bold leading-none tracking-[-.08em] text-white/[.035]">ALPHA</div>
    <div className="absolute right-[7%] top-[18%] -z-10 h-px w-36 bg-primary shadow-[0_0_30px_rgba(225,6,0,.75)]" />

    <div className="container flex min-h-[740px] flex-col justify-between px-4 py-14 sm:px-6 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,.92fr)]">
        <div className="max-w-4xl">
          <p className="section-kicker">Lab. 01 / eletrônica automotiva</p>
          <h1 id="hero-title" className="display-condensed mt-7 max-w-4xl text-balance text-5xl font-bold uppercase leading-[.88] tracking-[-.045em] text-white sm:text-7xl lg:text-[6.8rem]">
            Antes de intervir, <span className="text-primary">a gente mede.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-[#c5c5c7] sm:text-lg sm:leading-8">
            Diagnóstico automotivo, reparo de módulos ECU, sistemas IMMO, painéis de instrumentos, programação e simulação em bancada.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="cut-corner-sm inline-flex min-h-[52px] items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:bg-[#ff1009]">
              <MessageCircle className="h-5 w-5" /> Solicitar avaliação técnica
            </a>
            <a href="#servicos" className="cut-corner-sm inline-flex min-h-[52px] items-center justify-center gap-2 border border-white/25 bg-black/20 px-7 py-4 text-sm font-bold uppercase tracking-[.08em] text-white transition hover:border-white/60">
              Ver serviços <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="hidden self-end justify-self-end border-l border-white/20 pl-8 lg:block" aria-label="Resumo da atuação">
          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#ff5a54]">Área de teste / bancada</p>
          <p className="display-condensed mt-4 text-4xl font-bold uppercase leading-none text-white">Medir<br />Interpretar<br />Validar</p>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[.16em] text-[#a7a8ac]"><span className="h-px w-12 bg-primary" /> Processo técnico</div>
        </aside>
      </div>

      <div className="mt-14 grid border-y border-white/15 bg-black/25 backdrop-blur-sm sm:grid-cols-3">
        {proofPoints.map(([number, label]) => (
          <div key={number} className="flex items-center gap-4 border-b border-white/10 px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <span className="text-xs font-bold text-[#ff5a54]">{number}</span>
            <span className="text-xs font-bold uppercase tracking-[.12em] text-white">{label}</span>
          </div>
        ))}
      </div>
    </div>

    <a href="#laboratorio" aria-label="Ir para a apresentação do laboratório" className="absolute bottom-5 right-6 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#a7a8ac] lg:inline-flex">Continuar <ArrowDownRight className="h-4 w-4 text-primary" /></a>
  </section>
);

export default Hero;
