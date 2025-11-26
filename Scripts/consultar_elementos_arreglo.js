// Función para buscar un elemento en un arreglo
export const buscarElemento = (lista, elemento) => {

    // Recorrer el arreglo para buscar el elemento
    for (let i = 0; i < lista.length; i++) {

        // Verificar si el elemento actual es igual al elemento buscado
        if (lista[i] === elemento) {
            return true;
        }
    }

    // Retornar false si el elemento no se encuentra en el arreglo
    return false;
}

// Función para consultar elementos de un arreglo
export const consultarElementosArreglo = () => {

    // Solicitar la cantidad de elementos del arreglo y llenarlo
    let cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos que tendrá el arreglo: "));
    const listaElementos = [];

    // Llenar el arreglo con los elementos ingresados por el usuario
    for (let i = 0; i < cantidadElementos; i++) {
        let elemento = prompt(`Ingrese el elemento ${i + 1}: `);
        listaElementos.push(elemento);
    }

    // Solicitar el elemento a buscar en el arreglo
    let elementoBuscar = prompt("Ingrese el elemento que desea buscar en el arreglo: ");
    let encontrado = buscarElemento(listaElementos, elementoBuscar);

    // Mostrar el resultado de la búsqueda
    if (encontrado) {
        alert(`El elemento "${elementoBuscar}" fue encontrado en el arreglo.`);
    } 
    else {
        alert(`El elemento "${elementoBuscar}" no fue encontrado en el arreglo.`);
    }
}
