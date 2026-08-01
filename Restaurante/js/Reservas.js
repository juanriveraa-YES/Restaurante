function ValidarInformacion() {
    let nombre_completo = document.getElementById("id_N_completo").value;
    let fecha_reserva = document.getElementById("id_fecha_reservas").value;
    let cantidad_personas = document.getElementById("id_cantidad_personas").value;

    if (
        !nombre_completo || // nombre_completo = "" || nombre_completo = null 
        !fecha_reserva ||
        !cantidad_personas 
    ) {
        console.log(
            `Informacion del de la Reserva: \n
            ${nombre_completo} \n
            ${fecha_reserva} \n
            ${cantidad_personas}`
        );
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        console.log(
            `Informacion de la Reserva: \n
            ${nombre_completo} \n
            ${fecha_reserva} \n
            ${cantidad_personas}`
        );
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;