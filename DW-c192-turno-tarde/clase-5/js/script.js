/* JavaScript es un lenguaje de programacion */
/* Un lenguaje de programacion */
/* JAVA NO ES JAVASCRIPT */
/* JS Es un lenguaje interpretado por el motor v8 */
/* JS es un lenguaje case sensitive */
/* console.log("Hola mundo") */

//TIPOS DE DATOS PRIMITIVOS

//String = Cadena de caracteres

"Hola"
"1"
'hola'

//Numbers

2
-4
1.5
-1.4
NaN

//Boolean

true
false

//Undefined

undefined

//Null

null

//COMPARADORES => Devuelven booleanos

420 > 210
420 < 210
420 <= 420
"serenisima" == "la martona"
"serenisima" == "Serenisima"
"pepe" != "lucas"

//Operadores aritmeticos

// + - * / %

// - * / % => Siempre devuelven numeros

//+ sumar => devuelve un numero, Ocurre cuando no hay string
//+ concatenar => devuelve un string, Ocurren en presencia de unn string

//Variables => un espacio reservado en la memoria para almacenar un dato (o mas de uno)

//var
/* var nombre, numeroFavorito
console.log(nombre)
var numeroFavorito       //Declaramos una variable de tipo var, se inicializo en undefined
var nombre = "pepe"
nombre = "juan"
var nombre = "lucas" */

//Nos autoinicializa en undefined si no le asignamos valor
//Nos permite reasignarla
//Nos permite la redeclaracion
//Tiene hoisting automatico

//let

/* console.log(nombre)
let nombre = "juan"
nombre = "pepe" */

//Nos autoinicializa en undefined si no le asignamos valor
//Nos permite reasignarla
//NO permite la redeclaracion
//NO tiene hoisting automatico

//const

/* console.log(nombre)
const nombre = "pepe" */

//NO se autoinicializa en undefined si no le asignamos valor
//NO permite reasignarla
//NO permite la redeclaracion
//NO tiene hoisting automatico


/* var nombre
let apellido = "pepe"
const PI = 3.14 */


//Condicionales / control de flujos
/* let enojado = false
console.log("hola")
console.log("Como estas?")

if(enojado){
    console.log("yo no estoy bien")
}
else{
    console.log("Yo estoy bien")
}
 */

let decision = prompt("Ingrese una decision")

if(decision == 1){
    console.log("Seleccionaste al personaje Martin")
}
else if (decision == 2){
    console.log("seleccionaste al personaje Pepe")
}
else if(decision  == 3){
    console.log("Seleccionaste al persnaje Maria")
}
else{
    console.log("Error: Decision invalida")
}