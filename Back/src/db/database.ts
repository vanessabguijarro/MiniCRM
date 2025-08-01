import path from 'path';
import knex from 'knex';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'data.sqlite')
  },
  useNullAsDefault: true
});

export default db;
