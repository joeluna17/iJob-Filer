
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('customer').insert([
        {id: 1, 
        firstName:"Jose",
        lastName:"Martinez",
        email:"jose123@email.com",
        city:"Richardson",
        state:"Texas",
        phone:"903-555-5555"  
        },
      
      ]);
    });
};
