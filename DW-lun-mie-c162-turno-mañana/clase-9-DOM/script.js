//DOM => Document Object Model

/* let nombre = prompt("Ingrese su nombre")
console.dir(document)
if(nombre == "pepe"){
    document.write("<h2>hola " +  nombre + "</h2>") 
}
else{
    document.write("<h2>No esta pepe</h2>")
}let i = 1; i <= 10; i++
for(){
    document.write(i)
} */

const titulo = document.getElementById("titulo")

/* console.log(titulo.innerText)
titulo.innerText = "pepe" 
titulo.innerText += " maria" */

/* const nombres = ["pepe", "lucas", "juan", "ezequiel"] */

/* titulo.innerText = ""
for(let nombre of nombres){
    titulo.innerText +=  " " + nombre
} */

/* 

for(let nombre of nombres){
    contenedor.innerHTML += "<h2 class='card-title'>" + nombre + "</h2>"
} */

/* const usuario = {nombre: "Pepe", apellido: "suarez", edad: 23} */

const usuarios = [
    {
        nombre: "pepe",
        apellido: "suarez",
        edad: 23
    },
    {
        nombre: "lucas",
        apellido: "samuel",
        edad: 45
    },
    {
        nombre: "maria",
        apellido: "lopez",
        edad: 65
    },
    {
        nombre: "maria",
        apellido: "lopez",
        edad: 65
    },
    {
        nombre: "maria",
        apellido: "lopez",
        edad: 65
    },
    {
        nombre: "maria",
        apellido: "lopez",
        edad: 65
    },
]
const contenedor = document.getElementById("contenedor")
/* const contenedor = document.querySelector(".card-container") */
/* const contenedor = document.getElementsByClassName("card-container") */
/* const contenedor = document.querySelector("#contenedor") */
for(const usuario of usuarios){
    contenedor.innerHTML += `
    <div class="card">
        <h2>Nombre: ${usuario.nombre}</h2>
        <h3>Apellido: ${usuario.apellido}</h3>
        <p>Edad: ${usuario.edad}</p>
        <button>Editar</button>
    </div>
    `
}


let nombre = "Pepe"

console.log(`hola ${nombre}`)


const formularioHTML = document.getElementById("formulario")
formularioHTML.addEventListener("submit", (event ) =>{
    event.preventDefault()
    console.log(event)
    console.log(formularioHTML.nombre.value)
    console.log(formularioHTML.apellido.value)
    console.log(formularioHTML.edad.value)
    formularioHTML.reset()
})