function ValidarInformacion(event) {
    if (event) event.preventDefault();

    let tipo_documento = document.getElementById("tipo_documento").value.trim();
    let documento_identidad = document.getElementById("numero_documento").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    
    if (!tipo_documento || !documento_identidad || !contrasena) {
        Swal.fire({
            icon: "error",
            title: "¡Campos vacíos!",
            text: "Tienes que llenar todos los datos para entrar.",
            timer: 2000
        });
        return; 
    } 

  
    if (!/^\d+$/.test(documento_identidad)) {
        Swal.fire({
            icon: "error",
            title: "¡Documento inválido!",
            text: "La cédula o tarjeta solo debe tener números.",
            timer: 2000
        });
        return;
    }

    console.log(`Datos del Login: ${tipo_documento} - ${documento_identidad}`);

    
    Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: "Iniciaste sesión correctamente.",
        timer: 2000
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const btnGuardar = document.getElementById("btnGuardar");
    if (btnGuardar) {
        btnGuardar.addEventListener("click", ValidarInformacion);
    }
});

