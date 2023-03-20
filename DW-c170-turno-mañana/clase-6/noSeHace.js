let notasAcumuladas = 0

for(let i = 0; i < notas1erSemestre.length; i = i + 1){
    notasAcumuladas = notasAcumuladas + notas1erSemestre[i]
}

let promedio = notasAcumuladas/notas1erSemestre.length

console.log("el promedio final es: " + promedio)



let notasAcumuladas2 = 0

for(let i = 0; i < notas2doSemestre.length; i = i + 1){
    notasAcumuladas2 = notasAcumuladas2 + notas2doSemestre[i]
}

let promedio2 = notasAcumuladas2/notas2doSemestre.length

console.log("el promedio final es: " + promedio2)