//Objetos

/* let nombreUsuario = "pepe"
let apellidoUsuario = "suarez"
let edadUsuario = 30 */
//JSON => Javascript Object Notation
const usuario = {
    nombre: "Pepe",
    apellido: "suarez",
    edad: 30,
    estaRegistrado: true
}

//DOM => document object model

/* console.dir(document) */

const contenedorHTML = document.getElementById("contenedor")

const usuarios = [
    {
        nombre: "Pepe",
        apellido: "suarez",
        edad: 30,
    },
    {
        nombre: "Pepesito",
        apellido: "suarez",
        edad: 30,
    },
    {
        nombre: "tomas",
        apellido: "suarez",
        edad: 30,
    },
    {
        nombre: "maria",
        apellido: "suarez",
        edad: 30,
    },
    {
        nombre: "amanda",
        apellido: "suarez",
        edad: 30,
    },
    {
        nombre: "Miriam",
        apellido: "suarez",
        edad: 30,
    },
    {
        nombre: "Lucas",
        apellido: "suarez",
        edad: 30,
    }
    ,
    {
        nombre: "Lucas",
        apellido: "suarez",
        edad: 30,
    }
    ,
    {
        nombre: "Lucas",
        apellido: "suarez",
        edad: 30,
    }
    ,
    {
        nombre: "Lucas",
        apellido: "suarez",
        edad: 30,
    }
    ,
    {
        nombre: "Lucas",
        apellido: "suarez",
        edad: 30,
    }
    ,
    {
        nombre: "Lucas",
        apellido: "suarez",
        edad: 30,
    }
]
/* for(const usuario of usuarios){
    console.log(usuario.nombre)
}
 */

/* usuario.nombre = prompt("ingrese su nombre") */

for(const usuario of usuarios){
    contenedorHTML.innerHTML = contenedorHTML.innerHTML + `
        <div class="card">
            <h2>Nombre: ${usuario.nombre} </h2> 
            <h3>Apellido: ${usuario.apellido}</h3>
            <p>Edad: ${usuario.edad}</p>
            <button>Ver detalle</button>
        </div>
    `
}

const formularioUsuariosHTML = document.querySelector(".formularioUsuarios")
formularioUsuariosHTML.addEventListener("submit", (event) =>{
    event.preventDefault()
    /* console.log(event) */
    console.log(formularioUsuariosHTML.apellido.value)
    console.log("se envio el formulario")
})