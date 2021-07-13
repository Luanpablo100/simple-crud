const knex = require('./connection')

async function insertData() {
    try {
        knex('users').insert({name: 'Luan Oliveira'})
        return console.log('Dados inseridos!')
    } catch(e) {
        console.error(e);
    };
}

insertData()