const express = require('express')
const app = express()
const views = __dirname + '/views/'

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.render(views + "index"))

app.get('/add', (req, res) => res.render(views + "register"))

app.post('/add', (req, res) => {
    let userData = req.body
    console.log(userData)
    return res.render(views + 'register',{msg: `Cadastro realizado! ${userData.name}`})
})

app.listen(8080)