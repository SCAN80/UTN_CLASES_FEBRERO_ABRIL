//DOM = document object model

console.dir(document)
/* document.write("<h2>hola</h2>") */
const tituloHTML = document.getElementById("titulo")
console.dir(tituloHTML)
console.log(tituloHTML.innerText)
tituloHTML.innerText = "chau mundo"
/* tituloHTML = "hola" */

/* let nombreUsuario = "pepe"
let apellidoUsuario = "suarez"
let edadUsuario = 98 */

// POO JS => programacion orientada a objetos

const usuario = {
    nombre: "pepe",
    apellido: "suarez",
    edad: 98,
    estaRegistrado: false
}

/* const usuarios = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
        estaRegistrado: false,
        familia:[
            {
                nombre: "marisol",
                relacion: "esposa"
            },
            {
                nombre: "sancho",
                relacion: "mascota"
            }
        ]
    },
    {
        nombre: "lucas",
        apellido: "pepe",
        edad: 98,
        estaRegistrado: false
    },
]
 */
let nombre = "lukita"


/* for(let i = 1; i <= 10; i++){
    //Template String
    contenedorHTML.innerHTML += `<h2 class='rojo'>Buen dia ${nombre}</h2>`
}
 */


const usuarios = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },
    {
        nombre: "lucas",
        apellido: "pepe",
        edad: 98,
    },
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 98,
    },

]

const contenedorHTML = document.getElementById("contenedor")

for(const usuario of usuarios ){
    contenedorHTML.innerHTML += `
        <div class="card">
            <h2>Nombre: ${usuario.nombre}</h2>
            <h3>Apellido: ${usuario.apellido}</h3>
            <p>Edad: ${usuario.edad}</p>
            <button>Ver detalle</button>
        </div>
    `
}

const formularioUsuario = document.getElementById("formularioUsuario")



formularioUsuario.addEventListener("submit", (event) => {
    event.preventDefault()
   /*  console.log(event) */
    console.log(formularioUsuario.apellido.value)
})