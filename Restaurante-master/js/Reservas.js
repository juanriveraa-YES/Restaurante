function ValidarInformacion(event) {
    
    if (event) event.preventDefault();

    let nombre_completo = document.getElementById("id_N_completo").value.trim();
    let fecha_reserva = document.getElementById("id_fecha_reservas").value.trim();
    let cantidad_personas = document.getElementById("id_cantidad_personas").value.trim();

    
    if (!nombre_completo || !fecha_reserva || !cantidad_personas) {
        Swal.fire({
            icon: "error",
            title: "¡Campos vacíos!",
            text: "Tienes que llenar todos los datos para crear la reserva.",
            timer: 2000
        });
        return;
    }

    
    let numPersonas = parseInt(cantidad_personas);
    if (isNaN(numPersonas) || numPersonas <= 0) {
        Swal.fire({
            icon: "error",
            title: "¡Cantidad incorrecta!",
            text: "El número de personas debe ser mayor a cero.",
            timer: 2000
        });
        return;
    }

   
    let fechaSeleccionada = new Date(fecha_reserva);
    let fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); 

    if (fechaSeleccionada < fechaActual) {
        Swal.fire({
            icon: "error",
            title: "¡Fecha incorrecta!",
            text: "No puedes hacer una reserva en un día que ya pasó.",
            timer: 2000
        });
        return;
    }

    
    console.log(`Reserva guardada para: ${nombre_completo} el día ${fecha_reserva}`);

    Swal.fire({
        icon: "success",
        title: "¡Reserva Guardada!",
        text: "La reserva se registró correctamente.",
        timer: 2000
    });
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;
