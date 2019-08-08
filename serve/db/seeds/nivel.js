
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nivel').del()
    .then(function () {
      // Inserts seed entries
      return knex('nivel').insert([
        {nombre:'Primero'},
        {nombre:'Segundo'},
        {nombre:'Tercero'},
        {nombre:'Cuarto'},
        {nombre:'Quinto'},
        {nombre:'Sexto'},
      ]);
    });
};
