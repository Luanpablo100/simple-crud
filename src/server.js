const express = require('express')
const app = express()
const views = __dirname + '/views/'
const fetch = require("node-fetch");

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.render(views + "index"))

app.get('/add', (req, res) => res.render(views + "register"))

app.post('/add', (req, res) => {
    let userData = req.body
    console.log(userData)
    setTimeout(() => {
        return res.render(views + 'register',{msg: `Cadastro realizado! ${userData.firstname}, E-mail:${userData.email}`})
    }, 2000)
    
})

app.get('/profile', async(req, res) => {
    // try{
    //     await fetch(`https://api.github.com/users/Luanpablo100`)
    //     .then(res => res.json()
    //         .then(data => {
    //             res.render('profile', {user: data.login})
    //         })
    //     )
    // }
    return res.render(views + 'profile')
})
    


app.listen(8080)


async function getUser(req, res) {
    let response = await fetch(`https://api.github.com/users/Luanpablo100`);
    let userData = await response.json();
    return userData.login; // não é necessário o await no return
}
