const notas1erSemestre = [8, 8, 5]
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
}

let contador2 = 0
for(let i = 0; i < notas2doSemestre.length; i = i + 1){
    contador2 = contador2 + notas2doSemestre[i]
}
let promedio2 = contador2 / notas2doSemestre.length
console.log("su promedio es de: " + promedio2)
if(promedio2 >= 7){
    console.log("Felicitaciones! aprobaste 💥💥")
}else{
    console.log("Nos vemos en febrero 👊")
}