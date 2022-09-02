## Configurações

**Iniciar novo servidor**

- [x] localhost:7777
    - [x] Validar funcionamento
- [x] Instalação do nodemon como dependência de desenvolvimento
    - [x] Validar funcionamento


## Análise de requisitos

**Requisitos funcionais**
O que a aplicação deve permitir fazer

- [ ] Cadastrar um novo produto
- [ ] Atualizar os dados do produto
- [ ] Obter dados do produto
- [ ] Realizar inclusão no saldo do produto
- [ ] Realizar retirada no saldo do produto
- [ ] Buscar o saldo do produto
- [ ] Buscar saldo do produto por data
- [ ] Deletar um produto


**Cadastra do produtos**

product = {
    ncm,
    name,
    movements
}

- [x] Criar rota com método POST para receber um novo cadastro;
- [x] Configurar requisição no Insomnia;
- [x] Fazer teste de novo cadastro adicionando o body na requisição.

**Validação do produto**

- [ ] Não permitir cadastro de produto com o mesmo NCM


**Regras de negócio**
O que a aplicação não deve permitir fazer

- [ ] Cadastrar um produto com o mesmo NCM
- [ ] Realizar inclusão no saldo do produto não existente
- [ ] Realizar retirada no saldo do produto não existente
- [ ] Realizar retirada quando o saldo do produto for insuficiente
- [ ] Buscar saldo do produto não existente
- [ ] Deletar um produto não existente

