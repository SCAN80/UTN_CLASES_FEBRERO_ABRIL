

//Bucles en JS

//Quiero que me muestren por consola 300 veces "hola mundo"

/* for(let i = 1; i <= 300; i = i + 1){
    console.log("hola mundo")
    console.log("La variable i vale: " + i)
} */


//Tipos de datos Objeto

/* const listaDeAlumnos = ["peu", "gabriel", "german"] */

//FORMA INCORRECTA
/* console.log(listaDeAlumnos[0])
console.log(listaDeAlumnos[1])
console.log(listaDeAlumnos[2]) */

//FORMA CORRECTA
/* for(let i = 0; i < 3; i = i + 1){
    console.log("La variable i vale: " + i)
    console.log(listaDeAlumnos[i])
} */

/* let nombre = "pepe"

if(true){
    let edad = 29
    let nombre = "juan"
    nombre = "lucas"
    console.log(nombre)
}

console.log(nombre)


if(true){
    var apellido = "suarez"
}
console.log(apellido) */

//DRY: DONT REPEAT YOURSELF => No te repitas

/* const calcularPromedio = (notasAPromediar) => {
    let acumulador = 0
    for(let i = 0; i < notasAPromediar.length; i = i + 1){
        acumulador = acumulador + notasAPromediar[i]
    }
    console.log("Su promedio es de: " + acumulador / notasAPromediar.length )
}

const notas = [7, 5, 10]
const notas2 = [ 5, 8, 7 ]
calcularPromedio(notas)
calcularPromedio(notas2) */

const saludar = (nombre) => {
    return "hola " + nombre
}

const obtenerDia = () =>{
    return "el dia es " + new Date().toUTCString()
}

/* alert(saludar("pepe"))
console.log(saludar("Maria"))

console.log(obtenerDia())
alert(obtenerDia())
console.error(obtenerDia()) */

const sumar = (a, b) => a + b
console.log("El precio de su producto es " + sumar( 3, 3))
console.log("Si tenia 12 y pasaron 20 años ahora tiene " + sumar(12, 20) + " años")

function restar (a, b) {
    return a - b
}

console.log(restar(3, 1))