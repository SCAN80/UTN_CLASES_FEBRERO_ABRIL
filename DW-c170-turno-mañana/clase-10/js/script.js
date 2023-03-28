//API => Apication Programing Interface => Nos sirve para traer datos externos
//Ya lo usuamos? google fonts(usamos la api), bootstrap Icons
//Para que lo usariamos desde JS, para traer datos externos
//JSON => Javascript Object Notation
const URL_API = "https://swapi.dev/api/people/"
const contenedorHTML = document.getElementById("contenedor")
/* fetch(URL_API)
    .then(response => response.json())
    .then(data => {

        console.log(data.results)
        for(const personaje of data.results){
            contenedorHTML.innerHTML += `
            <div>
                <h2>${personaje.name}</h2>
                <p>Fecha de nacimiento ${personaje.birth_year}</p>
                <p>Peso: ${personaje.mass}kg</p>
                <hr>
            </div>
            `
        }
        
    
    }) */

console.log("hola")
fetch("../db/database.json")
    .then(response => response.json())
    .then(data => {
        for(product of data){
            contenedorHTML.innerHTML += `
            <div class="card">
                <h2>${product.destination}</h2>
                <img src=${product.url}/>
                <p>Precio: ${product.price}USD</p>
                <p>Estadia: ${product.stay} noches</p>
                <p>Ubicacion: ${product.country} <strong>${product.province}</strong></p>
            </div>
            `
        }
    })
    .catch(error => console.log(error))