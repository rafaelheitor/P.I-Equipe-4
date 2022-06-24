Esse é o repositório do Projeto Integrador da equipe 4 do curso de desenvolvimento web Full Stack da Digital House!

Antes de executar o projeto, precisamos criar um arquivo config.env, dentro da pasta /backend/config
precisaremos definir as seguintes variáveis de ambiente:

PORT= porta que o projeto vai executar || 4000
DB_HOST= nome do host do banco de dados || db
DB_DATABASE= nome do banco de dados || sqlpi
DB_USER= usuario do banco de dados || root
DB_PASSWORD= senha do banco dde dados
DB_PORT= porta do banco de dados || 3306
JWT_SECRET = Segredo para criar e verificar o token JWT
JWT_EXPIRES_TIME = tempo de expiração do token
COOKIE_EXPIRES_TIME = tempo de expiração do cookie

Para executar o projeto temos duas opções:

Utilizar o Docker
Rodar localmente

Para rodar o projeto através do Docker, primeiro voce deve substituir o script start do package.json dentro da pasta /frontend
deixando-o assim :

"start": "react-scripts --openssl-legacy-provider start"

Feito isso, abra o terminal, navegue até a pasta raiz do projeto e execute o comando:

docker compose up

E só. Se sua máquina possuir o Docker instalado isto deve subir o banco de dados, backend, criar o banco sqlpi
criar as tabelas do projeto através das migrations, popular o banco de dados com produtos e iniciar o projeto.

Caso os scripts do backend não executem, navegue até /backend abra o arquivo docker-entrypoint.sh
Observe na barra de status inferior do seu editor de códigos e verifique o End line sequence.
Se estiver em CLRF mude para LF. Isso deve fazer o shell script rodar normalmente.

Localmente, precisamos primeiramente entrar na pasta backend e executar os comandos:

1 - npm i ou npm install
2 - npm run db:create
3 - npm run db:migrate
4 - npm run seeder
5 - npm start

Abra outro terminal, certifique-se que está na pasta raiz do projeto e navegue até /frontend e execute os comandos:

1 - npm i ou npm install
2 - npm start
