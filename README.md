# 📖 DevBurguer - Interface Front-End

Esta é a **interface front-end** do projeto **DevBurguer**, originalmente desenvolvido por Rodolfo Mori. Ela fornece a parte visual e interativa da aplicação, permitindo que os usuários façam pedidos e que o administrador gerencie os produtos e pedidos.

---

## 🛠️ Tecnologias usadas

* **React.js** — Biblioteca JavaScript para criação da interface.
* **Styled-Components** — Para estilização com CSS-in-JS.
* **Axios** — Cliente HTTP para consumir a API Backend.
* **React Router** — Para navegação entre páginas.
* **React Icons** — Ícones prontos para uso.
* **Yarn** — Gerenciador de dependências.

---

## 📂 Estrutura de pastas

```
project-root/
├─ public/            # Arquivos estáticos e index.html
├─ src/
│  ├─ assets/         # Imagens e assets
│  ├─ components/     # Componentes reutilizáveis
│  ├─ contexts/       # Contexts globais (ex.: Carrinho, Auth)
│  ├─ hooks/          # Hooks customizados
│  ├─ pages/          # Páginas da aplicação
│  ├─ routes/         # Configuração de rotas
│  ├─ services/       # Serviços e chamadas HTTP (Axios)
│  ├─ styles/         # Estilos globais e temas
│  ├─ App.jsx         # Componente principal
│  └─ main.jsx        # Ponto de entrada da aplicação
├─ package.json
├─ yarn.lock
└─ README.md
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

* **Node.js** instalado
* **Yarn** instalado
* API Backend em execução em [http://localhost:3000](http://localhost:3000)

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielDevelop777/devburguer-frontend.git
   cd devburguer-frontend
   ```
2. Instale as dependências:

   ```bash
   yarn install
   ```
3. Configure as variáveis de ambiente no arquivo `.env` (caso necessário):

   ```env
   VITE_API_URL=http://localhost:3000
   ```
4. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```
5. Acesse a interface em:
   [http://localhost:5173/](http://localhost:5173/)

---

## 📜 Funcionalidades

✅ Login e cadastro de usuários
✅ Listagem e filtro de produtos
✅ Gerenciamento do carrinho de compras
✅ Finalização do pedido
✅ Área administrativa para gerenciar produtos e pedidos

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, correções e novos recursos!

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

💻 Feito com ❤️ por \[Gabriel]
