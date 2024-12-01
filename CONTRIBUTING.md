# Como Contribuir para o Projeto

Obrigado por seu interesse em contribuir para o nosso projeto! Siga as instruções abaixo para configurar o ambiente de desenvolvimento e enviar suas contribuições.

## Descrição do Projeto

Este é um projeto de backend para um sistema de **controle de tarefas e produtividade**, desenvolvido utilizando **Node.js**, **Express**, **Sequelize** e **MySQL**. O sistema permite o gerenciamento de tarefas e produtividade, com funcionalidades como criação, leitura, atualização e exclusão de tarefas, categorização de tarefas, e gerenciamento de usuários.

## Como Baixar o Repositório

Para começar a trabalhar no projeto, siga os passos abaixo:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/controle-de-tarefas-e-produtividade.git
    cd controle-de-tarefas-e-produtividade
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configure o banco de dados** (certifique-se de que o MySQL esteja instalado e configurado em sua máquina):
    - Crie um banco de dados chamado `controle_de_tarefas`.
    - Configure as credenciais do banco de dados no arquivo `.env`.

    Exemplo de configuração no `.env`:
    ```env
    MYSQL_DATABASE=controle_de_tarefas
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_HOST=localhost
    JWT_SECRET=seu-segredo-jwt
    PORT=3000
    ```

## Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

Além disso, é necessário o pacote `dotenv` para carregar as variáveis de ambiente.

## Como Contribuir

1. **Crie uma nova branch** para a sua contribuição:
    ```bash
    git checkout -b nome-da-sua-branch
    ```

2. **Faça suas alterações** no código e adicione testes se necessário.

3. **Commit suas mudanças**:
    ```bash
    git add .
    git commit -m "Descrição das suas alterações"
    ```

4. **Suba as mudanças para o seu repositório forked**:
    ```bash
    git push origin nome-da-sua-branch
    ```

5. **Abra um Pull Request**:
    - No GitHub, vá para a página do repositório original e clique em "New Pull Request".
    - Compare a sua branch com a branch `dev` e adicione uma descrição do que foi feito.
    - Clique em "Create Pull Request".

## Dicas para Contribuições

- Siga as boas práticas de código e mantenha a consistência do projeto.
- Escreva testes para garantir que as funcionalidades estão funcionando corretamente.
- Se possível, adicione a documentação para qualquer novo recurso ou alteração significativa.

## Fluxo de Trabalho

O fluxo de trabalho do repositório segue o modelo de desenvolvimento baseado em **branches**. A cada nova funcionalidade ou correção, crie uma nova **branch**, desenvolva as alterações e, após testar, crie um **pull request** para o `main` branch.

Abaixo, você pode ver o mapa mental que ilustra o fluxo de trabalho:

![Mapa Mental do Fluxo de Trabalho](./tasksdocs/Models/Brainstorm%20Mapa%20Mental%20Minimalista%20Bege%20-%20Back-end.png)


Agradecemos sua contribuição!
