function ValidarInformacion(event) {
    
    if (event) event.preventDefault();
    
    let nombres = document.getElementById("id_Nombre").value.trim();
    let apellidos = document.getElementById("id_Apellidos").value.trim();
    let tipo_documento = document.getElementById("id_tipo_documento").value.trim();
    let documento_identidad = document.getElementById("id_Numero_documento").value.trim();
    let telefono = document.getElementById("id_Telefono").value.trim();
    let email = document.getElementById("id_Correo_electronico").value.trim();
    let cargo = document.getElementById("id_cargo").value.trim();
    let fecha_nacimiento = document.getElementById("id_fecha_nacimiento").value.trim();
    
    
    let contrasena = document.getElementById("id_contraseña").value.trim();
    
    let generoElemento = document.querySelector('input[name="genero"]:checked');
    let genero = generoElemento ? generoElemento.value : "";

    
    if (!nombres || !apellidos || !tipo_documento || !documento_identidad || !telefono || !email || !genero || !cargo || !fecha_nacimiento || !contrasena) {
        Swal.fire({
            icon: "error",
            title: "¡Campos vacíos!",
            text: "Tienes que llenar todos los datos para registrar al usuario.",
            timer: 2000
        });
        return;
    }

    
    if (!email.includes("@") || !email.includes(".")) {
        Swal.fire({
            icon: "error",
            title: "¡Correo incorrecto!",
            text: "Por favor escribe un correo electrónico válido.",
            timer: 2000
        });
        return;
    }

    
    if (!/^\d+$/.test(documento_identidad)) {
        Swal.fire({
            icon: "error",
            title: "¡Documento inválido!",
            text: "El número de documento solo debe contener números.",
            timer: 2000
        });
        return;
    }

   
    let fechaNac = new Date(fecha_nacimiento);
    let hoy = new Date();
    if (fechaNac > hoy) {
        Swal.fire({
            icon: "error",
            title: "¡Fecha incorrecta!",
            text: "La fecha de nacimiento no puede ser mayor al día de hoy.",
            timer: 2000
        });
        return;
    }

    
    console.log(`Usuario registrado con éxito: ${nombres} ${apellidos}`);

    Swal.fire({
        icon: "success",
        title: "¡Usuario Guardado!",
        text: "La información del usuario se registró correctamente.",
        timer: 2000
    });
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;

