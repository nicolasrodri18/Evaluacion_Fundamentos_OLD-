// Función para validar el acceso de la empresa
const validarAcceso = function() {
    // Solicitar la edad del usuario
    let edad = parseInt(prompt("Ingrese su edad:"));
    // Solicitar la contraseña del usuario
    let contraseña = prompt("Ingrese su contraseña:");
    const contraseñaValida = "Empresa123"; // Contraseña válida predefinida

    // Validar las condiciones de acceso
    if (edad >= 18 && contraseña === contraseñaValida) {
        return "Acceso concedido.";
    } else {
        return "Acceso denegado.";
    }
}

// Función para manejar la autenticación de la empresa
export let autenficacion = () => {
    let mensajeAcceso = validarAcceso();
    alert(mensajeAcceso);
}