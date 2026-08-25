import { ArrowDown, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

const proofPoints = [
  "Diagnóstico orientado por evidências",
  "Testes controlados em bancada",
  "Atendimento e envio para todo o Brasil",
];

const Hero = () => (
  <section className="relative isolate min-h-[780px] overflow-hidden bg-[#07111f] pt-[72px]" aria-labelledby="hero-title">
    <div className="absolute inset-0 -z-20">
      <picture className="block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/assets/hero-laboratorio-640.webp" />
        <source media="(max-width: 1439px)" srcSet="/assets/hero-laboratorio-1280.webp" />
        <img
          src="/assets/hero-laboratorio.webp"
          alt="Estrutura técnica da Alpha Sistemas Automotivos com equipamentos de diagnóstico e programação"
          className="h-full w-full object-cover object-center"
          width="1800"
          height="1200"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07111f_0%,rgba(7,17,31,.96)_35%,rgba(7,17,31,.7)_62%,rgba(7,17,31,.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#07111f_0%,transparent_38%)]" />
    </div>

    <div className="absolute left-[54%] top-[21%] -z-10 h-72 w-72 rounded-full border border-cyan-400/20 opacity-70 sm:h-[420px] sm:w-[420px]" />
    <div className="absolute left-[61%] top-[27%] -z-10 h-44 w-44 rounded-full border border-primary/30 opacity-70 sm:h-64 sm:w-64" />
    <div className="absolute right-[9%] top-[34%] -z-10 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_24px_6px_rgba(229,36,42,.65)]" />

    <div className="container grid min-h-[708px] items-center px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,.9fr)] lg:py-20">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(229,36,42,.8)]" />
          Eletrônica automotiva especializada
        </div>

        <h1 id="hero-title" className="max-w-3xl text-balance text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
          Diagnóstico preciso. <span className="text-gradient">Eletrônica com método.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Diagnóstico automotivo, reparo de módulos ECU, sistemas IMMO, painéis de instrumentos, programação e simulação em bancada.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary/90">
            <MessageCircle className="h-5 w-5" />
            Solicitar avaliação técnica
          </a>
          <a href="#servicos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
            Conhecer os serviços <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-9 grid gap-3 text-sm text-slate-300 sm:grid-cols-3" aria-label="Diferenciais do atendimento">
          {proofPoints.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden justify-self-end self-end pb-7 lg:block">
        <a href="#estrutura" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          Ver estrutura <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
