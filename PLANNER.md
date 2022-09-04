## Configurações

**Iniciar novo servidor**

- [x] localhost:7777
    - [x] Validar funcionamento
- [x] Instalação do nodemon como dependência de desenvolvimento
    - [x] Validar funcionamento


## Análise de requisitos

**Requisitos funcionais**
O que a aplicação deve permitir fazer

- Cadastrar um novo produto
- Atualizar os dados do produto
- Obter dados do produto
- Realizar inclusão no saldo do produto
- Realizar retirada no saldo do produto
- Buscar o saldo do produto
- Buscar saldo do produto por data
- Deletar um produto

**Cadastra do produtos**

products = {ncm, name, movements}

- [x] Criar rota com método POST para receber um novo cadastro;
- [x] Configurar requisição POST no Insomnia;
- [x] Fazer teste de novo cadastro adicionando o body na requisição.

**Validação do produto**

- [x] Não permitir cadastro de produto com o mesmo NCM

**Atualizar os dados do produto**

- [ ] Criar rota com o método PUT para alteração de dados do produto, adicionar o NCM como parâmetro de identificação.
- [ ] Configurar requisição PUT no Insomnia;
- [ ] Fazer teste alterando o cadastro de um produto com o id especificado adicionando o body na requisição.

**Operações de estoque**

- [x] Criar entrada de saldo para um produto específico
- [ ] Criar retirada de saldo para um produto específico


**Buscar o saldo do produto**

- [x] Criar rota para obter o saldo do em estoque do produto através do movements

**Criar middleware para verificar se o produto existe**
Aplicação:

- [x] Buscar saldo apenas de produto existente


**Regras de negócio**
O que a aplicação não deve permitir fazer

- Cadastrar um produto com o mesmo NCM
- Realizar inclusão no saldo do produto não existente
- Realizar retirada no saldo do produto não existente
- Realizar retirada quando o saldo do produto for insuficiente
- Buscar saldo do produto não existente
- Deletar um produto não existente

