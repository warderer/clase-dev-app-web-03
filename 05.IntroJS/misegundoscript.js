var saludo = "Hola Delfines"; // Esto es un String
var sueldo = 3000; // Esto es un número
var mesaludo = true; // Esto es un booleano
var nomesaludo = false; // Esto es un booleano
console.log(saludo);


// DIFERENCIA ENTRE LET Y VAR
var a = 5; 
var b = 10; 

if (a === 5) { 
  let a = 4; // El alcance es dentro del bloque if 
  var b = 1; // El alcance es global 

  console.log(a);  // a vale 4 
  console.log(b);  // b vale 1 
}  

console.log(a); // a vale 5 
console.log(b); // b vale 1 


//CONSTANTES
const gravedad = 9.81;
//const gravedad = 10; // Esto da Error, no se puede redeclarar una constante
console.log(gravedad);


// OUTPUT: ALERT
// Muestra una ventana en pantalla con el mensaje o valor que yo indique.
//const miNombre = prompt("¿Cual es tu nombre?"); // Prompt sirve para pedir un valor al usuario
//var edad = parseInt(prompt("¿Cual es tu edad?")); // Cualquier valor en Prompt lo toma como un String
//var edad = parseInt(edad); // parseInt convierte un String a Int(numero)
//edad = edad + 10; //Sumo 10 años a la edad para ver el resultado
//console.log(typeof (edad));
// alert("Que tal, soy un Alert");
//alert("Hola " + miNombre + ", mi edad es " + edad + ". La gravedad es: " + gravedad);


// OPERADORES ARITMETICOS
var suma = 3 + 5;
var resta = 3 - 5;
var multiplicacion = 4 * 5;
var division = 10 / 2;


// CONDICIONALES
const semaforoActual = prompt("Escribe el SEMAFORO: ROJO, VERDE, AMARILLO");

function colorSemaforo(color) {
    if (color === "VERDE") {
        console.log("El semaforo esta en verde")
    } else if (color === "AMARILLO") {
        console.log("El semaforo esta en amarillo")
    } else if (color === "ROJO"){
        console.log("El semarofo es rojo")
    } else {
        console.log("No pusiste un color de semaforo correcto")
    }
}

colorSemaforo(semaforoActual);

