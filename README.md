Segue a versão revisada com a seção de autores antes da licença:

---

# Controle de Tarefas e Produtividade

Este é um projeto de backend para um sistema de **controle de tarefas e produtividade**, usando **Node.js**, **Express**, **Sequelize**, e **MySQL**. O sistema permite a criação, leitura, atualização e exclusão de tarefas, bem como a categorização das mesmas e gerenciamento de usuários.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js para gerenciar rotas e middlewares.
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com bancos de dados relacionais.
- **MySQL**: Banco de dados relacional.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização de usuários.
- **dotenv**: Carrega as variáveis de ambiente.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

Além disso, se você estiver usando variáveis de ambiente, o pacote `dotenv` é necessário.

## Como Baixar o Repositório

Clone o repositório para a sua máquina local com o comando:

```bash
git clone https://github.com/seu-usuario/controle-de-tarefas-e-produtividade.git
cd controle-de-tarefas-e-produtividade
```

Em seguida, instale as dependências:

```bash
npm install
```

## Como Contribuir

1. **Fork** o repositório.
2. Crie uma nova **branch**:
   ```bash
   git checkout -b nome-da-sua-branch
   ```
3. Faça suas alterações.
4. Commit suas alterações:
   ```bash
   git commit -m "Descrição das alterações"
   ```
5. **Push** para a sua branch:
   ```bash
   git push origin nome-da-sua-branch
   ```
6. Crie um **pull request** para o repositório original.

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte forma:

```
controle_de_tarefas_e_produtividade/
├── controllers/
│   ├── categoriaController.js       # Controlador para categorias
│   ├── tarefaController.js          # Controlador para tarefas
│   └── usuarioController.js         # Controlador para usuários
├── middleware/
│   └── authMiddleware.js            # Middleware para autenticação
├── models/
│   ├── categoria.js                 # Modelo para categorias
│   ├── tarefa.js                    # Modelo para tarefas
│   ├── usuario.js                   # Modelo para usuários
│   └── index.js                     # Configuração do Sequelize
├── routes/
│   ├── categoriaRoutes.js           # Rotas para categorias
│   ├── tarefaRoutes.js              # Rotas para tarefas
│   ├── usuarioRoutes.js             # Rotas para usuários
│   ├── db.js                        # Configuração do banco de dados
│   └── index.js                     # Arquivo principal de rotas
├── tasksdocs/                        # Pasta para documentação
│   ├── Models/                      # Subpasta para modelos
│   │   └── Brainstorm Mapa Mental Minimalista Bege - Back-end.png
│   ├── UseCase/                     # Subpasta para casos de uso
│   │   └── Back-end-Casos-de-uso.pdf
│   ├── Fluxo_de_Trabalho.pdf         # PDF do fluxo de trabalho
│   ├── Ferramentas_Bibliotecas_Frameworks.pdf # PDF de ferramentas
│   └── Tutorial_de_Contribuicao.pdf  # PDF do tutorial de contribuição
├── .env                              # Variáveis de ambiente
├── CONTRIBUTING.md                   # Diretrizes de contribuição
├── .gitignore                        # Configuração de exclusões do Git
├── LICENSE                           # Arquivo de licença
├── package-lock.json                 # Bloqueio de dependências
├── package.json                      # Configuração do NPM
└── README.md                         # Documento principal do projeto
```

## Configuração do Projeto

### 1. Configure o Banco de Dados

Antes de iniciar a aplicação, crie um banco de dados no MySQL e adicione suas credenciais ao arquivo `.env`.

Exemplo de configuração no `.env`:

```env
MYSQL_DATABASE=controle_de_tarefas
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_HOST=localhost
JWT_SECRET=seu-segredo-jwt
PORT=3000
```

### 2. Crie o Banco de Dados

Crie o banco de dados no MySQL:

```bash
mysql -u root -p
CREATE DATABASE controle_de_tarefas;
```

### 3. Execute as Migrations

Após configurar o banco de dados, execute as migrations para criar as tabelas:

```bash
npx sequelize-cli db:migrate
```

### 4. Inicie o Servidor

Agora, você pode iniciar o servidor com o seguinte comando:

```bash
npm start
```

O servidor será iniciado na porta 3000 (ou a porta configurada no arquivo `.env`).

## Documentação

Abaixo estão os documentos que detalham os diferentes aspectos do projeto, disponíveis na pasta [tasksdocs](./tasksdocs/):

- [Mapa Mental do Fluxo de Trabalho](./tasksdocs/Models/Brainstorm%20Mapa%20Mental%20Minimalista%20Bege%20-%20Back-end.png)
- [Ferramentas, Bibliotecas e Frameworks](./tasksdocs/Ferramentas_Bibliotecas_Frameworks.pdf)
- [Casos de Uso](./tasksdocs/UseCase/Back-end-Casos-de-uso.pdf)
- [Tutorial de Contribuição](./tasksdocs/Tutorial_de_Contribuicao.pdf)

### Mapa Mental do Fluxo de Trabalho - visualização

![Mapa Mental do Fluxo de Trabalho](./tasksdocs/Models/Brainstorm%20Mapa%20Mental%20Minimalista%20Bege%20-%20Back-end.png)

## Autores

- **Ana**
- **Arthur**
- **Emma**
- **Luiza**
- **Matheus**

## Licença

Este projeto está licenciado sob a Licença **Creative Commons**. Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).

---