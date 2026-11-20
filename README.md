# Editor Markdown

Editor de Markdown com pré-visualização em tempo real: o texto digitado à esquerda é renderizado como HTML à direita, a cada tecla.

## Objetivo

Exercitar a comunicação entre componentes React — um estado único no componente pai, repassado para a área de edição e para a pré-visualização — usando uma biblioteca de renderização de Markdown.

## Funcionalidades

- Área de edição de texto com sintaxe Markdown.
- Pré-visualização renderizada instantaneamente com `react-markdown`.
- Layout responsivo: editor e pré-visualização lado a lado em telas grandes, empilhados em telas pequenas.

## Tecnologias

- React 18 + TypeScript
- Vite
- react-markdown
- React Router
- Tailwind CSS
- Deploy na Vercel (`vercel.json` com rewrite para SPA)

## Arquitetura

```
EditorMarkdown (estado: textoMarkdown)
 ├── AreaEdicao      → recebe o texto e a função aoMudar
 └── PreVisualizacao → recebe o texto e renderiza com react-markdown
```

O estado vive em `EditorMarkdown`; os filhos são componentes controlados e sem estado próprio.

## Estrutura de diretórios

```
editor-markdown/
└── src/
    ├── componentes/   # AreaEdicao, PreVisualizacao
    ├── paginas/       # EditorMarkdown
    ├── App.tsx
    └── main.tsx
```

## Como executar localmente

Pré-requisito: Node.js 18+.

```bash
git clone https://github.com/GuilhermeKaynam/editor-markdown.git
cd editor-markdown
npm install
npm run dev
```

Acesse `http://localhost:5173`. Não há variáveis de ambiente.

## Melhorias futuras

- Salvar o texto no `localStorage` para não perder o conteúdo ao recarregar.
- Exportar o resultado como arquivo `.md` ou `.html`.
- Barra de ferramentas para inserir formatação.
