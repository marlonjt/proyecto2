
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('asignacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('asignacion').insert([
        {fecha_asignacion:'07/08/2019',docente:1},
        
      ]);
    });
};
