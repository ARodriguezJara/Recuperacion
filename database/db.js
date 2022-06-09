const mysql = require('mysql');

const conexion = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'recuperacionbd'
})

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion:' +error);
        return
    }
    console.log('se ah conectado la base de datos')
})

module.exports  = conexion;