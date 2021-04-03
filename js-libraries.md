
# JS LIBRARIES

These are the main js libraries I commolly use in the projects.


## Yarn

- Gerenciador de dependecias. Tem o mesmo proposito que o NPM
- https://yarnpkg.com/

```
choco install yarn
```
```
yarn init -y
```
> TIP: Quando colocar -D no final instalar a biblioteca como dependencia de desenvolvimento




## Express

- https://expressjs.com
```
yarn add express
```
### Code Example

```js
const PORT = 3333
const express = require('express')
const app = express()


app.listen(PORT, () => console.log(`Server listing on port ${PORT}`))
```


---

## Nodemon
Utilizado para reiniciar o serviço automaticamente quando salvar
```
yarn add nodemon -D
```

- add follow code on package.json
```json
  "scripts": {
    "dev": "nodemon src/server.js"
  },
```

---

## Mongoose
Biblioteca para o mongoDB
- https://mongoosejs.com
```
yarn add mongoose
```

### Code example
~~~js
const mongoose = require('mongoose')

mongoose.connect('<<MONGO_URL>>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
~~~
---


## Multer
- É uma biblioteca que automatiza o processo de upload de arquivos e tambem permite receber arquivos por requezição json
```
yarn add multer
```
---

## Sharp 

- Utilizado para manipular as imagens. Exemplo alterar o tamanho e qualidade.
```
yarn add sharp
```
---


## Cors

```
yarn add cors
```

---

## Socket.io

```
yarn add socket.io
yarn add socket.io-client
```

### Code example
```js
var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)


io.on('connection', socket => {
    console.log(`> user connected. ID: ${socket.id}`)

    socket.emit('socketID', {id: socket.id})

    
    socket.on('disconnect', () => 
        console.log(`> user disconneted. ID: ${socket.id}`)
    )

}

http.listen(port, () => console.log(`Server running and listening on port: ${port}`));
```

---

## Path

- Biblioteca nativa do node.js, otima para definir a os caminhos das pastas, não importa se a aplicação está rodando em windows ou linux
- __dirname: path do local do arquivo em o comando está sendo inserido
- '..' : volta um nivel na pasta

### Code example

```js
var path = require('path')
path.join(__dirname, 'public')
path.join(__dirname, '..', 'src', 'components')
```
---

## File system - fs
- Biblioteca nativa do node.js, manipular os arquivos.
- unlinkSync('path + filename'): apaga o arquivo

### Code Example
```js
const fs = require('fs')
const contentFilePath = './content.json'

fs.readFileSync(contentFilePath, 'utf-8')

fs.writeFileSync(contentFilePath, 'text to write')
```
---

## React
```
yarn create react-app <my-project-name> --template=typescript
```
---
## React Router Dom
```
yarn add react-router-dom
```
---
## Nextjs
```
yarn create next-app <my-project-name>
```

- pode deletar as pastas:  styles e pages >> api
- pode deletar os arquivos: public >> favicon.ico e vercel.svg
- arquivo index.js pode remover todas as tags dentro do return e os imports
- renomear o arquivo index.js para index.tsx
- arquivo _app.js remover os imports e renomear o arquivo _app.js para _app.tsx


---
## Axios
```
yarn add axios
```
---
## Typescript
```
yarn add typescript -D
```
---
## Typescript types
```
yarn add @types/react -D
yarn add @types/react-dom -D
yarn add @types/node -D
yarn add @types/js-cookie -D

Check available types: https://github.com/DefinitelyTyped/DefinitelyTyped
```


