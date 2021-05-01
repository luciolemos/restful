# Hey! 👤

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/luciolemos)](https://github.com/luciolemos)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucio-lemos-a550441a1/)](https://www.linkedin.com/in/lucio-lemos-a550441a1/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/lucciolemos)](https://twitter.com/lucciolemos)
[![Youtube Badge](https://img.shields.io/badge/-YouTube-ff0000?style=flat-square&labelColor=ff0000&logo=youtube&logoColor=white&link=https://studio.youtube.com/channel/UCrNM1nr2nw0lSqMD10m6rLw)](#)

## RESTFUL 📌: 
### O que é REST?
REST significa _Representational State Transfer_. Em português, significa: Transferência de Estado Representacional. Trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas.
#### Boas práticas
- Verbos
- GET: receber dados de um resource;
- POST: enviar dados ou informações para serem processados por um resource;
- PUT: atualizar dados de um resource;
- DELETE: deletar um resource.

### Escopo do projeto RESTFUL 💻.
RESTFUL é um projeto-escola desenvolvido com React...
### Step by step 💻.
#### ✔️ Verificando a versão do _node.js_ instalada 📙:
Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation.

    luciolemos@dev:~/nextlevelweek/restful$ node -v
    v15.14.0
#### ✔️ Verificando a versão do yarn instalada 📙:
    luciolemos@dev:~/nextlevelweek/restful$ yarn -v
    1.22.10
#### ✔️ Verificando a versão do npm instalada 📙:
    luciolemos@dev:~/nextlevelweek/restful$ npm -version
    7.10.0
#### ✔️ Criando dentro de _nextlevelweek_, o diretório do projeto 📙:
    luciolemos@dev:~/nextlevelweek$ mkdir restful
   
#### ✔️ Entrando no diretório do projeto e criando os arquivos `server.js`, `data.json` e `readme.md` 📙:
    luciolemos@dev:~/nextlevelweek$ cd restful
    luciolemos@dev:~/nextlevelweek/restful$ touch server.js data.json readme.md
    
#### ✔️ Verificando os arquivos criados em restful_projects: 📙
    luciolemos@dev:~/nextlevelweek/restful$ ls -l
    total 0
    -rw-rw-r-- 1 luciolemos luciolemos 0 abr 25 19:47 data.json
    -rw-rw-r-- 1 luciolemos luciolemos 0 abr 25 19:47 readme.md
    -rw-rw-r-- 1 luciolemos luciolemos 0 abr 25 19:47 server.js

#### ✔️ Carregando o projeto no VSCode com `code .`📙:
    luciolemos@dev:~/nextlevelweek/restful$ code .

#### ✔️ Abrindo o terminal com `ctrl+j`.

#### ✔️ Iniciando com o _Yarn_ 📙:
    luciolemos@dev:~/nextlevelweek/restful$ yarn init -y
obs: nesse momento é gerado o arquivo "_package.json_", com o seguinte conteúdo: 
    
    {
    "name": "restful",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",                             
    }
#### ✔️ Adicionando o express com `yarn add express` 📙:
    luciolemos@dev:~/nextlevelweek/restful$ yarn add express
Obs; o comando acima adicionará ao arquivo "_package.json_", a seguinte dependência:

    ...
    "dependencies": {
    "express": "^4.17.1"
    }
    ...
essa dependência criará na esrutura de diretórios do projeto o diretório "_node_modules_".

#### ✔️ Etrutura final do arquivo `package.json` 📙.
    {
    "name": "restful",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "dependencies": {
        "express": "^4.17.1"
    }
    }

#### ✔️ Importando para o `data.json`, [dados de exemplo](https://jsonplaceholder.typicode.com/users) 📙.
#### ✔️ Startando o servidor📙:
    luciolemos@dev:~/nextlevelweek/restful$ node server.js

