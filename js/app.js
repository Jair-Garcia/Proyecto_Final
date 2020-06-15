
const mostrarAlum = document.getElementById("bbuscar");
mostrarAlum.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/alumnos", true);
  xhr.onload = function () {
    let  estudiantes=document.getElementById("estudiantes");
    let mostrar = JSON.parse(this.response);
      if (this.status >= 200 && this.status < 400) {
          mostrar.alumnos.forEach(element => {
    estudiantes.innerHTML+=`
    <div>
    <form>
    <table class="table">
    <div id="estudiantes" class=".estudiantes">
    <!--aqui se muestran todos los alumnos-->
    <form>
        <div id=".estudiantes">

            <table class="table">

                <thead class="thead-dark">

                    <tr>
                    <td>${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.edad}</td>
                    <td>${element.sexo}</td>
                    <td>${element.carrera}</td>
                    <td>${element.semestre}</td>
                    </tr>
                </thead>

            </table>
            </div>
    </form>
    </div>
    </div>
  
    `
  });
  console.log(mostrar);
      }
    }
    xhr.send();
});//esta peticion funcionará hasta agregar alumno



const bagregar = document.getElementById('bagregar');
bagregar.addEventListener("click",(e)=>{
    /* recupera cada caja de  de texto
    crear un alumno
    mostrar envia y
    agrega al array
    */
   console.log("hecho");
    let id=parseInt(document.getElementById("Iid").value);
    console.log(id)
    let nombre=document.getElementById("nombre").value;
    let edad=document.getElementById("edad").value;
    let sexo=document.getElementById("sexo").value;
    let carrera=document.getElementById("carrera").value;
    let semestre=document.getElementById("semestre").value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/alumnos/otro", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function(){
      let estudiantes = document.getElementById("estudiantes");
      if(this.readyState === XMLHttpRequest.DOM && this.status === 200){
          estudiantes.innerHTML += `
          <div> 
            <p><strong>${this.response}</p>
          </div>`
      }
 }
 
 xhr.send(JSON.stringify({"id": id, "nombre": nombre, "edad": edad, "sexo": sexo, "carrera": carrera, "semestre": semestre}));

});
