//Bucle WHILE ----------------------> No se ve en la clase
//Bucle FOR 

//Repetir hola mundo 30 veces por consola

//DRY => dont repeat yourself => no te repitas

/* for(let i = 1; i <= 30; i = i + 1){
    console.log("la variable i vale " + i)
    console.log("Hola buen dia")
} */

//Tipos de datos object

//Array de strings
/* const listaDeAlumnos = ["pepe", "lucas", "juan", "maria"] */


//Mostrame a cada alumno por consola
/* let nombre = "pepe" */
/* for(let i = 0; i < 4; i = i + 1){
    console.log("La variable i vale: " + i)
    console.log(listaDeAlumnos[i])
    console.log(nombre)
    if(true){
        console.log(nombre)
    }
} */
/* alert(nombre) */

/* const nombre = "pepe"

if(true){
    const nombre = "maria"
    if(true){
        const nombre = "lucas"
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre) */



//Calcular promedio de 3 notas
//Se las voy a solicitar la usuario
"1" + 1 // 11
/* let notasAcumuladas = 0
for(let i = 1; i <= 3; i = i +1){
    let nota = prompt("ingrese una nota")
    notasAcumuladas = notasAcumuladas + Number(nota)
}
let promedio = notasAcumuladas/3
console.log("su promedio es de: " + promedio)
if(promedio >= 7){
    console.log("Felicitaciones! aprobaste 💥💥")
}else{
    console.log("Nos vemos en febrero 👊")
} */

//Ahora con las de 2do semestre
/* const notas1erSemestre = [8, 8, 5]
const notas2doSemestre = [4, 10, 10]

let contador = 0

for(let i = 0; i < notas1erSemestre.length; i = i + 1){
    contador = contador + notas1erSemestre[i]
}
let promedio = contador / notas1erSemestre.length
console.log("su promedio es de: " + promedio)
if(promedio >= 7){
    console.log("Felicitaciones! aprobaste 💥💥")
}else{
    console.log("Nos vemos en febrero 👊")
} */


//Funciones

/* const saludar = (nombre, apellido) =>{
    return "hola " + nombre + " " + apellido
}

console.log(saludar("maria", "surez"))
alert(saludar("pepe", "lopez")) */

// f(x) = 2x + 1
// f(7) = 2 . 7 + 1
// f(7) = 15

//Funcion contarHasta(numero)

/* const contarHasta = (numero) =>{
    for(let i = 1; i <= numero; i = i + 1){
        console.log(i)
    }
} */


//Ahora con las de 2do semestre

/* const promediar = (listaDeNotas) => {
    let contador = 0
    for(let i = 0; i < listaDeNotas.length; i = i + 1){
        contador = contador + listaDeNotas[i]
    }
    return contador / listaDeNotas.length
}
const calificarPromedio = (promedio) =>{
    console.log("su promedio es de: " + promedio)
    if(promedio >= 7){
        console.log("Felicitaciones! aprobaste 💥💥")
    }else{
        console.log("Nos vemos en febrero 👊")
    } 
}

const notas1erSemestre = [8, 8, 5]
const notas2doSemestre = [4, 10, 10]

let promedio2doSemestre = promediar(notas2doSemestre)

calificarPromedio(promediar(notas1erSemestre))
calificarPromedio(promedio2doSemestre) */

