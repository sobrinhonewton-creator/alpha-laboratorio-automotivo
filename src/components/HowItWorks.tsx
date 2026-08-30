import { processSteps } from "@/config/site";

const HowItWorks = () => (
  <section id="metodo" className="border-y border-white/10 bg-[#171719] py-20 sm:py-28" aria-labelledby="metodo-title">
    <div className="container px-4 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <div>
          <p className="section-kicker">Método de trabalho</p>
          <h2 id="metodo-title" className="section-title mt-5">Da entrada à validação.</h2>
        </div>
        <p className="section-subtitle">Para uma triagem mais objetiva, envie modelo, ano, motorização, componente, histórico e o sintoma observado.</p>
      </div>

      <ol className="relative mt-14 grid lg:grid-cols-4">
        <div aria-hidden="true" className="absolute left-0 right-0 top-[31px] hidden h-px bg-white/20 lg:block" />
        {processSteps.map((step) => (
          <li key={step.number} className="relative border-l border-white/15 py-6 pl-6 pr-5 first:border-primary lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-14">
            <span className="relative z-10 inline-grid h-16 w-16 place-items-center border border-white/25 bg-[#171719] text-sm font-bold text-[#ff5a54] lg:absolute lg:-top-8 lg:left-0">{step.number}</span>
            <div className="mt-5 lg:mt-0">
              <h3 className="display-condensed text-2xl font-bold uppercase text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#a7a8ac]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
