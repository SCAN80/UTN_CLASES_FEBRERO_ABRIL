console.log("hola mundo")

//Crear en base a los datos del formulario un usuario y mostrarlo por HTML

const usuarios = []

const formularioRegistro = document.querySelector(".form")
const contenedorHTML = document.querySelector("#contenedorUsuarios")

const renderizarUsuarios = () =>{
    contenedorHTML.innerHTML = ""
    for(const usuario of usuarios){
        contenedorHTML.innerHTML += `
        <div class="card-usuario">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Email: <strong>${usuario.email}</strong></p>
            <p>Contraseña: <strong>${usuario.contrasena}</strong></p>
        </div>
        `
    }
}

formularioRegistro.addEventListener("submit", (event) =>{
    event.preventDefault()
    /* console.log(formularioRegistro.nombreCompleto.value) */
    usuarios.push({
        nombre: formularioRegistro.nombreCompleto.value, 
        email: formularioRegistro.correoElectronico.value,
        contrasena: formularioRegistro.contrasena.value
    })
    formularioRegistro.reset()
    renderizarUsuarios()
})