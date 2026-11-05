# Voice of Eshu — Landing Page

Landing page do curso **Voice of Eshu**.

## Stack

- **React 19 + TypeScript + Vite** (yarn)
- **styled-components** — estilos co-localizados em `styles.ts`, tema tipado
- **motion** — reveal on scroll
- **react-router** — rota `/`
- **Radix UI Accordion** — FAQ
- **lucide-react** — ícones
- **polished** / **usehooks-ts** — utilitários
- **@react-native-async-storage/async-storage** — preferência dark/light

## Tema

- Toggle no header do hero (sol/lua)
- Paletas `dark` e `light` em `src/styles/themes/colors.ts`
- Preferência salva em AsyncStorage na chave `@eshu/theme-mode`

## Scripts

```sh
yarn dev      # http://localhost:5173/eshu-lp/
yarn build    # tsc -b && vite build
yarn lint
```

## GitHub Pages

Site: `https://anacarlapaiva.github.io/eshu-lp/`

1. Repo → **Settings → Pages → Source: GitHub Actions**
2. Merge/push na `main` (workflow `.github/workflows/deploy.yml`)

## Arquitetura

```
src/
  App.tsx, main.tsx        ThemeProvider + MotionConfig + RouterProvider
  routes/                  definição das rotas
  screens/Home             compõe as features
  features/<feature>/      uma pasta por seção da LP
    components/<Comp>/     index.tsx + styles.ts
    data/                  conteúdo
    index.ts               API pública
  components/              UI compartilhada + layout/
  styles/                  tokens, tema, GlobalStyles
  constants/               links e assets
```
