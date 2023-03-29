const formularioRegistro = document.querySelector("#formularioRegistro")
const contenedorUsuariosHTML = document.querySelector(".contenedorUsuarios")

const usuarios = []

const renderizarUsuarios = () =>{
    contenedorUsuariosHTML.innerHTML = ""
    for(const usuario of usuarios){
        contenedorUsuariosHTML.innerHTML += `
        <div class="card-user">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Email: ${usuario.email}</p>
            <p>Contraseña: ${usuario.contrasena}</p>
            <p>Provincia: ${usuario.provincia}</p>
        </div>
        `
    }
}
formularioRegistro.addEventListener("submit", (event) =>{
    event.preventDefault()
    usuarios.push({
        nombre: formularioRegistro.nombre.value,
        email: formularioRegistro.email.value,
        contrasena: formularioRegistro.contrasena.value,
        provincia: formularioRegistro.provincia.value
    })
    renderizarUsuarios()
    formularioRegistro.reset()
})

//"pepe", "tomar", "estafar"

/* let palabra1 = "pepe"
let palabra2 = "tomar"

const palabrasProhebidas = ["pepe", "tomar", "estafar"] */

