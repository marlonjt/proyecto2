
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('curso').del()
    .then(function () {
      // Inserts seed entries
      return knex('curso').insert([
        {nombre: 'Primero',nivel: 2,pralelo: 3},
        
      ]);
    });
};
