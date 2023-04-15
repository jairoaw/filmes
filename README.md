## Front-end
● Dividir a aplicação em componentes React
● Utilizar estados com React Hooks
● Fazer o gerenciando rotas com React Router (deve ter pelo menos 2 rotas)
● Acessar uma API com o Axios

## Back-end
● Criar uma API RESTful usando o Node.js e o Express.js
● Fazer a persistência de dados com o MongoDB (podem usar o mongoose)
Desenvolva o backend em Node com as funcionalidades necessárias para que possa ser integrado
com sua aplicação React.
OBS: Faça um pequeno vídeo (cujo link deve ser compartilhado em um arquivo de texto) explicando
rapidamente o funcionamento deste aplicativo. Isso irá ajudar nos testes de sua aplicação. Como
sugestão, veja os softwares ApowerMirror e OBS Studio


### Roteiro de instalação e execução

### Backend (contem o código do servidor node.js)

criar a pasta do projeto "filmes";

entrar na pasta filmes;

criar a pasta backend;

entrar na pasta backend;

iniciar o projeto: 
~~~javascript
npm init -y
~~~

instalar mongoose, express e cors: 
~~~javascript
npm i express mongoose cors
~~~

instalar nodemon em modo global: 
~~~javascript
npm i -g nodemon
~~~
adicionar "ES6 Module Syntax" no arquivo package.json: "type": "module",

criar o index.js que contem as informações dos pacotes e da conexao com o banco mongodb;

#### Criação das rotas

criar a pasta routes;

entrar na pasta routes;

criar o arquivo FilmeRoute.js

#### Criação do model

"O Schema permite definir os campos armazenados em cada documento, junto com seus requisitos de  validação e valores padrão"

criar a pasta models;

entrar na pasta models;

criar o arquivo FilmeModel.js

#### Criação do controller

"Um Controller irá coordenar as ações referentes à esse Model."

criar a pasta controllers;

entrar na pasta controllers;

criar o arquivo FilmeController.js

iniciar o servidor na porta 5000: entrar na pasta backend (onde está o index.js) e executar no terminal: 
~~~ javascript
nodemon index
~~~

Se estiver rodando, aparecerá no terminal: 
_"Exemplo de aplicativo ouvindo a porta 5000"
"conectado no banco..."_

##################################################################################################################################

### Frontend

entrar na pasta filmes;

criar a pasta frontend

entrar na pasta frontend

criar o projeto: 
~~~ javascript
npx create-react-app frontend
~~~

instalar dependencias: 
~~~ javascript
npm i react-router-dom axios bulma
~~~
(bulma css)

iniciar o projeto: (irá abrir o navegador na porta default 3000)
~~~ javascript
npm start
~~~

#### Criação dos componentes

criar a pasta src/components;

entrar na pasta src/components;

criar o arquivo AddFilme.js (adicionar filmes);

criar o arquivo ListFilme.js (listar filmes);

criar o arquivo EditFilme.js (editar filmes);

configurar App.js em frontend/src com as rotas para HOME, ADD e EDIT

#### Testes

adicionar, editar, listar e deletar está funcionando (se a conexão com o mongodb atlas estiver ok);

Botão "Home" vai pra tela inicial;

Botão "Adicionar novo" abre um formulário para cadastrar;

Botão "Editar" abre um formulário para editar;
