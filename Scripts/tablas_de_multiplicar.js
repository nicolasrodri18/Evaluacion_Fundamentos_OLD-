// Función para generar y mostrar la tabla de multiplicar de un número dado
export let generarTabla = (numero) => {

    // Crear un arreglo para almacenar los resultados de la tabla
    let tabla = []

    // Llenar el arreglo con los resultados de la tabla de multiplicar
    for (let i = 0; i <= 10; i++){
        let valor = (i+1) * numero
        tabla.push(valor)
    }

    // Mostrar la tabla de multiplicar en la consola
    let b = 0
    for(let j = 1; j <= 10; j++){
        console.log(j + "*" +  numero + " = " + tabla[b])
        b++
    }
}