//1)Imprime los números del 1 al 10
// const numArray=[];
// for(let i=1; i<=10; i++){
//     numArray.push(i);
// }
// console.log(numArray);

//2)Imprime los números pares del 2 al 20
// const numArray=[];
// for(let i=2; i<=20; i+=2){
//     numArray.push(i);
// }
// console.log(numArray);

//3)Imprime los números impares del 1 al 19
// const numArray=[];
// for(let i=1; i<20; i+=2){
//     numArray.push(i);
// }
// console.log(numArray);

//4)Imprime los números del 10 al 1 en orden inverso
// const numArray=[];
// for(let i=10; i>=1; i-=1){
//     numArray.push(i);
// }
// console.log(numArray);

//5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
// const numArray=[];
// for(let i=1; i<=10; i++){
//     numArray.push(i);
//     if(i==5){
//         break;
//     }
// }
// console.log(numArray);

//6)Imprime los números del 1 al 10, pero salta el 5
// const numArray=[];
// let i=0;
// while (i<10){
//     i++;
//     if(i==5){
//         continue;
//     }
//     numArray.push(i);
// }
// console.log(numArray);

//7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
// function decirNombre(nombre) {
//     return `Hola ${nombre}`;
// }
// let nombre='Nahum';
// decirNombre
// alert(decirNombre(nombre));

//8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
// function saludar(nombre){
//     return `Hola ${nombre}`;
// }
// let nombre='Nahum';
// alert(saludar(nombre));

//9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
//10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
//11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null

// function sumar(a,b){
//     return a + b;
// }
// console.log(sumar(4,5));

// function restar(a,b){
//     return a - b;
//}
// console.log(restar(5,4));

// function calcular(operacion,a,b){
//     if (operacion == "+"){
//         return sumar(a,b);
//     } if (operacion == "-"){
//         return restar(a,b);
//     } else {
//         return null;
//     }
//}
// console.log(calcular('+',5,5));
// console.log(calcular('-',5,5));
// console.log(calcular('*',5,5));

//13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

// let respuesta = prompt("Desea usar la calculadora?? si / no" );
// while (respuesta == 'si'){
//     let num1 = prompt('Ingrese un número');
//     let num2 = prompt('Ingrese otro número');
//     let a = parseInt(num1);
//     let b = parseInt(num2);
//     let operacion = prompt('Elige una operación (+ o -)');
//     alert(calcular(operacion,a,b));
//     respuesta = prompt('Desea volver a usar la calculadora? si / no');
// } 
// alert('El programa ha finalizado')

//12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
// function contarHasta(número){
//     for (let i=0; i <= número; i++){
//         console.log(i);
//     }
// }
// contarHasta(5);

//14) Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..
// const arrSerie = [];
// function imprimir(){
// for(let i=11; i<=275; i+=11){
//     arrSerie.push(i);
// }
// }
// imprimir();
// console.log(arrSerie);

//15) Hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.e ingresan valores por teclado.
// let num1 = prompt('Ingrese un número');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese otro número');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese otro número');
// num3 = parseInt(num3);
// let num4 = prompt('Ingrese otro número');
// num4 = parseInt(num4);
// let num5 = prompt('Ingrese el último número');
// num5 = parseInt(num5);

// let numbers = [num1, num2, num3, num4, num5];

// let numPar = [];

// let numImpar = [];

// console.log(`Los números ingresados son ${numbers}`);

// function parImpar(){
//     for (let i=0; i<numbers.length; i++){
//         if (numbers[i] % 2 === 0){
//             numPar.push(numbers[i]);
//         } else if(numbers[i]%2 != 0){
//             numImpar.push(numbers[i]);
//         }
//     }
// }

// parImpar();
// console.log(`Números pares: ${numPar.length} (${numPar})`);
// console.log(`Números impares: ${numImpar.length} (${numImpar})`);

//16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
// let num1 = prompt('Ingrese una altura');
// num1 = parseFloat(num1);
// let num2 = prompt('Ingrese otra altura');
// num2 = parseFloat(num2);
// let num3 = prompt('Ingrese otra altura');
// num3 = parseFloat(num3);
// let num4 = prompt('Ingrese otra altura');
// num4 = parseFloat(num4);
// let num5 = prompt('Ingrese otra altura');
// num5 = parseFloat(num5);

// let alturas = [num1, num2, num3, num4, num5];

// let cantidadAlturas = parseInt(alturas.length);

// let total = 0;

// function totalAlturas(){
    
//     for(let i=0; i < cantidadAlturas; i++){
        
//         total += alturas[i];
//     }
//     return total;
// }

// totalAlturas();

// let promedio = parseFloat(total / cantidadAlturas);

// alert(`El promedio de altura es: ${promedio}`);

// 17)Se cuenta con la siguiente información:
// 	Las edades de 5 estudiantes del turno mañana.
// 	Las edades de 6 estudiantes del turno tarde.
// 	Las edades de 11 estudiantes del turno noche.
// Las edades de cada estudiante deben ingresarse por teclado.
// a)	Obtener el promedio de las edades de cada turno (tres promedios).
// b)	Imprimir dichos promedios (promedio de cada turno).
// c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

// let turnoMañana = [];
// let turnoTarde = [];
// let turnoNoche = [];

// function agregarEstudiante(){
//     alert('A continuación ingrese las edades de los estudiantes del turno mañana');
//     for(let i=1; i <= 5; i++){
//         let estudiante = parseInt(prompt(`${i}° estudiante`));
//         turnoMañana.push(estudiante);
//     }
//     alert('A continuación ingrese las edades de los estudiantes del turno tarde');
//     for(let j=1; j <= 6; j++){
//         let estudiante1 = parseInt(prompt(`${j}° estudiante`));
//         turnoTarde.push(estudiante1);
//     }
//     alert('A continuación ingrese las edades de los estudiantes del turno noche');
//     for(let x=1; x <= 11 ; x++){
//     let estudiante2 = parseInt(prompt(`${x}° estudiante`));
//     turnoNoche.push(estudiante2);
// }
// }
// agregarEstudiante();
// console.log(turnoMañana);
// console.log(turnoTarde);
// console.log(turnoNoche);

// let suma = 0;
// let suma1 = 0;
// let suma2 = 0;

// function promedios(){
//     for(let i=0; i < turnoMañana.length; i++){
//         suma += turnoMañana[i];
//     }
//     for(let j=0; j < turnoTarde.length; j++){
//         suma1 += turnoTarde[j];
//     }
//     for(let x=0; x < turnoNoche.length; x++){
//         suma2 += turnoNoche[x];
//     }
//     return suma;
//     return suma1;
//     return suma2;
// }
// promedios();
// let promedioMañ = parseInt(suma / turnoMañana.length);
// let promedioTarde = parseInt(suma1 / turnoTarde.length);
// let promedioNoche = parseInt(suma2 / turnoNoche.length);

// alert(`El promedio de edad del turno mañana es: ${promedioMañ}`);
// alert(`El promedio de edad del turno tarde es: ${promedioTarde}`);
// alert(`El promedio de edad del turno noche es: ${promedioNoche}`);

// const mayorPromedio = () => {
//     if(promedioMañ > promedioTarde && promedioMañ > promedioNoche){
//         alert('El mayor promedio es del turno mañana');
//     } else if(promedioTarde > promedioNoche){
//         alert('El mayor promedio es del turno tarde');
//     } else {
//         alert('El mayor promedio es del turno noche');
//     }
// }
// mayorPromedio();



//23)Definí una función gano que reciba como argumento un array tragamonedas con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

//gano(['⭐', '⭐️', '⭐️', '💫', '✨'])
//false

