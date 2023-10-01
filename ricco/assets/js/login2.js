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


