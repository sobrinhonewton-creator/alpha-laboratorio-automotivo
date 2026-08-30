const capabilities = [
  ["01", "Leitura de sinais e códigos"],
  ["02", "Teste de alimentação e comunicação"],
  ["03", "Simulação fora do veículo"],
  ["04", "Validação após a intervenção"],
];

const About = () => (
  <section id="laboratorio" className="bg-[#f2f0ea] py-20 text-[#0b0b0c] sm:py-28" aria-labelledby="laboratorio-title">
    <div className="container grid gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
      <div className="relative">
        <div className="cut-corner overflow-hidden bg-[#171719]">
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet="/assets/estrutura-laboratorio-640.webp" />
            <source media="(max-width: 1439px)" srcSet="/assets/estrutura-laboratorio-960.webp" />
            <img src="/assets/estrutura-laboratorio.webp" alt="Estrutura real do Alpha Laboratório Automotivo" width="1400" height="960" loading="lazy" className="aspect-[4/3] h-full w-full object-cover grayscale-[15%]" />
          </picture>
        </div>
        <div className="absolute -bottom-6 right-0 cut-corner-sm bg-primary px-6 py-5 text-white sm:right-6">
          <p className="text-[10px] font-bold uppercase tracking-[.2em]">Estrutura real</p>
          <p className="display-condensed mt-1 text-2xl font-bold uppercase">Bancada / diagnóstico</p>
        </div>
      </div>

      <div className="pt-5 lg:pt-0">
        <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#bd0500]"><span className="h-1 w-12 bg-primary" />O laboratório</p>
        <h2 id="laboratorio-title" className="display-condensed mt-5 max-w-xl text-4xl font-bold uppercase leading-[.94] tracking-[-.035em] sm:text-5xl lg:text-6xl">Separar hipótese de evidência.</h2>
        <p className="mt-7 max-w-xl text-base leading-7 text-[#4f5054] sm:text-lg sm:leading-8">
          A bancada ajuda a isolar variáveis, observar sinais e testar o comportamento do componente em condições controladas. Isso organiza a decisão técnica antes da intervenção.
        </p>

        <div className="mt-9 border-t border-black/20">
          {capabilities.map(([number, label]) => (
            <div key={number} className="grid grid-cols-[48px_1fr] items-center border-b border-black/15 py-4">
              <span className="text-xs font-bold text-[#bd0500]">{number}</span>
              <span className="text-sm font-bold uppercase tracking-[.08em]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
