function ValidarInformacion() {
    let producto = document.getElementById("id_producto").value;
    let dreccion = document.getElementById("id_direccion").value;
    let nombre_usuario = document.getElementById("Nombre_usuario").value;
    let cantidad = document.getElementById("id_cantidad").value;
    let metodo_pago = document.getElementById("id_metodo_pago").value;
    let telefono = document.getElementById("id_Telefono").value;


    if (
        !producto || !dreccion ||
        !nombre_usuario || !cantidad ||
        !metodo_pago || !telefono 
    ) {
        console.log(
            `Informacion del Inicio de Sesion: \n
            ${producto} \n ${dreccion} \n
            ${nombre_usuario} \n ${cantidad} \n
            ${metodo_pago} \n ${telefono}`
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
            `Informacion del Inicio de Sesion: \n
            ${producto} \n ${dreccion} \n
            ${nombre_usuario} \n ${cantidad} \n
            ${metodo_pago} \n ${telefono}`
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