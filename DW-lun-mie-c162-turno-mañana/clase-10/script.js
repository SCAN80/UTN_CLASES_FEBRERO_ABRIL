

const contenedor = document.getElementById("contenedor")


/* const URL_API = "https://swapi.dev/api/"

fetch(URL_API + "people")
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        for(const personaje of data.results){
            console.log(personaje)
            contenedor.innerHTML += `
            <div>
                <h2>${personaje.name}</h2>
                <p>Año de nacimiento: ${personaje.birth_year}</p>
                <p>Masa: ${personaje.mass}Kg</p>
                <hr>
            </div>
            
            `
        }
    }) */

/* 
fetch("./database.json")
    .then(response => response.json())
    .then(data => {

        for(const producto of data){
            contenedor.innerHTML += `
            <div>
                <h2>${producto.name}</h2>
                <p>Price: $${producto.price}</p>
                <span>Marca: ${producto.marca}</span>
                <div>
                    El color disponible es: <div class="${producto.color} color-disponible"></div>
                </div>
                
            </div>
            `
        }
    }) */

    fetch("./productos.json")
    .then(response => response.json())
    .then(data => {

        for(const producto of data){
            contenedor.innerHTML += `
            <div>
                <h2>${producto.name}</h2>
                <p>Price: $${producto.price}</p>
                <span>Marca: ${producto.brand}</span>
                <img src=${producto.img}>
            </div>
            `
        }
    })