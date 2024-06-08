const d = document;
let nombreInput = d.querySelector("#nombre");
let apellidoInput = d.querySelector("#apellido");
let telefonoInput = d.querySelector("#telefono");
let correoInput = d.querySelector("#correo");
let contrasenaInput = d.querySelector("#contraseña");
let confirmarInput = d.querySelector("#confirmarContraseña");
let btnGuardar = d.querySelector("#registroForm button");
let correoInicioInput = d.querySelector("#correoInicio");
let contrasenaInicioInput = d.querySelector("#contraseñaInicio");
let btnIniciarSesion = d.querySelector("#inicioSesionForm button");

// Agregar evento click al botón de registro
btnGuardar.addEventListener("click", (event) => {
    event.preventDefault();
    let datos = validarFormularioRegistro();
    if (datos != null) {
        guardarDatos(datos);
    }
});

// Validar los campos del formulario de registro
function validarFormularioRegistro() {
    if (
        nombreInput.value === "" ||
        apellidoInput.value === "" ||
        telefonoInput.value === "" ||
        correoInput.value === "" ||
        contrasenaInput.value === "" ||
        confirmarInput.value === ""
    ) {
        alert("Todos los campos del formulario son obligatorios");
        return null;
    } else if (contrasenaInput.value !== confirmarInput.value) {
        alert("Las contraseñas no coinciden");
        return null;
    } else {
        let datosForm = {
            nombre: nombreInput.value,
            apellido: apellidoInput.value,
            telefono: telefonoInput.value,
            correo: correoInput.value,
            contrasena: contrasenaInput.value
        };

        console.log(datosForm);
        nombreInput.value = "";
        apellidoInput.value = "";
        telefonoInput.value = "";
        correoInput.value = "";
        contrasenaInput.value = "";
        confirmarInput.value = "";

        return datosForm;
    }
}

// Guardar datos en local storage
function guardarDatos(datos) {
    let usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
    let usuarioExistente = usuarios.find(usuario => usuario.correo === datos.correo);

    if (usuarioExistente) {
        alert("El usuario ya está registrado");
    } else {
        usuarios.push(datos);
        localStorage.setItem("Usuarios", JSON.stringify(usuarios));
        alert("Usuario registrado con éxito");
    }
}

// Agregar evento click al botón de inicio de sesión
btnIniciarSesion.addEventListener("click", (event) => {
    event.preventDefault();
    iniciarSesion();
});

// Iniciar sesión
function iniciarSesion() {
    let usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
    let correo = correoInicioInput.value;
    let contrasena = contrasenaInicioInput.value;
    let usuario = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasena);

    if (usuario) {
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir a la página principal de la aplicación o mostrar contenido específico
    } else {
        alert("Correo o contraseña incorrectos");
    }

    correoInicioInput.value = "";
    contrasenaInicioInput.value = "";
}