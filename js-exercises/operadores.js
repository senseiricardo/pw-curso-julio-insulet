/*

1- Operador artimetico
2- Operador de comparacion
3- Operador logico
4- Operador de asignacion

*/

// OPERADOR ARITMETICO 

let num1 = 10;
let num2 = 3;

// suma
console.log("Suma:", num1 + num2);

// resta
console.log("Resta:", num1 - num2);

// Multiplicacion
console.log("Multiplicacion:", num1 * num2);

// division
console.log("Division:", num1 / num2);

// modulo (residuo de una division)
console.log("Modulo:", num1 % num2);

// Operador de comparacion

let edad = 25;

console.log("¿Edad es igual a 25?", edad == 25);
console.log("¿Edad es igual a 25?", edad === 25.0);
console.log("¿Edad es igual a 25?", edad != 25);
console.log("¿Edad es mayor a 25?", edad <= 25);

// Operadores logicos

// Se usan para combinar condiciones

let tieneLicencia = true;
let tieneAuto = false;

// AND (&&)
console.log("El usuario puede conducir (AND)?", tieneLicencia && tieneAuto)

// OR (||) - al menos una condicion sea verdadera
console.log("El usuario puede conducir (OR)?", tieneLicencia || tieneAuto)

// NOT (!) - invertir el valor boolean
console.log("El usuario puede conducir (NOT)?", tieneLicencia && !tieneAuto)

// OPERADOR DE ASIGNACION
let puntos = 10;

// Sumar 5 al valor actual
puntos += 5
console.log("Sumar 5", puntos)

// Restar 5 al valor actual
puntos -= 5
console.log("Restar 5", puntos)

// Multiplicar por 5 al valor actual
puntos *= 5
console.log("Multiplicar 5", puntos)

// Divider entre 5 al valor actual
puntos /= 5
console.log("Dividir 5", puntos)