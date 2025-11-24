// Inicializar variables para el cálculo del promedio con su respectivo metodo
export let notas = () => {
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas del estudiante:"));
    let sumaNotas = 0;
    const notas_del_estudiante = [];

    // Recolectar las notas del estudiante
    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        notas_del_estudiante.push(nota);
    }

    // Calcular la suma de las notas
    for (let i = 0; i < notas_del_estudiante.length; i++) {
        sumaNotas += notas[i];
    }

    // Retornar la suma de las notas y la cantidad de notas
    return { sumaNotas, cantidadNotas, notas_del_estudiante };
};

// Función para calcular el promedio
export let calcularPromedio = ({ sumaNotas, cantidadNotas }) => {

    // Calcular el promedio y lo retornamos
    return sumaNotas / cantidadNotas;
}