const knex = require('./connection')

async function getData() {
    try {
        console.log(knex.select().table('users'))
        return console.log('Dados requisitados com sucesso!')
    } catch(e) {
        return console.error(e);
    };
}

getData() 