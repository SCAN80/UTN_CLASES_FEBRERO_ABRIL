//Bucle FOR

//Quiero que aparezcan 10 hola mundo por consola


/* console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo") */

/* for(let i = 1; i <= 10; i = i + 1){
    console.log("hola mundo")
    console.log("la variable i vale " +  i)
} */


//ARRAY => Un array es una lista de elementos

/* const listaDeProductos = ["Moto g8", "pixel 3", "Vodafone 9", "iphone 10"]
 */
/* console.log(listaDeProductos[0])
console.log(listaDeProductos[1])
console.log(listaDeProductos[2]) */

/* for(let i = 0; i < listaDeProductos.length; i = i + 1 ){
    console.log("El valor de la variable i es " + i )
    console.log(listaDeProductos[i])
} */


//Variables JS avanzado

/* let nombre = "pepe"
if(true){
    nombre = "lucas"
    if(true){
        let nombre = "maria"
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) */


//Tengo un array de notas y quiero calcular el promedio
//Tengo otro array de notas 

//DRY => Dont Repeat Yourself => no te repitas

const notas1erSemestre = [8, 1, 3, 10, 7, 2]
const notas2doSemestre = [8, 1, 3, 10, 7, 2]

/* let sumatoriaDeNotas = 0

for(let i = 0; i < notas1erSemestre.length; i = i + 1){
    sumatoriaDeNotas = sumatoriaDeNotas + notas1erSemestre[i]
}

let promedio = sumatoriaDeNotas / notas1erSemestre.length 

console.log("Su promedio final es: " + promedio)
 */



//Funciones

const saludar = (nombre, apellido) => {
    return "Hola " + nombre + " " + apellido
}

console.log(saludar("pepe", "Lopez"))
alert(saludar("maria", "Suarez"))
console.error(saludar("violeta", "rimes"))

// f(x) = 2x + 1
// f(3) = 2.3 + 1
// f(3) =  7
// f(4) = 2.4 + 1
// f(4) = 9

//Calcular promedio(notas) => number: promedio