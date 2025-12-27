# Projeto - Busca Pet

O buscapet surgiu de um projeto acadêmico, o intuito de refazer esse projeto do zero é puramente experimantal, visando aprimorar minhas habilidades em desenvolvimento web e explorar novas tecnologias e práticas de desenvolvimento.

### Descrição

O Busca Pet é uma aplicação web desenvolvida para ajudar na localização de animais de estimação perdidos. A plataforma permite que usuários registrem informações sobre seus pets desaparecidos, incluindo fotos, descrições e locais onde foram vistos pela última vez. Outros usuários podem visualizar esses registros e ajudar na busca compartilhando informações ou reportando avistamentos.

### Áreas do Projeto

- **Frontend**: Desenvolvido com Next.js
- **Backend**: Construído com Node.js, TypeScript e Express ([nesse repositorio](https://github.com/israelsouza/busca-pet-back))
- **Banco de Dados**: Utiliza PostgreSQL containerizado com Docker, gerenciado através do Sequelize ORM
- **Hospedagem**: Planejado para deploy nas plataformas: Vercel (frontend) e Railway (backend)

### Tecnologias Instaladas

| Tecnologia/Área        | Antes    | Agora                            |
| ---------------------- | -------- | -------------------------------- |
| Estilização            | CSS Puro | Tailwind CSS                     |
| Qualidade de Código    | N/A      | ESLint + Prettier + editorconfig |
| Gerenciador de pacotes | NPM      | Yarn                             |

### Estrategia de branching (Git)

- `main`: Branch principal contendo o código estável e pronto para produção.
- `develop`: Branch de desenvolvimento onde novas funcionalidades são integradas antes de serem mescladas na `main`.
- `feature/nome-da-feature`: Branches para desenvolvimento de novas funcionalidades específicas.
- `hotfix/nome-do-hotfix`: Branches para correções rápidas de bugs na branch `main`.
- `release/nome-da-release`: Branches para preparar uma nova versão para produção, incluindo testes e ajustes finais.

### Instalação

1. Clone o repositório:
2. Utilize a mesma versão do Node.js especificada no arquivo `.nvmrc` com o comando:

   ```
   nvm use

   # caso não tenha a versão instalada, utilize:

   nvm install
   ```

3. Instale as dependências:
   ```bash
   yarn install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

### Estrutura de arquivos e pastas

```
busca-pet-front/
├── public/             # Arquivos estáticos (imagens, fontes, etc.)
├── src/
│   ├── app             # Páginas do Next.js
├── .editorconfig       # Configuração do EditorConfig
|── .gitignore          # Arquivos e pastas ignorados pelo Git
├── .nvmrc              # Versão do Node.js utilizada no projeto
├── .prettierignore     # Arquivos e pastas ignorados pelo Prettier
├── .prettierrc         # Configuração do Prettier
├── eslint.config.mjs   # Configuração do ESLint
├── next-env.d.ts       # Tipagens do Next.js
├── next.config.ts      # Configuração do Next.js
|── notes.md            # Notas, informações adicionais e ideias para o projeto
├── package.json        # Dependências e scripts do Node.js
├── postcss.config.mjs  # Configuração do PostCSS
|── README.md           # Documentação do projeto
├── tsconfig.json       # Configuração do TypeScript
├── yarn.lock           # Versões exatas das dependências

```

### Observações

- Devido a hospedagem gratuita limitada, o backend pode demorar alguns instantes para "acordar" após um período de inatividade.
- O projeto está em constante evolução, e novas funcionalidades podem ser adicionadas no futuro.
- Feedbacks e contribuições são bem-vindos!
