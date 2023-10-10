// ---------------LLAMADO A FUNCIONES----------------
document.getElementById("in").addEventListener("click", ingresar);
document.getElementById("re").addEventListener("click", registrar);

// ------------CAJA INGRESO Y REGISTRO---------------
let cajaIngreso = document.getElementById('ingreso');
let cajaRegistro = document.getElementById('registro');
let boton = document.getElementById('btn');

function ingresar(){
    cajaIngreso.style.left = "27px";
    cajaRegistro.style.right = "-350px";
    boton.style.left = "0px";
}

function registrar(){
    cajaIngreso.style.left = "-350px";
    cajaRegistro.style.right = "25px";
    boton.style.left = "150px";
}

// =================================================================
// ----------------VALIDACION DE CORREO ELECTRÓNICO-----------------

const emailInput = document.getElementById('logEmail');
const mensajeError = document.getElementById('mensajeError');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


function validarEmail() {
    const email = emailInput.value;
    if (emailRegex.test(email)) {
        mensajeError.textContent = ''; 
    } else {
        mensajeError.textContent = 'Ingrese un E-mail válido por favor.';
        
    }
}

emailInput.addEventListener('input', validarEmail);


// =====================================================================