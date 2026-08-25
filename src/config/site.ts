export const siteConfig = {
  name: "Alpha Sistemas Automotivos",
  shortName: "Alpha Sistemas",
  tagline: "Precisão eletrônica em movimento.",
  description:
    "Diagnóstico automotivo, reparo de módulos de injeção, imobilizadores, painéis de instrumentos, programação especializada e simulação em bancada.",
  phone: {
    display: "(73) 98144-9671",
    international: "+55 73 98144-9671",
    whatsapp: "5573981449671",
  },
  email: "getbrautocar@gmail.com",
  instagram: {
    handle: "@alphasistemasautomotivo",
    url: "https://www.instagram.com/alphasistemasautomotivo/",
  },
  whatsappMessage:
    "Olá, quero solicitar uma avaliação técnica. Veículo/modelo: _____. Sintoma apresentado: _____.",
} as const;

export const whatsappUrl = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    id: "diagnostico",
    title: "Diagnóstico automotivo",
    eyebrow: "Leitura e análise",
    description:
      "Investigação orientada por sintomas, códigos de falha e medições para localizar a origem do problema antes da intervenção.",
    image: "/assets/servico-diagnostico.webp",
    icon: "scan",
  },
  {
    id: "ecu",
    title: "Reparo de módulos ECU",
    eyebrow: "Injeção eletrônica",
    description:
      "Análise eletrônica e reparo de módulos de injeção com inspeção do circuito e validação funcional.",
    image: "/assets/servico-ecu.webp",
    icon: "cpu",
  },
  {
    id: "immo",
    title: "Imobilizadores e chaves",
    eyebrow: "Sistemas IMMO",
    description:
      "Diagnóstico de falhas de autorização, sincronismo e programação, conforme a aplicação do veículo.",
    image: "/assets/servico-immo.webp",
    icon: "key",
  },
  {
    id: "paineis",
    title: "Painéis de instrumentos",
    eyebrow: "Clusters automotivos",
    description:
      "Diagnóstico e reparo eletrônico de painéis, displays, indicadores e falhas de comunicação.",
    image: "/assets/servico-paineis.webp",
    icon: "gauge",
  },
  {
    id: "bancada",
    title: "Simulação em bancada",
    eyebrow: "Teste controlado",
    description:
      "Alimentação, comunicação e simulação de sinais para testar módulos fora do veículo em ambiente controlado.",
    image: "/assets/servico-bancada.webp",
    icon: "activity",
  },
  {
    id: "programacao",
    title: "Programação especializada",
    eyebrow: "Configuração veicular",
    description:
      "Procedimentos de programação e configuração aplicados após análise de compatibilidade e necessidade técnica.",
    image: "/assets/servico-programacao.webp",
    icon: "code",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Triagem técnica",
    description: "Coletamos veículo, aplicação, histórico e sintomas para direcionar a análise.",
  },
  {
    number: "02",
    title: "Diagnóstico",
    description: "Testes e medições identificam a causa provável e o escopo necessário.",
  },
  {
    number: "03",
    title: "Intervenção",
    description: "O serviço autorizado é executado com o procedimento adequado ao componente.",
  },
  {
    number: "04",
    title: "Validação",
    description: "Repetimos os testes aplicáveis e registramos o resultado antes da devolução.",
  },
] as const;
