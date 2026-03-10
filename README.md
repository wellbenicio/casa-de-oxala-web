# Casa de Oxalá — Web

[![CI](https://github.com/wellbenicio/casa-de-oxala-web/actions/workflows/ci.yml/badge.svg)](https://github.com/wellbenicio/casa-de-oxala-web/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wellbenicio_casa-de-oxala-web&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=wellbenicio_casa-de-oxala-web)

Front-end web para a Casa de Oxalá — loja de artigos religiosos (umbanda, candomblé, jurema e afins).

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## Desenvolvimento local

### Pré-requisitos

- Node.js >= 20

### Instalar dependências e rodar

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Verificações de qualidade

```bash
npm run lint          # ESLint
npm run type-check    # TypeScript
npm run format:check  # Prettier
npm run build         # Build de produção
```

---

## Pipeline CI (GitHub Actions)

O arquivo `.github/workflows/ci.yml` dispara automaticamente em push e pull requests para `main` e `develop`.

### Jobs

| Job | O que faz |
|---|---|
| **Build & Lint** | Instala dependências, roda ESLint, TypeScript e build de produção |
| **Quality Gate** | Análise SonarCloud (opcional — pula se `SONAR_TOKEN` não estiver configurado) |

> **O job Build & Lint é o check obrigatório.** O Quality Gate é opcional e não bloqueia o merge caso os secrets do SonarCloud ainda não estejam configurados.

### Configurar SonarCloud (opcional)

1. Acesse [sonarcloud.io](https://sonarcloud.io) e faça login com o GitHub
2. Importe o repositório `casa-de-oxala-web` na organização `wellbenicio`
3. Em **Administration → Analysis Method**, desabilite *Automatic Analysis*
4. Gere um token em **My Account → Security**
5. No GitHub, vá em **Settings → Secrets and variables → Actions** e crie:

| Secret | Valor |
|---|---|
| `SONAR_TOKEN` | Token gerado no SonarCloud |
| `SONAR_ORGANIZATION` | `wellbenicio` |
| `SONAR_PROJECT_KEY` | `wellbenicio_casa-de-oxala-web` |

---

## Configuração de Branch Protection

Para garantir que o proprietário (`wellbenicio`) consiga **aprovar e mergear** os pull requests, siga os passos abaixo.

### Configurar a regra de proteção da branch `main`

1. Acesse **Settings → Branches** no repositório
2. Clique em **Edit** na regra existente para `main` (ou **Add rule** se não houver)
3. Aplique as seguintes configurações:

#### ✅ Configurações recomendadas

| Configuração | Valor |
|---|---|
| Require a pull request before merging | ✅ Habilitado |
| Required approvals | `1` |
| Dismiss stale reviews | ✅ Recomendado |
| Require status checks to pass before merging | ✅ Habilitado |
| Status check obrigatório | `Build & Lint` (nome do job no CI) |
| Require branches to be up to date before merging | ✅ Recomendado |
| Do not allow bypassing the above settings | ❌ **Desabilitado** — permite que admins/owners façam merge mesmo que alguns checks falhem em casos emergenciais |

#### ⚠️ Configurações que bloqueiam o owner — verifique se estão desabilitadas

| Configuração | Deve estar |
|---|---|
| Restrict who can push to matching branches | ❌ Desabilitado (ou contendo `wellbenicio`) |
| Require review from Code Owners | ❌ Desabilitado |
| Restrict who can dismiss pull request reviews | ❌ Desabilitado |

> **Atenção:** No GitHub, o autor de um PR **não pode aprovar o próprio PR**. Como os PRs são abertos pelo agente **Copilot**, o proprietário `wellbenicio` pode (e deve) aprovar normalmente — desde que o CI esteja verde.

### Fluxo de aprovação

```
Copilot abre PR → CI roda → CI passa (verde) → wellbenicio aprova → wellbenicio faz merge
```

---

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto (não versionado):

```bash
cp .env.example .env.local   # se existir o arquivo de exemplo
```

> Arquivos `.env`, `.env.local`, `.env.prod` etc. estão no `.gitignore` e **nunca** devem ser versionados.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
