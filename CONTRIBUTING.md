# Contribuindo para o Casa de Oxalá Web

Bem-vindo(a)! Este documento define os padrões de desenvolvimento adotados no repositório `casa-de-oxala-web`. Siga estas diretrizes para manter consistência, rastreabilidade e qualidade ao longo do projeto.

---

## Sumário

- [Modelo de ramificação](#modelo-de-ramificação)
- [Nomenclatura de branches](#nomenclatura-de-branches)
- [Padrão de commits](#padrão-de-commits)
- [Ambiente local](#ambiente-local)
- [Definition of Done (DoD)](#definition-of-done-dod)

---

## Modelo de ramificação

Adotamos o **GitHub Flow**:

- A branch `main` é **protegida** — nenhum commit direto é permitido.
- Toda mudança deve ser feita em uma branch específica e integrada via **Pull Request**.
- Após o merge, a branch de origem é deletada automaticamente.

### Tipos de branch

| Tipo        | Quando usar                                    |
| ----------- | ---------------------------------------------- |
| `feature/`  | Nova funcionalidade                            |
| `fix/`      | Correção de bug                                |
| `chore/`    | Tarefa técnica (config, dependências, tooling) |
| `docs/`     | Somente documentação                           |
| `refactor/` | Refatoração sem mudança de comportamento       |

---

## Nomenclatura de branches

```
<tipo>/COX-<id>-descricao-curta-em-kebab-case
```

**Exemplos:**

```
feature/COX-10-listagem-produtos
fix/COX-14-corrige-calculo-frete
chore/COX-02-editorconfig
docs/COX-05-atualiza-readme
refactor/COX-08-extrai-hook-carrinho
```

---

## Padrão de commits

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/):

```
<tipo>(<escopo>): <descrição curta no imperativo>
```

### Tipos válidos

- `feat` — nova funcionalidade
- `fix` — correção de bug
- `chore` — tarefas técnicas, dependências, configuração
- `docs` — alterações em documentação
- `refactor` — refatoração sem impacto funcional
- `test` — adição ou correção de testes
- `style` — formatação, sem mudança de lógica
- `perf` — melhoria de performance
- `ci` — alterações em pipelines de CI/CD

### Escopos sugeridos

| Escopo     | Área                                     |
| ---------- | ---------------------------------------- |
| `store`    | Loja (catálogo, carrinho, checkout)      |
| `ops`      | Portal operacional                       |
| `auth`     | Autenticação e autorização               |
| `checkout` | Fluxo de finalização de compra           |
| `catalog`  | Listagem e detalhe de produtos           |
| `shared`   | Componentes e utilitários compartilhados |

**Exemplos:**

```
feat(catalog): adiciona listagem de produtos com paginação
fix(checkout): corrige arredondamento do valor do frete
chore(ci): adiciona workflow de build e lint
docs: atualiza contributing com escopos de commits
refactor(shared): extrai componente Button para design system
```

---

## Ambiente local

### Pré-requisitos

- Node.js >= 20 (recomendado via [nvm](https://github.com/nvm-sh/nvm))

### Comandos

```bash
# Instalar dependências (reproduzível e sem atualizar lock)
npm ci

# Iniciar servidor de desenvolvimento
npm run dev

# Verificar lint
npm run lint

# Verificar formatação (não altera arquivos)
npm run format:check

# Aplicar formatação
npm run format

# Verificar tipos TypeScript
npm run type-check

# Gerar build de produção
npm run build
```

---

## Definition of Done (DoD)

Antes de abrir um Pull Request, verifique:

- [ ] `npm run lint` — sem erros
- [ ] `npm run type-check` — sem erros de tipo
- [ ] `npm run build` — build gerado com sucesso
- [ ] `npm run format:check` — código formatado corretamente
- [ ] Nenhum dado pessoal (PII) presente em logs ou console
- [ ] Código organizado por domínio (`store`, `ops`, `auth`, `checkout`, `catalog`, `shared`)
- [ ] Tratamento de erros implementado para operações assíncronas
- [ ] PR vinculado à issue/tarefa correspondente (ex.: `COX-10`)
