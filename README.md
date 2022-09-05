# Cadastro de Produtos com Node.js e Express.js
O objetivo deste projeto é consolidar o conhecimento adquirido no estudo de Node.js e Express.js.

## Tecnologias utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Javascript
- Node.js
- Express.js

## Sobre o Projeto
Trata-se do desenvolvimento de uma API REST que irá simular as principais operações realizadas através de um cadastro de produtos, com suas devidas validações:

**Operações**

- Cadastrar um novo produto;
- Alterar um produto existente;
- Adicionar saldo ao produto existente;
- Retirar saldo do produto existente;
- Excluir um produto existente

**Validações**

- Não é permitido cadastrar um produto existente;
- Não é possível alterar produto, consultar produto, consultar saldo, adicionar saldo, retirar saldo ou excluir um produto que não existe.

## Diagrama

![image](https://user-images.githubusercontent.com/65618765/188462914-e6010cd3-fba5-4e56-836a-d23f5724086c.png)

## Exemplos 

**Cadastrar produto**

![image](https://user-images.githubusercontent.com/65618765/188463369-79856823-f3f6-4f72-9cab-93ec9f8f45df.png)

**Visualizar produto e suas informações de estoque**

![image](https://user-images.githubusercontent.com/65618765/188463628-f1d06617-b37f-4dd6-82da-219efdc6a6fd.png)

## Como executar
- Clone o repositório;
- Instale as dependências;
- Inicie o servidor `npm run dev`;
- Acesse: `http://localhost:7777`

## O que aprendi
- Configurar servidor Node.js;
- Instalar dependências de desenvolvimento;
- Principais métodos HTTP;
- Configuração do Insomnia para simular funcionamento da API;
- Como aplicar validações.
