// Arrays = Arreglo

let frutas = ["Manzana", "Platano", "Uva", "Naranja", "Limon"] // Arreglo de String
console.log(frutas) // Imprimi todo el arreglo
console.log(frutas[3]) // Imprimir un solo valor

let numero = [3,4,6,1,4,0] // Arreglo de enteros
let bol = [true, false, false, true] // Arreglo de boleanos
let formulas = [3.1416, 3.5, 1.2, -3.23] // Arreglo de numeros reales

// funciones de arreglos

// Push -> Agregar un valor
frutas.push("Fresa")

// Pop -> Eliminar el ultimo actual del arreglo
frutas.pop(); // -> Elimino Fresa 

// shift -> Eliminar el primer valor
frutas.shift()

// unshift -> Agrega un valor al principio del arreglo o posicion 0
frutas.unshift("Fresa")
frutas.unshift("Pera")

console.log(frutas)

// Length = Tamaño del arreglo
console.log("Tamaño de arreglo frutas", frutas.length)

// includes -> Validar que un valor existe en el arreglo
let isFrutaExists = frutas.includes("Manzana") 
console.log("La Fruta existe?", isFrutaExists)

// JOIN - convertir en texto cualquier y se pueda una concatenacion
console.log(frutas.join("%"))

// Ejercio en Clase
let animales = ["perro", "conejo", "gato", "pez"]

/*
1- Imprimir Gato
2- Validar si perro existe
3- Agregar un nuevo animal e imprimir todo el arreglo en runtime
*/