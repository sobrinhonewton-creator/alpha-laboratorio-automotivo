import { processSteps } from "@/config/site";

const HowItWorks = () => (
  <section id="processo" className="bg-background py-20 sm:py-24" aria-labelledby="processo-title">
    <div className="container px-4 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="section-kicker">Fluxo de atendimento</p>
          <h2 id="processo-title" className="section-title mt-4">Um processo que pode ser repetido e acompanhado.</h2>
          <p className="section-subtitle mt-5">Para acelerar a triagem, envie veículo, ano, motorização, componente envolvido, histórico e o sintoma observado.</p>
        </div>

        <ol className="relative grid gap-4 sm:grid-cols-2">
          {processSteps.map((step) => (
            <li key={step.number} className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6">
              <span aria-hidden="true" className="absolute right-5 top-3 text-5xl font-bold tracking-[-0.06em] text-slate-500">{step.number}</span>
              <span className="text-sm font-bold text-cyan-300">{step.number}</span>
              <h3 className="mt-8 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default HowItWorks;
