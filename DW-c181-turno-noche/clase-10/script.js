

//Como llamamos datos externos

/* fetch */

/* const URL_API = "https://swapi.dev/api/people?page=2"

fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        for(const personaje of data.results){
            contenedorHTML.innerHTML += `
            <div>
                <h2>${personaje.name}</h2>
                <p>Peso: ${personaje.mass}KG</p>
                <p>Genero: ${personaje.gender}</p>
                <hr>
            </div>
            `
        }
    }) */
    console.log("Hola mundo")
    console.log("hola")

    const contenedorHTML = document.getElementById("contenedor")
fetch("./db/database.json")
    .then(response => response.json())
    .then(data =>{
        for(producto of data){
            contenedorHTML.innerHTML += `
            <div class="card">
                <h2>${producto.nombre}</h2>
                <img src=${producto.url}>
                <p>Precio de alquiler por ${producto.duracion}/${producto.precio}USD</p>
                <p>Rodado: ${producto.rodado}</p>
            </div>
            `
        }
    })