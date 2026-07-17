// Funciones o functions

function saludar(){
    // Block code
    console.log("Hola alumnos de Sensei Tech")
}

saludar() // Invocacion

// Funciones con parametros

function saludarPersona(nombre){
    // Block code
    console.log("Hola " + nombre)
}

saludarPersona("Pao")
saludarPersona("Juan Carlos")

// Funciones que retornan valores

function sumar(num1, num2){
    return num1+num2
}

let resultado = sumar(5,3)
console.log(resultado)

sumar(2,2)

// Arrow functions (Playwright) -> Manera moderna de crear funciones

const multiplicar = (a,b) => {
    return a*b;
}

console.log("Multiplicacion: ", multiplicar(4,5))