const express = require('express');
const router = express.Router();

const conexion = require('./database/db');


router.get('/', (req, res) => {
    conexion.query('SELECT * FROM profesor', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('menu', { results: results });
        }
    });
})

router.get('/altasprofesor', (req, res)=>{
    conexion.query('SELECT * FROM unidadaprendizaje', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('altasprofesor', {curso:results});
        }
        })
})

router.get('/altasCursos', (req, res) => {
    res.render('altasCursos');
})

router.get('/consultas/:IdProfesor', (req, res)=>{
    const IdProfesor = req.params.IdProfesor;
    conexion.query('SELECT * FROM profesor WHERE IdProfesor=?', [IdProfesor], (error,results)=>{
        if(error) {
            throw error;
        } else {
            conexion.query('SELECT * FROM unidadaprendizaje', (error,result)=>{
                if(error) {
                    throw error;
                } else {
            res.render('consultas', {id:results[0],nombre:results[0], apellido:results[0], rfc:results[0],unidad:result });
        }})
    }})
});

const controlador = require('./controllers/controlador');
router.post('/registrarProfesor', controlador.registrarProfesor);
router.post('/registrarUnidad', controlador.registrarUnidad);

module.exports = router;