/* JS es lenguaje de programacion */
/* JS es un lenguaje de alto nivel */
/* JS es un lenguaje Interpretado */
/* JS es un lenguaje case sensitive */
/* console.log("hola mundo") */

//Tipos de datos primitivos
//String
"hola"
"1"
'hola'
/* `hola` */
"lo que quieras1nullundefined"
//Number
1
4
-12
0.2
NaN
//Boolean
true
false
//Undefined
undefined
//Null
null

//Comparadores => siempre devuelven boolean

210 > 420 
210 < 420 
210 >= 210

//Operadores aritmeticos

// + - * / %

//- * / % => Siempre devolver un number

// +  suma => Siempre devuelve un numero, Cuando hay ausencia de string

// + concatenacion => Siempre devuelve un string, Cuando hay prensencia de string

//Variables => Es un espacio reservado en la memoria para almacenar un dato (o mas de uno)

//Var
/* var nombre
var nombre
console.log(nombre)
var apellido 
nombre = "jose"  //Declaracion
console.log(nombre)
nombre = "pepe" //Asignacion */

//Inicializacion implicita 
//Hoisting automatico
//Permite la reasignacion
// Permite la redeclaracion

//Let


/* let nombre 
let nombre = "pepe"
console.log(nombre) */

//Inicializacion implicita 
// NO Hoisting automatico
//Permite la reasignacion
// NO Permite la redeclaracion

//Const


/* const nombre = "maria"
 console.log(nombre) */

// NO Inicializacion implicita 
// NO Hoisting 
// NO Permite la reasignacion
// NO Permite la redeclaracion


//Condicionales

/* let edad = 18

if(edad >= 18){
    console.log("Sos mayor de edad")
}
else if(edad < 18){
    console.log("sos menor de edad")
}
 */

let decision = prompt("ingrese un dato")

if(decision == 1){
    console.log("elegiste el personaje Pepe")
}
else if (decision == 2){
    console.log("elegiste el personaje Maria")
}
else if(decision == 3){
    console.log("elegiste el personaje Lucas")
}
else{
    console.log("error: decision no valida")
}