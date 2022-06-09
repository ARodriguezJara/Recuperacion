const { redirect } = require('express/lib/response');
const conexion = require('../database/db');

exports.registrarProfesor = (req, res) => {
   const IdProfesor = req.body.IdProfesor;
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const rfc = req.body.rfc;
   const cursos = req.body.cursos;
   conexion.query('INSERT INTO profesor set ?', { IdProfesor:IdProfesor, nombre: nombre, apellido: apellido, rfc: rfc }, (error, results) => {
      if (error) {
         console.log(error);
      } else {
         
               res.redirect('/');
            }
         })
      }

exports.registrarUnidad = (req, res) => {
   const nombre = req.body.nombre;
   const horasClase = req.body.horasclase;
   const horasTaller = req.body.horastaller;
   const horasLaboratorio = req.body.horaslab;
   conexion.query('INSERT INTO unidadaprendizaje SET ?', { nombre: nombre, horasClase: horasClase, horasTaller: horasTaller, horasLaboratorio: horasLaboratorio }, (error, results) => {
      if (error) {
         console.log(error);
      } else {
         res.redirect('/');
      }
   });
}
