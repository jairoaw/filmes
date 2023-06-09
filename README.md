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


#####################################################################################

### Demonstração do funcionamento

https://youtu.be/e2si2dj6UW0
### Publicado em:

https://filmes-git-main-jairoaw.vercel.app/

#####################################################################################
### Roteiro de instalação e execução:

### Backend (contem o código do servidor node.js)

1- Usando PowerShell do Windows, criar a pasta do projeto "filmes";

2- entrar na pasta filmes;

3- criar a pasta backend;

4- entrar na pasta backend;

5- iniciar o projeto: 
~~~javascript
npm init -y
~~~

6- instalar mongoose, express e cors: 
~~~javascript
npm i express mongoose cors
~~~

7- instalar nodemon em modo global: 
~~~javascript
npm i -g nodemon
~~~

8- adicionar "ES6 Module Syntax" no arquivo package.json: "type": "module",

9- criar o index.js que contem as informações dos pacotes e da conexao com o banco mongodb;

#### Criação das rotas:

10- Usando PowerShell do Windows, criar a pasta backend/routes;

11- entrar na pasta routes;

12- criar o arquivo FilmeRoute.js

#### Criação do model:

"O Schema permite definir os campos armazenados em cada documento, junto com seus requisitos de  validação e valores padrão"

13- criar a pasta backend/models;

14- entrar na pasta models;

15- criar o arquivo FilmeModel.js

#### Criação do controller

"Um Controller irá coordenar as ações referentes à esse Model."

16- criar a pasta backend/controllers;

17- entrar na pasta controllers;

18- criar o arquivo FilmeController.js

19- iniciar o servidor na porta 5000: entrar na pasta backend (onde está o index.js) e executar no terminal do PowerShell: 
~~~ javascript
nodemon index
~~~

Se estiver rodando, aparecerá no terminal:

"Aplicativo ouvindo na porta 5000"

"conectado no banco MongoDB Atlas..."

#####################################################################################

### Frontend

1- Usando o PowerShell, entrar na pasta filmes;

2- criar a pasta frontend

3- entrar na pasta frontend

4- criar o projeto: 
~~~ javascript
npx create-react-app frontend
~~~

5- instalar dependencias: 
~~~ javascript
npm i react-router-dom axios bulma
~~~
(bulma css)

6- iniciar o projeto: (irá abrir o navegador na porta default 3000)
~~~ javascript
npm start
~~~

#### Criação dos componentes

7- criar a pasta frontend/src/components;

8- entrar na pasta src/components;

9- criar o arquivo AddFilme.js (adicionar filmes);

10- criar o arquivo ListFilme.js (listar filmes);

11- criar o arquivo EditFilme.js (editar filmes);

12- configurar App.js em frontend/src com as rotas para HOME, ADD e EDIT

#### Testes

adicionar, editar, listar e deletar está funcionando (se a conexão com o mongodb atlas estiver ok);

Botão "Home" vai pra tela inicial;

Botão "Adicionar novo" abre um formulário para cadastrar e já preenche ocom valores default de título, Sinopse, url_capa, data de lançamento, genero e um link do youtube;


Botão "Editar" abre um formulário para editar;
