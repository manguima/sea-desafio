# SEA DESAFIO

Espero que esteja lendo este README

## 📦 Como usar e instalar

Siga as etapas abaixo para configurar o projeto em sua máquina local:

1. Clone o repositório

```bash
  git clone https://github.com/manguima/sea-desafio
```

2. Entre no diretório do projeto

```bash
  cd sea-desafio
```

3. Instale as dependências

```bash
  npm install
```

4. Inicie o ambiente de desenvolvimento

```bash
  npm run dev
```

## 🚀 Principais Tecnologias

Este projeto utiliza as seguintes tecnologias e ferramentas:

- React com Next.js
- Ant Design para a interface de usuário
- Redux Toolkit para gerenciamento de estado
- JSON Server como API simulada
- TailwindCSS para estilização
- TypeScript para tipagem estática

## 📂 Estrutura de pastas usada

### Você moraria em um prédio que não tem uma boa fundação ?

Adotei a estrutura de pastas do próprio Next, acredito que é uma ótima opção para todo tipo de Framework ou linguagem, onde o diretório app/ organiza as rotas de forma declarativa e modular. Cada subpasta no app/ representa uma rota, com arquivos como layout.tsx para layouts compartilhados e page.tsx para páginas individuais. Rotas dinâmicas, como [id], permitem criar páginas baseadas em parâmetros. Essa organização facilita a criação de hierarquias de rotas e reaproveitamento de layouts, tornando o desenvolvimento mais eficiente e intuitivo.

Complementando o app/, o diretório src/ centraliza a lógica e recursos reutilizáveis, como chamadas de API, componentes, hooks personalizados e gerenciamento de estado com Redux.

Arquivos de configuração (.env, package.json, etc.) e o diretório public/ para recursos estáticos completam a estrutura, que é projetada para ser escalável e fácil de manter, permitindo adicionar novas funcionalidades sem comprometer a organização geral do projeto.

Estrtura resumida:

```
sea-desafio/
├── app/                          # Diretório principal do App Router
│   ├── em-breve/                 # Página "/em-breve"
│   ├── funcionario/              # Rota "/funcionario"
│   │   ├── adiciona/             # Página "/funcionario/adiciona"
│   │   ├── lista/                # Página "/funcionario/lista"
│   │   └── [id]/                 # Rota dinâmica "/funcionario/:id"
├── src/                          # Lógica do aplicativo e componentes
│   ├── api/                      # Chamadas de API
│   ├── components/               # Componentes reutilizáveis
│   │   ├── default/              # Componentes genéricos
│   │   └── employee/             # Componentes específicos para funcionários
│   ├── redux/                    # Gerenciamento de estado com Redux
│   ├── hooks/                    # Hooks personalizados
│   ├── styles/                   # Arquivos de estilo global
│   └── types/                    # Tipos TypeScript compartilhados
├── public/                       # Arquivos públicos (imagens, ícones)
├── .github/                      # Configuração de workflows do GitHub
├── .husky/                       # Configuração de hooks do Git
├── .env                          # Variáveis de ambiente
├── package.json                  # Dependências e scripts do projeto
└── tsconfig.json                 # Configuração do TypeScript
```
