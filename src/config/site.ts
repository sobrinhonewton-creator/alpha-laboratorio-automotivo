export const siteConfig = {
  name: "Alpha Laboratório Automotivo",
  shortName: "Alpha Laboratório",
  tagline: "Precisão antes da intervenção.",
  description:
    "Laboratório de diagnóstico eletrônico, reparo de módulos ECU, sistemas IMMO, painéis de instrumentos, programação especializada e simulação em bancada.",
  phone: {
    display: "(73) 98144-9671",
    international: "+55 73 98144-9671",
    whatsapp: "5573981449671",
  },
  email: "getbrautocar@gmail.com",
  instagram: {
    displayName: "Alpha Laboratório Automotivo",
    handle: "",
    url: "",
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
    title: "Entrada técnica",
    description: "Veículo, aplicação, histórico e sintomas formam o ponto de partida da análise.",
  },
  {
    number: "02",
    title: "Medição",
    description: "Sinais, alimentação, comunicação e comportamento do componente são testados.",
  },
  {
    number: "03",
    title: "Intervenção autorizada",
    description: "Com o escopo alinhado, o procedimento adequado é aplicado ao componente.",
  },
  {
    number: "04",
    title: "Validação",
    description: "Os testes pertinentes são repetidos antes da conclusão e da devolução.",
  },
] as const;
