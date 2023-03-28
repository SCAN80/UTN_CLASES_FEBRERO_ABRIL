

//HTML, CSS y el diseño (wireframe) (Lo unico que se requiere para aprobar) Diseño mas tardar el viernes
//Uso de librerias => +1pt
//Uso de dom => +1pt
//Uso de API/JSON local => +1pt

const contenedorHTML = document.getElementById("contenedor")


/* const URL_API = "https://swapi.dev/api/"

fetch(URL_API + "people/")
    .then(response => response.json())
    .then(data => {
        console.log("Se resolvio el fetch")
        for(const personaje of data.results){
            contenedorHTML.innerHTML += `
            <div>
                <h2>${personaje.name}</h2>
                <p>Fecha de nacimiento: ${personaje.birth_year}</p>
                <p>Altura: ${personaje.height}cm</p>
                <hr>
            </div>
            `
        }
    })
    .catch(error => console.error(error))

    console.log("hola") */

fetch("../database.json")
    .then(response => response.json())
    .then(data => {
        for(const producto of data){
            contenedorHTML.innerHTML += `
            <div class="card">
                <h2>${producto.name}</h2>
                <img src=${producto.url}>
                <h3>$${producto.price}USD</h3>
                <p>caballos de fuerza: ${producto.hp}</p>
                <p>color disponible: ${producto.color}</p>
                <p>Marca <strong>${producto.brand}</strong></p>
            </div>
            `
        }
    })