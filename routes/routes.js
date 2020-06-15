//Archivo de rutas
const enruta = require("express"); //requerimos de express para realizar la accion
const route = enruta();// cuando llamemos a route se va a ejecutar la funcion
const cors = require("cors");

const Estructura = require("../clases/arrayAlumnos");//trae tu array con sus metodos
let alumnos = new Estructura();//aqui se crea el array
let contid=0;

route.get("/alumnos/", (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');//siempre se pone antes de cada send()
    res.status(200);
    res.send(alumnos);
});

const alumno =  require("../clases/alumnos");//trae a tu clase alumno

route.post("/alumnos/otro", cors(), (req,res) =>{
    let alum = new alumno(contid, req.body.nombre, req.body.edad, req.body.sexo, req.body.carrera, req.body.semestre) //aqui se crea tu nuevo alumno
//puedes hacer validaciones mediante tus metodos, verificar si existe o no ese elemento en el array
        alumnos.agregar(alum);//de lo contrario se agrega
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200);
        res.send({message: "Nuevo alumno agregado"});
        contid++;
});

route.delete("../alumnos/:id", (req,res) => {
    const {id}=req.params;
    del.each("alumnos",(alumno,i)=>{
        if(alumno.id==id){
            alumno.splice(i,1);
        }
    })
res.send("Eliminado");
});

module.exports = route;//exporta las funciones de route