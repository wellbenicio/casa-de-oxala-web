## O que foi feito

<!-- Descreva resumidamente as mudanças realizadas neste PR. -->

## Por que foi feito

<!-- Explique a motivação ou o problema que esta PR resolve. Vincule a issue/tarefa, ex.: Resolve COX-XX -->

## Como testar

<!-- Passo a passo para validar as mudanças localmente. -->

1. `npm ci`
2. `npm run dev`
3. Acesse `http://localhost:3000` e verifique...

---

## Checklist

### Qualidade de código

- [ ] `npm run lint` passou sem erros
- [ ] `npm run type-check` passou sem erros
- [ ] `npm run build` gerou build com sucesso
- [ ] `npm run format:check` passou sem erros

### Boas práticas

- [ ] Nenhum dado pessoal (PII) exposto em logs ou `console.*`
- [ ] Código estruturado por domínio (`store`, `ops`, `auth`, `checkout`, `catalog`, `shared`)
- [ ] Erros de operações assíncronas tratados adequadamente

### CI

- [ ] Todos os checks de CI estão passando neste PR
