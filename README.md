# Alpha Sistemas Automotivos

Site institucional e catálogo técnico da Alpha Sistemas Automotivos. A página pública apresenta os serviços de diagnóstico, ECU, IMMO, painéis, programação e simulação em bancada. O catálogo e a área administrativa usam Supabase quando as variáveis do ambiente estão configuradas.

## Stack

- React + TypeScript
- Vite + Tailwind CSS
- Supabase (catálogo, autenticação e imagens)
- Vitest
- Vercel

## Execução local

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Preencha apenas chaves publicáveis no cliente:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

Nunca use `service_role` ou secret key em variáveis `VITE_*`.

## Validação

```powershell
npm run lint
npm test
npm run build
```

Sem as variáveis Supabase, o site institucional continua operacional e o catálogo exibe um estado seguro de configuração pendente.

## Deploy

O arquivo `vercel.json` configura o fallback de rotas da SPA e cabeçalhos básicos. O projeto deve ser conectado ao repositório GitHub e publicado pela Vercel com as variáveis de ambiente cadastradas no projeto.
