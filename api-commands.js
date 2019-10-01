// Instalar o express: yarn add express

const express = required('express')

const app = express()
const server = require('http').Server(app)

const routes = new express.Router()

app.use(routes)


// GET, POST, PUT, DELETE
// Get: buscar informações
// Post: para criar uma nova informar. exemplo cadastrar um novo usuarios
// Put: Atualizar uma informação. Exemplo atualizar o cadastro de um usuario
// Delete: Deleter uma informação


// req.query 
// acessar query params, ou seja, paramentro que vem na url
// exemplo: http://localhost:3333/users?idade=20
// até o users é a rota, idade é nome do paramentro e 20 é o valor
// esse metodo é muito utilizado para filtros
// ver exemplo GET 3


// req.params
// acessar route params, ou seja, valores que são enviados na url, porem fazer parte da rota
// exemplo: http://localhost:3333/users/10
// até o 10 é a rota, porem o 10 é uma rota "dinamica"
// esse metodo é muito utilizado para edição e delete 
// ver exemplo POST 2 e PUT 1

// req.body
// acessar o corpo da requisição, ou seja, esse informação vem incapsulada, não é visivel na url
// exemplo: http://localhost:3333/users
// somete tem a rota na url
// esse metodo é mais utilizado para criação e edição




// As rotas sempre em ingles e no plural






// EXEMPLOS GET

// GET 1
routes.get('/', (req,res) => {
    return res.send('Hello World')
})

// GET 2
routes.get('/', (req,res) => {
    return res.json({ message: "Hello World" })
})

// GET 3
routes.get('/users', (req,res) => {
    return res.json({ message: req.query.idade })
})





// EXEMPLOS POST

// POST 1
routes.post('/users', (req,res) => {
    return res.json({ message: "Hello World" })
})

// POST 2
routes.post('/users/:idade', (req,res) => {
    return res.json({ message: req.params.idade })
})

// POST 3
routes.post('/users', express.json(), (req,res) => {
    return res.json(req.body)
})
// Como o body já é um json, pode retornar ele mesmo
// mas, como o express não entende json, precisa passar mais o comanda express.json() após a rota





// EXEMPLOS PUT
// PUT 1
routes.pur('/users/:id', (req,res) => {
    return res.json({ id: req.params.id })
})






server.listen(3333)