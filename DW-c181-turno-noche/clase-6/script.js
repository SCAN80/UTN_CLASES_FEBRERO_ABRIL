//Bucles FOR

// Quiero que me hagas 10 mensajes por consola que digan "Hola mundo"

/* console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo") */

/* for(let i = 1; i <= 10; i = i + 1){
    console.log("La variable i ahora vale: " + i)
    console.log("hola mundo")
}

for(let i = 1; i <= 10; i = i + 1){
    console.log("Hola")
}
 */


//Array

const listaDeAlumnos = ["gonzalo", "maria", "lucas", "brenda", "pepe", "fulano", "mengano"]

/* console.log("Buenas noches, mi nombre es " + listaDeAlumnos[0])
console.log("Buenas noches, mi nombre es " + listaDeAlumnos[1])
console.log("Buenas noches, mi nombre es " + listaDeAlumnos[2])
console.log("Buenas noches, mi nombre es " + listaDeAlumnos[3]) */

//Listame a los alumnos, que por cada almuno ejecute por consola un mensaje que diga "Buenas noches, mi nombre es " +  nombreAlumno

/* for(let i = 0; i < listaDeAlumnos.length; i = i + 1 ){
    let alumno = listaDeAlumnos[i]
    console.log("Buenas noches, mi nombre es " + alumno)
} */



/* let nombre = "pepe"
if(true){
    let nombre = "maria"
    if(true){
        let nombre = "lucas"
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) */



//Dado un array de notas, calcular el promedio
//Principio DRY => Dont Repeat Yourself = no te repitas
const notas1erSemestre = [ 2, 3, 5, 9, 6, 10, 10]
const notas2doSemestre = [ 2, 3, 5, 9, 6, 10, 10]

/* let sumatoria = 0

for(let i = 0; i < notas1erSemestre.length; i = i + 1){
    sumatoria = sumatoria + notas1erSemestre[i]
}
let promedio = sumatoria / notas1erSemestre.length

console.log("el promedio es de " + promedio)

 */


//Funciones

const saludar = (nombre, apellido) => {
    return "hola " + nombre + " " + apellido
}

console.log(saludar("pepe", "lopez"))
alert(saludar("maria", "millen"))

//F(x) = 2x + 1
//f(7) = 2.7 + 1
//f(7) = 15

