// Importar las funciones desde los otros módulos
import { notas, calcularPromedio } from "./calcularPromedio.js";  
import {autenficacion} from "./autentificar_empresa.js"
import {generarTabla } from "./tablas_de_multiplicar.js"
import {calcularImpuestoUnitario} from "./calcular_impuesto.js"
import {consultarElementosArreglo} from "./consultar_elementos_arreglo.js"
// Variable para controlar el bucle del menú
let bandera = true;

// Crear un bucle para mostrar el menú hasta que el usuario decida salir
while (bandera) {
    // Mostrar el menú de opciones
    let opcion = prompt("Opciones:" +
    "\n1. Promedio Estudiante" +
    "\n2. Autentificacion Empresa" +
    "\n3. Tablas de Multiplicar" +
    "\n4. Calcular Impuestos" +
    "\n5. consultar elementos de un arreglo" +
    "\n6. Salir");

    // Manejar la opción seleccionada por el usuario
    switch (opcion) {
        case "1":
            // Opción 1: Calcular el promedio de un estudiante
            let notasEstudiante = notas();
            let promedio = calcularPromedio(notasEstudiante);
            alert(`Las notas del estudiante fueron ${notasEstudiante.notas_del_estudiante}. \n y el promedio del estudiante es: ${promedio}`);

            // Determinar el nivel del estudiante según el promedio
            if (promedio >= 4.5) {
                alert("El nivel del estudiante es: Alto");
            } 
            else if (promedio < 4.5 && promedio >= 3.0) {
                alert("El nivel del estudiante es: Medio");
            } 
            else {
                alert("El nivel del estudiante es: Bajo");
            }
            break;

        case "2":
            // Opcion 2: creamos un autenficacion y llamamos la funcion para verificarlo
            let mensajeAcceso = autenficacion();
            break;

        case "3":

            // Opcion 3: Solicitamos que ingrese el numero a manejar en la tabla y se llama la funcion que mostrara los resultados
            let numero = parseInt(prompt("Ingrese el numero al que se le mostrara su tabla de multiplicacion: "));
            let tabla = generarTabla(numero)
            break;
        
        case "4":
            // Opcion 4: Llamamos la funcion para calcular el impuesto unitario
            let impuesto = calcularImpuestoUnitario()
            break

        case "5":
            // Opcion 5: Llamamos la funcion para consultar elementos de un arreglo
            let consultarArreglo = consultarElementosArreglo()
            break;
        case "6":
            // Opción 6: Salir del menú
            bandera = false;
            alert("Saliendo del programa. ¡Hasta luego!");
            break;
            
        default:
            // Opción inválida
            alert("Opcion no valida")
            break;
    }
}