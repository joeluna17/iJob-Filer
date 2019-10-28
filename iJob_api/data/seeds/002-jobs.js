
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job').del()
    .then(function () {
      // Inserts seed entries
      return knex('job').insert([
        {id: 1, 
        customer_id:1,
        type: "framing",
        work_hours: 8,
        materials_used: "2x4, 30 degree nails, some other materials.",
        notes:" Framed up 18x12 room and added 2 doors and 2 exterior doors",
        address:"1232 some st. dallas texas",
        resident_name:"Karl Marx"
        },
        {id: 2, 
          customer_id:1,
          type: "electrical",
          work_hours: 5,
          materials_used: "blue boxes and wire.",
          notes:"Ruff in bedroom with can lights and fan",
          address:"5 Jobe st. Plano Texas",
          resident_name:"Jane Jackson"
          }
        
      ]);
    });
};
