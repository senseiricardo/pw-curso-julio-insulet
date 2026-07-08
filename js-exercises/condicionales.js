// CONDICIONAL

// IF-ELSE

// Ejercicio en clase: Calificacion

let calificacion = 60; //-> Integer

if (calificacion >= 90){ 
    // Block code - bloque de codigo (Verdadero)
    console.log("Excelente")
} else if (calificacion >=70){
    console.log("Aprobado") // (Verdadero)
}else{
    console.log("Reprobado") // (Falso)
}

// SWITCH

// Ejercicio opciones de pantalla
let option = 0;
switch(option){
    case 1:
    case 0:
        console.log("Maximizar la pantalla")
        break;
    case 2:
        console.log("Minimizar la pantalla")
        break; // La salida funcional de un block code
    case 3:
        console.log("Cerrar la pantalla")
        break;
    default:
        console.log("Opcion no valida, elegir opciones 1-3")
}

let dia = "Lunes"

switch(dia){
    case "Lunes":
        console.log("Hoy es Lunes");
        break;
    case "Martes":
        console.log("Hoy es Martes")
        break;
    default:
        console.log("Hoy es otro dia")
}

let url = "QA"

switch(url){
    case "QA":
    case "QA2":
        console.log("www.qa.com");
        break;
    case "DEV":
        console.log("www.dev.com")
        break;
    default:
        console.log("Hoy es otro dia")
}