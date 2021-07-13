const path = require('path');

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: path.resolve('src', 'database', 'database.sqlite'),
      user: null
    },
    useNullAsDefault: true
});

module.exports = knex