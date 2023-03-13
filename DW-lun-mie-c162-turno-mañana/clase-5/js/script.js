

/* JS es un lenguaje de programacion */
/* JS se ejecuta en el navegador */
/* JS es un lenguaje interpretado y lo interpreta el motor v8*/
/* JS es un lenguaje case sentive */

/*tipos de datos PRIMITIVOS */
/* Strings = "mi culple es el 24" */
/* Numbers = 24 7 -15 0.3 */
/* Boolean = true y false */
/* Undefined = undefined */
/* Null = null */

/* Operadores aritmeticos */
/* + - * / % */

/* 
- : RESTA
* : MULTIPLICACION
/ : DIVISION
% : RESTO O MODULO

DEVUELVEN SIEMPRE NUMEROS
*/

//+ SUMA => devuelve siempre un numero y ocurre con ausencia de strings
//+ Concatenacion => Devuelve un string y ocurre con presencia de strings 


//COMPARADORES devuelven booleans

//>, <, >=, <=
//==
//!=
//===
//!==

//Variables = Un espacio reservado en la memoria para almacenar un dato (o mas de uno)
//var, let y const
var nombre 
console.log(nombre)
var nombre = "pepe"
var nombre = "lucas"
var apellido = "suarez"
var nombreCompleto = nombre + " " + apellido

//Var tiene hoisting
//Vale undefined si no le asignamos nada
//permite la reasignacion
//Perimite la redeclaracion

//Let
/* console.log(numeroFavorito) */
let numero 
let numeroFavorito = 23
numeroFavorito = 24
//NO TIENE HOISTING
//No se puede redeclarar
//Se se asigna atuomaticamente el undefined cuando no se asigno nada

//const 
const botella = "coca cola"
/* botella = "coca cola" Error*/
const PI = 3.14
//NO TIENEN HOISTING
//NO se asigna undefined automaticamente
//NO se pueden redeclarar
//NO se pueden reasignar



//Funciones Nativas
/* console.log() */ //Enviar mensaje por consola
/* alert("Hola, soy una alerta") */ //Pop up de alerta
/*  prompt("ingrese algo") */ //Pop up para ingresar algo

//Condicionales

/* let edad = 18

if(edad >= 18){
    alert("sos mayor de edad")
}else if(edad < 18){
    alert("sos menor de edad")
} */


let decision = prompt("Ingrese una decision")

if(decision == 1 ){
    alert("Elegiste al personaje Jonh")

}else if(decision == 2 ){
    alert("elegiste al personaje Lucas")

}else if(decision == 3){
    alert("elegiste al personaje Pepe")

}else{
    alert("Decision no valida")
}

