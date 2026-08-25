import { ClipboardCheck, MessagesSquare, Microscope, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    title: "Evidência antes da intervenção",
    description: "O serviço parte de sintomas, medições e testes aplicáveis, não de uma troca por tentativa.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente controlado",
    description: "A simulação em bancada ajuda a separar falha do módulo, chicote, alimentação ou comunicação.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação técnica",
    description: "A triagem registra aplicação e sintomas para alinhar o que será analisado e autorizado.",
  },
  {
    icon: ClipboardCheck,
    title: "Validação final",
    description: "Após a intervenção, os testes pertinentes são repetidos antes da conclusão do serviço.",
  },
];

const Differentials = () => (
  <section className="border-y border-white/10 bg-[#0a1524] py-20 sm:py-24" aria-labelledby="metodo-title">
    <div className="container px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-kicker justify-center">Método Alpha</p>
        <h2 id="metodo-title" className="section-title mt-4">Clareza técnica em cada etapa.</h2>
        <p className="section-subtitle mx-auto mt-5">Uma operação organizada reduz retrabalho, melhora a tomada de decisão e facilita o atendimento a clientes, oficinas e autoelétricas.</p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map(({ icon: Icon, title, description }) => (
          <article key={title} className="bg-[#0b1727] p-6 sm:p-7">
            <Icon className="h-7 w-7 text-cyan-300" />
            <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
