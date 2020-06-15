//Aqui se crea el servidor
//llamamos a express y body parser
const express = require("express");
const bodyparser = require("body-parser");
const del=require("underscore")



const app = express();
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
        });
        
 //Iniciando servidor
    app.listen(3000, () => {
        console.log('Escuchando en puerto 3000');
    });

app.use(require("./routes/routes"));//trae a las rutas
