const formularioUsuarios = document.querySelector(".formularioUsuarios")
const contenedorUsuarios = document.querySelector("#contenedorUsuarios")
const usuarios = []


const renderizarUsuarios = () =>{
    contenedorUsuarios.innerHTML = ""
    for(const usuario of usuarios){
        contenedorUsuarios.innerHTML += `
        <div class="user-card">
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Email: ${usuario.email}</p>
            <p>Contraseña: ${usuario.contrasena}</p>
            <p>Provincia: ${usuario.provincia}</p>
        </div>
        `
    }
    
}
formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()

    console.log(formularioUsuarios.provincia.value)

    usuarios.push({
        nombre: formularioUsuarios.nombre.value,
        email: formularioUsuarios.email.value,
        contrasena: formularioUsuarios.contrasena.value,
        provincia: formularioUsuarios.provincia.value
    })
    renderizarUsuarios()
} )