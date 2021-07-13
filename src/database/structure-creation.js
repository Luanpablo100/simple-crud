const knex = require('./connection')

async function createTableData() {
    try {
        
        knex.schema.createTable('users', (table) => {
            table.increments('id').primary()
            table.string('name')
            table.integer('age')
          })
          .then()
        return console.log('tabela criada!')
    } catch(e) {
        console.error(e);
    };
}

createTableData()