export let generarTabla = (numero) => {
    let tabla = []
    for (let i = 0; i <= 10; i++){
        let valor = (i+1) * numero
        tabla.push(valor)
    }
    let b = 0
    for(let j = 1; j <= 10; j++){
        console.log(j + "*" +  numero + " = " + tabla[b])
        b++
    }
}