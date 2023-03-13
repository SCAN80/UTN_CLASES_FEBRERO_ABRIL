/* Lenguaje de programacion */
//JS ES UN LENGUAJE DE ALTO NIVEL => se parece al lenguaje humano
/* JS Es un lenguaje interpretado */
/* JS es un lenguaje case sensitive */
/* console.log("hola mundo")
alert("Hola") */


//TIPOS DE DATOS PRIMITIVOS:
//Strings
/* "hola mundo"
'hola'
`kike` */
//Numbers
9
-12
3.14
NaN
//Boolean
true
false
//Undefined
undefined
//Null
null

//COMPARADORES => siempre devuelven booleanos

210 > 420
210 < 420
420 <= 420
"Serenisima" == "la martona"
"serenisima" == "Serenisima"
"pepe" != "maria"
1 === "1"
true !== "1"

//Operadores Aritmeticos

//+ - / *  %


//- / *  % => Siempre devuelven number

//+ suma => siempre devuelven numeros, siempre y cuando haya ausencia de strings

//+ concatenacion => devuelve un string y ocurre bajo presencia de uno o dos strings


//VARIABLES: Son un espacio reservado en la memoria donde almacenamos datos (pueden ser mas de uno)

//VAR
/* var nombre 
console.log(nombre)
var numeroFavorito 
nombre = "pepe" */
/* var apellido = "suarez"  *///Declaramos la variable apellido e inicializamos su valor en "suarez"
/* var apellido 
var apellido = "lucas"
apellido = "surezcito" */
//La viariable var tiene hoisting
//Tienen inicializacion implicita 
//Permite la redeclaracion
//Permite la reasignacion

//LET
/* let apellido 
let nombre = "pepe"
nombre = "lucas" */

//No tiene hoisting automatico 
//No permite redeclaracion
//Permite la reasignacion
//Tienen inicializacion implicita 
//CONST

/* const nombre = "lucas"
console.log(nombre) */


//No tiene hoisting
//No permite redeclaracion
//NO Permite la reasignacion
//NO Tienen inicializacion implicita


//Condicionales


/* let edad = 26

if(edad >= 18){
    console.log("sos mayor de edad")
}
else if(edad < 18){
    console.log("Sos menor de edad")
} */

let decision = prompt("Ingrese una decision")

if(decision == 1){
    alert("Seleccionaste al personaje Lucas")
}
else if(decision == 2){
    alert("Seleccionaste al personaje Pepe")
}
else if(decision == 3){
    alert("Seleccionate a la personaje Marta")
}
else{
    alert("Error: Decision no valida")
}