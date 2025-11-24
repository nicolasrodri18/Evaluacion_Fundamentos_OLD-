export let calcularImpuestoUnitario = () => {
    let totalproducto = 0
    let totalproductos = parseInt(prompt("Ingresa la cantidad de productos adquiridos: "));
    for (let i = 0; i <= totalproductos; i++)
        {
            let valor = parseFloat(prompt("Ingresa el valor del producto: "))
            let porcentaje = parseFloat(promptI("Ingresa el porcentaje de impuesto: "))
            totalproducto += valor + ((valor/100) * porcentaje)
        }
    alert(totalproducto)
}
