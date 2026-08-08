function ValidarInformacion(event) {
    
    if (event) event.preventDefault();

    let producto = document.getElementById("id_producto").value.trim();
    let dreccion = document.getElementById("id_direccion").value.trim();
    let nombre_usuario = document.getElementById("Nombre_usuario").value.trim();
    let cantidad = document.getElementById("id_cantidad").value.trim();
    let metodo_pago = document.getElementById("id_metodo_pago").value.trim();
    let telefono = document.getElementById("id_Telefono").value.trim();

    
    if (!producto || !dreccion || !nombre_usuario || !cantidad || !metodo_pago || !telefono) {
        Swal.fire({
            icon: "error",
            title: "¡Campos vacíos!",
            text: "Tienes que llenar todos los datos para registrar el pedido.",
            timer: 2000
        });
        return;
    }

    
    let numCantidad = parseInt(cantidad);
    if (isNaN(numCantidad) || numCantidad <= 0) {
        Swal.fire({
            icon: "error",
            title: "¡Cantidad incorrecta!",
            text: "La cantidad del pedido debe ser un número mayor a cero.",
            timer: 2000
        });
        return;
    }

    
    if (!/^\d+$/.test(telefono)) {
        Swal.fire({
            icon: "error",
            title: "¡Teléfono inválido!",
            text: "El número de teléfono solo debe contener números.",
            timer: 2000
        });
        return;
    }

  
    console.log(`Pedido guardado: ${producto} - Cantidad: ${numCantidad} - Cliente: ${nombre_usuario}`);

    Swal.fire({
        icon: "success",
        title: "¡Pedido Guardado!",
        text: "La información del pedido se registró con éxito.",
        timer: 2000
    });
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;
