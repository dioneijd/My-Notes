# API INFORMATION



## METHODS
### GET
    Buscar informações

### POST
    Para criar uma nova informar. exemplo cadastrar um novo usuarios

### PUT
    Atualizar uma informação. Exemplo atualizar o cadastro de um usuario

### DELETE
    Deletar uma informação


---
## Request Types

### Query
> http://localhost:3333/users?idade=20

    Acessar query params, ou seja, paramentro que vem na url
    Até o users é a rota, idade é nome do paramentro e 20 é o valor
    Esse metodo é muito utilizado para filtros
    Ver exemplo GET 3

#### Examples

---

### Params

> http://localhost:3333/users/10

    Acessar route params, ou seja, valores que são enviados na url, porem fazer parte da rota
    Até o 10 é a rota, porem o 10 é uma rota "dinamica"
    Esse metodo é muito utilizado para edição e delete 
    Ver exemplo POST 2 e PUT 1


---





### Body
> Exemplo: http://localhost:3333/users

    Acessar o corpo da requisição, ou seja, esse informação vem incapsulada, não é visivel na url
    Somete tem a rota na url
    Esse metodo é mais utilizado para criação e edição

---

## EXAMPLES

SERVER
```js
const express = required('express')
const app = express()

app.listen(3333)
```
---

GET 1
```js
app.get('/', (req,res) => {
    return res.send('Hello World')
})
```

GET 2
```js
app.get('/', (req,res) => {
    return res.json({ message: "Hello World" })
})
```

GET 3
```js
app.get('/users', (req,res) => {
    return res.json({ message: req.query.idade })
})
```
---

POST 1
```js
app.post('/users', (req,res) => {
    return res.json({ message: "Hello World" })
})
```

POST 2
```js
app.post('/users/:idade', (req,res) => {
    return res.json({ message: req.params.idade })
})
```

POST 3
```js
app.post('/users', express.json(), (req,res) => {
    return res.json(req.body)
})
```
> Como o body já é um json, pode retornar ele mesmo
mas, como o express não entende json, precisa passar mais o comanda express.json() após a rota

---

PUT 1
```js
app.put('/users/:id', (req,res) => {
    return res.json({ id: req.params.id })
})
```

---

## TIPS
> As rotas sempre em inglês e no plural