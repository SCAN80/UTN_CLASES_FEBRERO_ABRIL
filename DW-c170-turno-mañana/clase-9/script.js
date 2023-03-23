


/* let nombreUsuario = "pepe"
let apellidoUsuario = "lopez"
let edadUsuario = 23
 */
//Literal Object 
const usuario = {
    nombre: "pepe",
    apellido: "lopez",
    edad: 22
}

console.log(usuario)
console.dir(document)

//DOM = Document Object Model
/* document.write("<h2>hola</h2>") */

const contenedorHTML = document.getElementById("contenedor")

/* if(usuario.edad >= 18){
    contenedorHTML.innerHTML = `
    <h1>
        podes pasar ${usuario.nombre}, sos mayor de edad
    </h1>
    `
}else{
    contenedorHTML.innerHTML = "<h1>no podes pasar, no sos mayor de edad</h1>"
} */
const usuarios = [
    {
        nombre: "pepe",
        apellido: "lopez",
        edad: 22,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
    {
        nombre: "juan",
        apellido: "carrizo",
        edad: 24,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
    {
        nombre: "pepesito",
        apellido: "fulanito",
        edad: 55,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
    {
        nombre: "juan",
        apellido: "carrizo",
        edad: 24,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
    {
        nombre: "juan",
        apellido: "carrizo",
        edad: 24,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
    {
        nombre: "juan",
        apellido: "carrizo",
        edad: 24,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
    {
        nombre: "juan",
        apellido: "carrizo",
        edad: 24,
        url: "https://cdn0.recetasgratis.net/es/posts/1/1/6/fideos_a_la_olla_delicioso_9611_600_square.jpg"
    },
]

for(const usuario of usuarios){
    contenedorHTML.innerHTML = contenedorHTML.innerHTML +  `
    <div class="card">
        <h2>Nombre: ${usuario.nombre}</h2>
        <img src="${usuario.url}"/>
        <h3>Apellido: ${usuario.apellido}</h3>
        <p>Edad: ${usuario.edad}</p>
        <button>Ver detalle</button>
    </div>
    `
}
//Para llamar por la class
/* const formularioUsuariosHTML = document.querySelector(".formularioUsuarios") */
//para llamar por id 
const formularioUsuariosHTML = document.querySelector("#formularioUsuarios") 

formularioUsuariosHTML.addEventListener("submit", (event)=>{
    event.preventDefault()
    /* console.log(event) */
    console.log(formularioUsuariosHTML.apellido.value)
})