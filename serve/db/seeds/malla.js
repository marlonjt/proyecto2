
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tipo_de_malla').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipo_de_malla').insert([
      {malla_nueva:'nueve',malla_nueva:'antigua',fecha_aprobada:'07/08/2015'},
      {malla_nueva:'nueve',malla_nueva:'antigua',fecha_aprobada:'07/08/2018'}
      ]);
    });
};
