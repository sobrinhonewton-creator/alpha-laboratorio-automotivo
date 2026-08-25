import { Building2, CarFront, PackageCheck, Wrench } from "lucide-react";

const audiences = [
  { icon: CarFront, title: "Proprietários", text: "Triagem clara para entender o sintoma e a aplicação antes do envio ou atendimento." },
  { icon: Wrench, title: "Oficinas", text: "Apoio técnico em componentes eletrônicos que exigem análise fora do veículo." },
  { icon: Building2, title: "Autoelétricas", text: "Bancada complementar para diagnóstico, programação e validação de módulos." },
  { icon: PackageCheck, title: "Atendimento nacional", text: "Recebimento e devolução de componentes, após alinhamento prévio do serviço." },
];

const Trust = () => (
  <section className="bg-[#f4f7fb] py-20 text-[#07111f] sm:py-24" aria-labelledby="atendimento-title">
    <div className="container px-4 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0057b8]">Atendimento técnico</p>
        <h2 id="atendimento-title" className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">Uma estrutura que também atende quem já está na linha de frente.</h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {audiences.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf3ff] text-[#006ee6]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
