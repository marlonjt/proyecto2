
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('paralelo').del()
    .then(function () {
      // Inserts seed entries
      return knex('paralelo').insert([
        {nombre: 'A', nivel:'2'},
        {nombre: 'B', nivel:'2'},
        {nombre: 'C', nivel:'2'},
      ]);
    });
};
