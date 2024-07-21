# Cineflex - Sistema de Compra de Ingressos

![Cineflex](https://mock-api.driven.com.br/api/v8/cineflex/movies)

## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuições](#contribuições)
- [Contato](#contato)

## Descrição do Projeto

O **Cineflex** é uma aplicação web desenvolvida para facilitar a compra de ingressos de cinema. A aplicação permite que os usuários escolham filmes, horários de exibição e assentos de forma interativa e prática. Este projeto demonstra habilidades em React, integração com APIs, roteamento e estilização com Styled Components.

## Funcionalidades

- Listagem de filmes em cartaz.
- Exibição dos horários de exibição dos filmes selecionados.
- Seleção de assentos disponíveis para uma sessão específica.
- Formulário para a compra dos ingressos.
- Página de confirmação de compra com detalhes do pedido.
- Navegação intuitiva entre as diferentes páginas da aplicação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Biblioteca para roteamento no React.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **Styled Components**: Biblioteca para estilização de componentes no React.
- **JavaScript (ES6+)**: Linguagem de programação utilizada.
- **HTML5**: Linguagem de marcação para estruturação das páginas.
- **CSS3**: Linguagem de estilo para a apresentação visual das páginas.

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou yarn (versão 1.22 ou superior)

### Passos para Instalação

1. Clone este repositório:
   git clone https://github.com/limbopath/ticket-booking.git

2. Navegue até o diretório:
   cd ticket-booking-driven

3. Instale as dependências do projeto:
   npm install

### Executando o Projeto

1. Inicie o servidor de desenvolvimento:
   npm start

2. Abra seu navegador e acesse:
   http://localhost:3000

## Estrutura do Projeto

```plaintext
cineflex/
│
├── public/
│   ├── index.html
│   └── assets/
│       └── logo.png
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Title.js
│   │   ├── AllMovies.js
│   │   ├── Sessions.js
│   │   ├── Seats.js
│   │   ├── OrderInfo.js
│   │   ├── Movie.js
│   │   ├── ShowtimeCard.js
│   │   └── Loading.js
│   │
│   ├── styles/
│   │   └── GlobalStyle.js
│   │
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
│
├── .gitignore
├── package.json
└── README.md

## Contato

Se você tiver alguma dúvida ou quiser entrar em contato, pode me encontrar em:

- Email: felipe.bms@hotmail.com
- LinkedIn: https://www.linkedin.com/in/felipe-barreto-876649184/
- GitHub: https://github.com/limbopath/

---

Obrigado por visitar este projeto! Se você gostou, por favor, deixe uma estrela no repositório e compartilhe com outras pessoas interessadas.
