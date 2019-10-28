
exports.up = function(knex) {
  return knex.schema.createTable('job', job => {
    job.increments('id');
    job.integer('customer_id')
    .unsigned()
    .references('id')
    .inTable('customer')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    .notNullable();
    job.string('type')
    .notNullable();
    job.integer('work_hours')
    .unsigned()
    .notNullable();
    job.string('materials_used')
    .notNullable();
    job.string('notes');
    job.string('address');
    job.string('resident_name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('job');
};
