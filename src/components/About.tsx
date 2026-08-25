import { Activity, Boxes, FileCheck2, ScanLine } from "lucide-react";

const capabilities = [
  { icon: ScanLine, label: "Leitura e diagnóstico" },
  { icon: Activity, label: "Sinais e comunicação" },
  { icon: Boxes, label: "Simulação em bancada" },
  { icon: FileCheck2, label: "Validação do resultado" },
];

const About = () => (
  <section id="estrutura" className="relative overflow-hidden bg-[#0a1524] py-20 sm:py-24" aria-labelledby="estrutura-title">
    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
    <div className="container relative grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet="/assets/estrutura-laboratorio-640.webp" />
            <source media="(max-width: 1439px)" srcSet="/assets/estrutura-laboratorio-960.webp" />
            <img
              src="/assets/estrutura-laboratorio.webp"
              alt="Bancada técnica com equipamentos utilizados nos serviços da Alpha"
              width="1400"
              height="960"
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="absolute -bottom-5 right-4 max-w-[250px] rounded-xl border border-cyan-400/20 bg-[#07111f]/95 p-4 shadow-xl backdrop-blur sm:right-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Estrutura real
          </div>
          <p className="text-sm leading-6 text-slate-300">Equipamentos de diagnóstico, programação e simulação integrados à bancada.</p>
        </div>
      </div>

      <div>
        <p className="section-kicker">Estrutura técnica</p>
        <h2 id="estrutura-title" className="section-title mt-4 max-w-xl">Decisões técnicas antes de trocar componentes.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          O trabalho começa pela compreensão do sintoma. A bancada permite isolar variáveis, observar sinais e testar módulos em condições controladas antes da validação final.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-cyan-300">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-100">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
