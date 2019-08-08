
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('detalle_asignacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('detalle_asignacion').insert([
        {id_asignacion: 1,id_curso:1,horas:5,docente: 1,},
      ]);
    });
};
