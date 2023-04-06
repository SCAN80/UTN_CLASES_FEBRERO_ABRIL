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
            <button class="btn-eliminar" id="btn-eliminar-${usuario.id}">Eliminar</button>
        </div>
        `
    }
    const btnsEliminar = document.getElementsByClassName("btn-eliminar")

    for(const btnEliminar of btnsEliminar){
        btnEliminar.addEventListener("click", (event) => {
            const idUsuarioEliminar = event.target.id.split("-").pop()
            const posicionUsuarioEliminar = usuarios.findIndex(usuario => usuario.id = idUsuarioEliminar)
            usuarios.splice(posicionUsuarioEliminar, 1)
            renderizarUsuarios()
        })
    }
}
let idCounter = 0
formularioRegistro.addEventListener("submit", (event) =>{
    event.preventDefault()
    usuarios.push({
        nombre: formularioRegistro.nombre.value,
        email: formularioRegistro.email.value,
        contrasena: formularioRegistro.contrasena.value,
        provincia: formularioRegistro.provincia.value,
        id: idCounter++
    })
    renderizarUsuarios()
    formularioRegistro.reset()
})

//"pepe", "tomar", "estafar"

/* let palabra1 = "pepe"
let palabra2 = "tomar"

const palabrasProhebidas = ["pepe", "tomar", "estafar"] */

