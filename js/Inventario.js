function ValidarInformacion() {
    let categoria = document.getElementById("id_categoria").value;
    let codigo_prodt = document.getElementById("id_codigo_producto").value;
    let nombre_prodt = document.getElementById("id_nombre_producto").value;
    let descripcion_prodt = document.getElementById("id_descripcion_producto").value;
    let cantidad_prodt = document.getElementById("id_cantidad_producto").value;
    let precio_unitario = document.getElementById("id_precio_unitario_producto").value;
    let provedor = document.getElementById("id_provedor_producto").value;


    if (!categoria || !codigo_prodt || !nombre_prodt || !descripcion_prodt || !cantidad_prodt || !precio_unitario || !provedor) {
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
            `Informacion del Producto: \n
            ${categoria} \n
            ${codigo_prodt} \n
            ${nombre_prodt} \n
            ${descripcion_prodt} \n
            ${cantidad_prodt} \n
            ${precio_unitario} \n
            ${provedor}`
        );
        if (!/^[a-zA-Z]+$/.test(categoria)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(codigo_prodt)) {
            Swal.fire({
                 title: "Codigo del producto debe contener números",
                icon: "error"
            });
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 2000
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;