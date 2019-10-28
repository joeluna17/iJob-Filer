const knex = require('knex');
const dbconfig = require('../knexfile');
const environment = process.env.DB_ENV || 'development' ;
module.exports = knex(dbconfig[environment]);