/* const nombres = ["Pepe", "Lucas", "jose"]
console.log(nombres) */


/* for(let i = 1; i <= 10; i = i + 1){
    if( i === 5){
        break
    }
    console.log(i)
} */


/* function saludar (){
    console.log("hola")
} */
/* const saludarEnFlecha = () => {
    console.log("Hola")
}

saludarEnFlecha()

 */

/* const notasDel1erSemestre = [10, 6, 8, 5, 5, 9]
 */
/* for(let i = 0; i < notasDel1erSemestre.length; i++){
    console.log(notasDel1erSemestre[i])
}
 */
//For...Of
/* for(let nota of notasDel1erSemestre){
    console.log(nota)
} */

/* const calcularPromedio = (notas) =>{
    let acumulador = 0
    for(let i = 0; i < notas.length; i++){
        acumulador += notas[i]
    }
    return acumulador/notas.length
}

let promedio = calcularPromedio(notasDel1erSemestre)
console.log("El promedio es de: " + promedio )
if(promedio >= 7){
    console.log("Felicitaciones aprobaste")
}else{
    console.log("No has aprobado :(")
} */

/* const alumnos = ["pepe", "maria"]
alert("Hola")
alumnos.push(prompt("Ingrese un nombre")) */

/* let contador = 0
contador++//Incrementar en 1
contador++
contador++
contador++
console.log(++contador)
contador += 5 */


const nombres = ["maria", "pepe", "lucas", "juan"]
const numeros = [123, 12321, 2413, 12421]
const mesesQueGane = [true, false, true, true, false]

/* for(let nombre of nombres){
    console.log("Hola soy " + nombre)
} */

/* let totalPerdido = 0
for(let numero of numeros){
    totalPerdido += numero
}
console.log("El total perdido en los meses fue $" + totalPerdido) */
let contador = 1
for(let mes of mesesQueGane){
    if(mes){
        console.log("En el mes " + contador + " gane")
    }else{
        console.log("En el mes " + contador + " perdi")
    }
    contador++
}