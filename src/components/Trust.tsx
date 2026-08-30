const audiences = [
  ["01", "Proprietários", "Triagem orientada pelo sintoma e pela aplicação do veículo."],
  ["02", "Oficinas", "Apoio técnico em componentes que exigem análise fora do veículo."],
  ["03", "Autoelétricas", "Bancada complementar para diagnóstico, programação e validação."],
  ["04", "Atendimento nacional", "Recebimento e devolução de componentes após alinhamento prévio."],
];

const Trust = () => (
  <section className="bg-[#f2f0ea] py-20 text-[#0b0b0c] sm:py-28" aria-labelledby="atendimento-title">
    <div className="container px-4 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#bd0500]"><span className="h-1 w-12 bg-primary" />Atendimento</p>
          <h2 id="atendimento-title" className="display-condensed mt-5 text-4xl font-bold uppercase leading-[.94] tracking-[-.035em] sm:text-5xl lg:text-6xl">Laboratório para quem precisa decidir com segurança.</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#55565a] lg:justify-self-end">A mesma estrutura atende o cliente final e profissionais que precisam complementar sua capacidade de diagnóstico eletrônico.</p>
      </div>

      <div className="mt-14 border-t border-black/20">
        {audiences.map(([number, title, text]) => (
          <article key={number} className="grid gap-3 border-b border-black/15 py-6 sm:grid-cols-[70px_.8fr_1.2fr] sm:items-center">
            <span className="text-xs font-bold text-[#bd0500]">{number}</span>
            <h3 className="display-condensed text-2xl font-bold uppercase">{title}</h3>
            <p className="text-sm leading-6 text-[#5f6064]">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
