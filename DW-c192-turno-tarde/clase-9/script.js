let nombreUsuario = "pepe"
let apellidoUsuario = "suarez"
let edadUsuario = 27

const usuario = {
    nombre: "pepe",
    apellido: "suarez",
    edad: 27
}
usuario.estaCasado = true



/* for(const usuario of usuarios){
    console.log(usuario.nombre + " " + usuario.apellido )
} */

console.log(document)

//DOM => document object model

/* document.write("<h2>Hola</h2>") */
/* let nombre = prompt("ingrese su nombre")
const tituloHTML = document.getElementById("titulo")
console.log(tituloHTML.innerText)
tituloHTML.innerText = "hola "+ nombre */





/* for(let i = 1; i <= 20; i = i + 1){
    console.log("hola")
    contenedorHTML.innerHTML += "<h2>Hola</h2>"
} */

const usuarios = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 27
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "pepesito",
        apellido: "suarez",
        edad: 45
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    }
]

const contenedorHTML = document.getElementById("contenedor")

for(const usuario of usuarios){
    contenedorHTML.innerHTML += `
    <div class="card">
        <h2>Nombre: ${usuario.nombre}</h2>
        <h3>Apellido: ${usuario.apellido}</h3>
        <p>Edad: ${usuario.edad}</p>
        <button>Ver detalle</button>
    </div>
    `
}

const formularioUsuarioHTML = document.getElementById("formularioUsuario")
formularioUsuarioHTML.addEventListener("submit", (event) => {
    event.preventDefault()
    /* console.log(event) */
    console.log(formularioUsuarioHTML.apellido.value)
})