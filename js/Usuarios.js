function ValidarInformacion() {
    
    let nombres = document.getElementById("id_Nombre")?.value || "";
    let apellidos = document.getElementById("id_Apellidos")?.value || "";
    let tipo_documento = document.getElementById("id_tipo_documento")?.value || "";
    let documento_identidad = document.getElementById("id_Numero_documento")?.value || "";
    let telefono = document.getElementById("id_Telefono")?.value || "";
    let email = document.getElementById("id_Correo_electronico")?.value || "";
    let cargo = document.getElementById("id_cargo")?.value || "";
    let fecha_nacimiento = document.getElementById("id_fecha_nacimiento")?.value || "";
    let contraseña = document.getElementById("id_contraseña")?.value || "";
    
   
    let generoElemento = document.querySelector('input[name="genero"]:checked');
    let genero = generoElemento ? generoElemento.value : "";

  
    console.log("Validando campos...");

   
    if (
        !nombres || !apellidos ||
        !tipo_documento || !documento_identidad ||
        !telefono || !email ||
        !genero || !cargo ||
        !fecha_nacimiento || !contrasena
    ) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        console.log(
            `Información del Usuario Completa: \n 
        ${nombres} \n
        ${apellidos} \n
        ${documento_identidad} \n
        ${telefono} \n
        ${email} \n
        ${cargo} \n
        ${fecha_nacimiento} \n
        ${contraseña} \n
        ${nombres} \n`
        );
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Información Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}


document.getElementById("btnGuardar").onclick = ValidarInformacion;
