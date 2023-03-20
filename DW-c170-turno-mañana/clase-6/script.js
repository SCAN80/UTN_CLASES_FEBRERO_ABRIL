//Bucle While > no se ve en la clase


//Bucles FOR

//Tenemos que ejecutar 300  mensajes por consola que digan "hola mundo"

/* for(let i = 1; i <= 300; i = i + 1){
    console.log("La variable i vale: " + i)
    console.log("Hola mundo")
}
 */


//ARRAYS

//Mostrame por consola a cada alumno
/* const listaDeAlumnos = ["Paula", "maria", "pepe", "facundo", "pepe", "carlos", "lucas"] */

/* console.log(listaDeAlumnos[0])
console.log(listaDeAlumnos[1])
console.log(listaDeAlumnos[2])
console.log(listaDeAlumnos[3]) */

/* for(let i = 0; i < listaDeAlumnos.length; i = i + 1){
    console.log(listaDeAlumnos[i])
} */

/* let nombre = "pepe"
if(true){
    let nombre = "lucas"
    if(true){
        console.log(nombre)
    }
    if(true){
        let nombre = "maria"
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) */

const notas1erSemestre = [3, 9, 7]
const notas2doSemestre = [4, 2, 10]

//A partir de esta notas calcular el promedio de las notas 
//Ahora las del 2do tambien

//DRY => dont repeat yourself > no te repitas

/* let notasAcumuladas = 0

for(let i = 0; i < notas1erSemestre.length; i = i + 1){
    notasAcumuladas = notasAcumuladas + notas1erSemestre[i]
}

let promedio = notasAcumuladas/notas1erSemestre.length

console.log("el promedio final es: " + promedio) */

//Funciones

/* const saludar = () => {
    console.log("hola mundo")
} */
/* for(let i = 1; i <= 20; i = i + 1){
    saludar()
} */


//Que se muestre por alerta y por consola
/* const saludar = (nombre, apellido) => {
    return "hola " + nombre + " " + apellido
} */


// f(x) = 2x + 1
// 2 . 20 + 1
// 41

/* console.log(saludar("timba", "suarez"))
alert(saludar("pepe", "Lopez")) */


/* const calcularPromedio = (notas) =>{
    let notasAcumuladas = 0
    
    for(let i = 0; i < notas.length; i = i + 1){
        notasAcumuladas = notasAcumuladas + notas[i]
    }
    
    return notasAcumuladas/notas.length
} */

/* alert("En el primer semestre te sacaste: " + calcularPromedio(notas1erSemestre))
console.log("Pero en el segundo no mejoraste :C nota: " + calcularPromedio(notas2doSemestre)) */