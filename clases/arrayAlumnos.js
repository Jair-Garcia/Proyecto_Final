class Estructura{
    constructor(){
        this.alumnos = new Array();
        this.cont=0;
    }
    //Metodos
    agregar(nuevo){
        this.alumnos.push(nuevo);
        this.cont++;
    }
    busqueda(id){
        let lista=null;
        let i=0;
        while(i<this.alumnos.length && lista === null){
            if(this.alumno[i].id == id){
                lista = this.alumnos[i];
            }
            i++;
        }
        return lista;
    }
    mostrar(){
        let salida="";
        let i=0;
        for(i=0; i<this.alumnos.length; i++){
            salida += "<p>" + this.alumnos[i].ShowInfo() + "<p>";
        }
        return salida;
    }
    
}
module.exports = Estructura;