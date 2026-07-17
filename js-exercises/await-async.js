// Funcion Asincrona

async function saludar() {
    console.log("Hola") 
    // Leer un archivo
    // llamada a una API
    // Pagina web - WebDriver
    // Esperas del servidor 
}

saludar()

// Await

// EXAMPLE

function esperarDosSegundos(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Termino Ejecucion");
        }, 2000)
    });
}

async function ejecutarProceso() {
    console.log("Iniciando proceso...")
    const resultado = await esperarDosSegundos()
    console.log(resultado)
    console.log("Proceso terminado")
    
}

// await page.goto("http://google.com") -> Pagina
// await page.click(#login) - Objeto

ejecutarProceso()