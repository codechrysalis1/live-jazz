const knex = require('knex')(require('../../knexfile'));
const bookshelf = require('bookshelf')(knex);
const Venue = require('./Venue');

const Event = bookshelf.Model.extend({
  tableName: 'event',
  venues: function() {
    // return this.hasMany(Venue);
    return this.belongsTo(Venue);
  }
});

module.exports = Event;
