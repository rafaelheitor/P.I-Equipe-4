# Pet&Cia

# Introdução

Este projeto foi construído ao longo do curso de Desenvolvimento Web Full Stack na escola Digital House sendo o projeto integrador. Utilizando o padrão de arquitetura MVC.

As tecnologias utilizadas foram:

**Node.js**
**React.js**
**SQL**

No Backend utilizamos as seguintes bibliotecas:

**Express.js**
**Sequelize ORM**
**CORS**
**Bcrypt**
**Mysql 2**
**JsonWebToken**

No Frontend utilizamos:

**React.js**
**Axios**
**React-router-dom**
**React-toastify**
**jwt-decode**

# Rodando o projeto

Antes de executar o projeto, precisamos criar um arquivo config.env, dentro da pasta /backend/config
precisaremos definir as seguintes variáveis de ambiente:

> Nota: Se preferir utilizar o Docker, as credenciais do banco de dados encontram-se no arquivo `.env` exemplificados abaixo após o simbolo "Ou" ||

1. PORT= porta que o projeto vai executar || 4000
2. DB_HOST= nome do host do banco de dados || db
3. DB_DATABASE= nome do banco de dados || sqlpi
4. DB_USER= usuario do banco de dados || root
5. DB_PASSWORD= senha do banco de dados || root
6. DB_PORT= porta do banco de dados || 3306
7. JWT_SECRET = Segredo para criar e verificar o token JWT
8. JWT_EXPIRES_TIME = tempo de expiração do token
9. COOKIE_EXPIRES_TIME = tempo de expiração do cookie

Para executar o projeto temos duas opções:

### Utilizar o Docker ou Rodar localmente

## Docker

Para rodar o projeto através do Docker, primeiro voce deve substituir o script start do package.json dentro da pasta /frontend
deixando-o assim :

"start": "react-scripts --openssl-legacy-provider start"

> Nota: `--openssl-legacy-provider` se faz necessário para executar o react dentro do container.

Feito isso, abra o terminal, navegue até a pasta raiz do projeto e execute o comando:

```sh
docker compose up
```

Tome um café e aguarde enquanto o Docker cria o ambiente com os serviços necessários e executa os scripts, instala as dependências, cria o banco, cria as tabelas, popula o banco de dados e inicia o projeto.

```sh
O frontend estará disponível em: http://localhost:3000/
```

> Nota: Caso os scripts do backend não executem, navegue até /backend abra o arquivo docker-entrypoint.sh
> Observe na barra de status inferior do seu editor de códigos e verifique o End line sequence.
> Se estiver em CLRF mude para LF. Isso deve fazer o shell script rodar normalmente.

# Execução local

> Para executar o projeto localmente é necessário preparar os servicos. Para o backend, certifique-se que está dentro da pasta /backend você deve instalar as depêndencias, criar o banco de dados, criar as tabelas através das migrations, popular o banco de dados com informações de produtos e inicar o servidor.

```sh
1 - npm i ou npm install
2 - npm run db:create
3 - npm run db:migrate
4 - npm run seeder
5 - npm start
```

> Para rodar o frontend
> Abra outro terminal, certifique-se que está na pasta raiz do projeto e navegue até /frontend e execute os comandos:

```sh
1 - npm i ou npm install
2 - npm start
```

```sh
O frontend estará disponível em: http://localhost:3000/
```
