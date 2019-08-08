var knex = require('../db/knex')

module.exports = {
    addLibro
};

function addLibro(req, res) {
    knex('libros').insert({
        codigo_isbn: req.body.codigo_isbn,
        nombre: req.body.nombre,
        editorial: req.body.editorial,
        autor: req.body.autor,
        fecha_publicacion: req.body.fecha_publicacion,
        genero: req.body.genero,
        estado_conservacion: req.body.estado_conservacion,
        estado: req.body.estado,
        eliminado: req.body.eliminado,
    }).then(() => {
        knex.select('id_libro', 'codigo_isbn', 'nombre', 'editorial', 'autor', 'fecha_publicacion',
                'genero', 'estados_conservacion.nombre_estado_conservacion', 'estados.nombre_estado')
            .from('libros')
            .join('estados_conservacion', 'libros.estado_conservacion', '=',
                'estados_conservacion.id_estado_conservacion')
            .join('estados', 'libros.estado', '=', 'estados.id_estado')
            .where('eliminado', 1)
            .then(libros => res.send(libros));
    })
}