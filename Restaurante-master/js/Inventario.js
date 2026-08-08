function ValidarInformacion(event) {
    
    if (event) event.preventDefault();

    let categoria = document.getElementById("id_categoria").value.trim();
    let codigo_prodt = document.getElementById("id_codigo_producto").value.trim();
    let nombre_prodt = document.getElementById("id_nombre_producto").value.trim();
    let descripcion_prodt = document.getElementById("id_descripcion_producto").value.trim();
    let cantidad_prodt = document.getElementById("id_cantidad_producto").value.trim();
    let precio_unitario = document.getElementById("id_precio_unitario_producto").value.trim();
    let provedor = document.getElementById("id_provedor_producto").value.trim();

    
    if (!categoria || !codigo_prodt || !nombre_prodt || !descripcion_prodt || !cantidad_prodt || !precio_unitario || !provedor) {
        Swal.fire({
            icon: "error",
            title: "¡Campos vacíos!",
            text: "Tienes que llenar todos los datos para guardar el producto.",
            timer: 2000
        });
        return; 
    }

    
    if (!/^[a-zA-Z\s]+$/.test(categoria)) {
        Swal.fire({
            icon: "error",
            title: "¡Categoría incorrecta!",
            text: "En este campo solo puedes escribir letras.",
            timer: 2000
        });
        return;
    }

   
    let numCodigo = parseInt(codigo_prodt);
    if (isNaN(numCodigo) || numCodigo <= 0) {
        Swal.fire({
            icon: "error",
            title: "¡Código incorrecto!",
            text: "El código debe ser un número entero mayor a cero.",
            timer: 2000
        });
        return;
    }

    
    let numCantidad = parseInt(cantidad_prodt);
    if (isNaN(numCantidad) || numCantidad < 0) {
        Swal.fire({
            icon: "error",
            title: "¡Cantidad incorrecta!",
            text: "La cantidad no puede ser un número negativo.",
            timer: 2000
        });
        return;
    }

    
    let numPrecio = parseFloat(precio_unitario);
    if (isNaN(numPrecio) || numPrecio <= 0) {
        Swal.fire({
            icon: "error",
            title: "¡Precio incorrecto!",
            text: "El precio del producto tiene que ser mayor a cero.",
            timer: 2000
        });
        return;
    }

   
    console.log("Producto guardado:", nombre_prodt, "Código:", numCodigo);

    Swal.fire({
        icon: "success",
        title: "¡Guardado!",
        text: "El producto se registró correctamente.",
        timer: 2000
    });
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;
