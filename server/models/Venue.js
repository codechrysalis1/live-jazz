const knex = require('knex')(require('../../knexfile'));
const bookshelf = require('bookshelf')(knex);

const Venue = bookshelf.Model.extend({
  tableName: 'venue'
});

module.exports = Venue;
