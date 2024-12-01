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

3. **Configure o banco de dados**:
    - Crie um banco de dados chamado `controle_de_tarefas`.
    - Configure as credenciais no arquivo `.env`.

    Exemplo de configuração:
    ```env
    MYSQL_DATABASE=controle_de_tarefas
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_HOST=localhost
    JWT_SECRET=seu-segredo-jwt
    PORT=3000
    ```

## Como Contribuir

1. **Crie uma nova branch**:
    ```bash
    git checkout -b nome-da-sua-branch
    ```

2. **Faça suas alterações** e teste-as localmente.

3. **Commit suas mudanças** (recomendamos mensagens claras e informativas):
    ```bash
    git add .
    git commit -m "feat: Descrição do recurso ou correção"
    ```

4. **Suba as mudanças**:
    ```bash
    git push origin nome-da-sua-branch
    ```

5. **Abra um Pull Request**:
    - Compare a sua branch com a branch `main` ou `dev`.
    - Inclua uma descrição clara do que foi feito.
    - Exemplo de descrição:
        ```markdown
        ## Descrição
        - Implementado CRUD para categorias
        - Criados testes para validação de entradas

        ## Issues relacionadas
        - Resolves #12
        ```

## Dicas para Contribuições

- Siga as boas práticas de código e mantenha a consistência.
- Escreva testes para garantir que suas alterações não introduzam novos bugs.
- Atualize a documentação (quando necessário) para incluir novas funcionalidades.

## Documentação de Suporte

Antes de contribuir, consulte os seguintes documentos na pasta [tasksdocs](./tasksdocs/):

- [Mapa Mental do Fluxo de Trabalho](./tasksdocs/Models/Brainstorm%20Mapa%20Mental%20Minimalista%20Bege%20-%20Back-end.png)
- [Tutorial de Contribuição](./tasksdocs/Tutorial_de_Contribuicao.pdf)
- [Casos de Uso](./tasksdocs/UseCase/Back-end-Casos-de-uso.pdf)
- [Ferramentas, Bibliotecas e Frameworks](./tasksdocs/Ferramentas_Bibliotecas_Frameworks.pdf)

## Licença

Este projeto está licenciado sob a Licença **Creative Commons**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

Agradecemos sua contribuição! 😊