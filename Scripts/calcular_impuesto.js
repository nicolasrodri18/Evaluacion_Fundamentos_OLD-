// Función para calcular el impuesto unitario de varios productos
export let calcularImpuestoUnitario = () => {

    // Inicializamos la variable totalproducto para acumular el total a pagar
    let totalproducto = 0

    // Solicitar la cantidad de productos adquiridos
    let totalproductos = parseInt(prompt("Ingresa la cantidad de productos adquiridos: "));

    // Bucle para ingresar el valor y porcentaje de impuesto de cada producto
    for (let i = 0; i < totalproductos; i++)
        {
            // Solicitar el valor del producto y el porcentaje de impuesto
            let valor = parseFloat(prompt("Ingresa el valor del producto: "))
            let porcentaje = parseFloat(prompt("Ingresa el porcentaje de impuesto: "))

            // Calcular el total a pagar incluyendo el impuesto y acumularlo
            totalproducto += valor + ((valor/100) * porcentaje)
        }

    // Mostrar el total a pagar por todos los productos
    alert(`Total a pagar: ${totalproducto}`)
}
