
exports.up = function(knex) {
  return knex.schema.createTable('customer', customer => {
      customer.increments('id');
      customer.timestamp('created_at')
      .defaultTo(knex.fn.now());
      customer.string('firstName')
      .notNullable();
      customer.string('lastName')
      .notNullable();
      customer.string('email')
      .unique();
      customer.string('address');
      customer.string('city');
      customer.string('state');
      customer.string('phone');
  });
  };
  

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customer');
};
