
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('asignaturas').del()
    .then(function () {
      // Inserts seed entries
      return knex('asignaturas').insert([
        {nombre:'Base de datos',malla: 1 ,malla: 2,},
        {nombre:'POO',malla: 2 ,malla: 2,},
        {nombre:'Metodologias',malla: 2 ,malla: 2,},
        {nombre:'Matetmatica',malla: 2 ,malla: 2,},
      ]);
    });
};
