
const contenedorHTML = document.getElementById("contenedor")

/* const URL_API = "https://swapi.dev/api/people"
fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        for(const personaje of data.results){
            contenedorHTML.innerHTML += `
            <div>
                <h2>${personaje.name}</h2>
                <p>Peso: ${personaje.mass}KG</p>
                <p>Año de nacimiento: ${personaje.birth_year}</p>
                <hr>
            </div>
            `
        }
    }) */


console.log("Hola")

fetch("./database.json")
    .then(response => response.json())
    .then(data =>{
        for(const personaje of data){
            contenedorHTML.innerHTML+=`
            <div class="card">
                <h2>${personaje.nombre}</h2>
                <img src=${personaje.url}>
                <p>Año de nacimiento: ${personaje.nacimiento}</p>
                <p>Franquicia: <strong>${personaje.franquicia}</strong></p>
            </div>
            `
        }
        
    })