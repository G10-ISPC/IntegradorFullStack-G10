// ----VALIDACION DE CORREO ELECTRÓNICO Y CONTRASEÑA EN LOGIN-------

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('logEmail');
    const contrasenaInput = document.getElementById('contrasenaIngreso');
    const nombreInput=document.getElementById('nombre');
    const apellidoInput= document.getElementById('apellido');
    const correoInput=document.getElementById ('correo');
    const direccionInput = document.getElementById('direccion');
    const barrioInput= document.getElementById('barrio');
    const localidadInput= document.getElementById ('localidad');
    const telefonoInput=document.getElementById ('telefono');
    const cpInput= document.getElementById ('cp');
    const passwordInput= document.getElementById ('password');
    const password2Input= document.getElementById ('password2');
    const mensajeError = document.getElementById('mensajeError');
    const submitButton = document.getElementById('submitButton');

    const emailRegExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nombreRegexpression= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    const apellidoRegExpression=  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const correoRegExpression= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const direccionRegExpression= /^[A-Za-z0-9\s]+$/g;
    const localidadRegExpression= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const barrioRegExpression= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const telefonoRegExpression= /^[0-9]+$/;
    const cpRegExpression= /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
    const passRegExpression= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const pass2RegExpression= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    function validarNombre(){
        const nombre = nombreInput.value;
        if (nombreRegexpression.test(nombre)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese un nombre válido por favor.';
           ocultarMensajeError();
        }  
    }

    function validarApellido(){
        const apellido = apellidoInput.value;
        if (apellidoRegExpression.test(apellido)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese un apellido válido por favor.';
           ocultarMensajeError();
        }  
    }

    function validarCorreo() {
        const correo = correoInput.value;
        if (correoRegExpression.test(correo)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese un E-mail válido por favor.';
           ocultarMensajeError();
        }
    }

    function validarDireccion() {
        const direccion = direccionInput.value;
        if (direccionRegExpression.test(direccion)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese una Dirección válida por favor.';
           ocultarMensajeError();
        }
    }

    function validarBarrio() {
        const barrio = barrioInput.value;
        if (direccionRegExpression.test(barrio)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese un nombre de Barrio válido por favor.';
           ocultarMensajeError();
        }
    }
 
    function validarLocalidad() {
        const localidad = localidadInput.value;
        if (direccionRegExpression.test(direccion)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese una Localidad válida por favor.';
           ocultarMensajeError();
        }
    }

    function validarTelefono() {
        const telefono = telefonoInput.value;
        if (telefonoRegExpression.test(telefono)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese un teléfono válido por favor.';
           ocultarMensajeError();
        }
    }

    function validarCp() {
        const cp = cpInput.value;
        if (cpRegExpression.test(cp)) {
            mensajeError.textContent = ''; 
         } else {
            mensajeError.textContent = 'Ingrese un Código Postal válido por favor.';
           ocultarMensajeError();
        }
    }

    function validarPassword(){
        const password = passwordInput.value;
        if (passRegExpression.test(password)) {
            mensajeError.textContent='';
        }else{
            mensajeError.textContent='La contraseña debe contener 8 caracteres, e incluir números y letras mayúsculas o minúsculas';
            ocultarMensajeError();
         }
     }

     function validarPassword2(){
        const inputPassword1 = document.getElementById('password');
	    const inputPassword2 = document.getElementById('password2');

        if(inputPassword1.value == inputPassword2.value){
            mensajeError.textContent='';
        } else{
            mensajeError.textContent= 'Ambas contraseñas deben ser iguales';
            ocultarMensajeError();
        }

    }


    function validarEmail() {
        const email = emailInput.value;
        if (emailRegExpression.test(email)) {
            mensajeError.textContent = ''; 
        } else {
            mensajeError.textContent = 'Ingrese un e-mail válido por favor.';
            ocultarMensajeError();
        }
    }

    function validarContrasena(){
        const contrasena = contrasenaInput.value;
        if (passwordRegExpression.test(contrasena)) {
            mensajeError.textContent='';
        }else{
            mensajeError.textContent='La contraseña debe contener 8 caracteres, e incluir números y letras mayúsculas o minúsculas';
            ocultarMensajeError();
        }
    }


    /*Roles:
        1:Administrador
        2:Cliente */

        var listUsers= 
            [//nombre        apellido       correo      contraseña  rol
            ['NombreAdm1','ApellidoAdm1','administrador@gmail.com','1234Admi','1'],
            ['NombreCliente1','ApellidoCliente1','cliente@gmail.com','1234Cliente','2']
            ];
        
    


    nombreInput.addEventListener('input', validarNombre);
    apellidoInput.addEventListener('input', validarApellido);
    correoInput.addEventListener('input', validarCorreo);
    direccionInput.addEventListener('input', validarDireccion);
    barrioInput.addEventListener('input', validarBarrio);
    localidadInput.addEventListener('input', validarLocalidad);
    telefonoInput.addEventListener('input', validarTelefono);
    cpInput.addEventListener('input', validarCp);
    passwordInput.addEventListener('input', validarPassword);
    password2Input.addEventListener('input', validarPassword2);
    emailInput.addEventListener('input', validarEmail);
    contrasenaInput.addEventListener('input', validarContrasena);


    submitButton.addEventListener('click', function(event) {
        if (emailRegExpression.test(emailInput.value) && passwordRegExpression.test(contrasenaInput.value) ) {
            if (emailInput.value==listUsers[0][2] && contrasenaInput.value==listUsers[0][3] && listUsers[0][4]=="1"){
            window.location= "administrador.html";
           window.alert('¡Bienvenido Administrador!');
            }
            if(emailInput.value==listUsers[1][2] && contrasenaInput.value==listUsers[1][3] && listUsers[1][4]=="2") {
                    window.location= "../index.html";
                    window.alert('Ricco Burgers valora a cada uno de sus clientes, ¡Bienvenido!');
            }
            else{
            mensajeError.textContent = 'Su correo no posee una cuenta, debe registrarse.';}
            //emailInput.value = '';
            //contrasenaInput.value = '';
            //mensajeError.textContent = '';
            
        } else {
            event.preventDefault(); 
            mensajeError.textContent = 'E-mail o contraseña incorrecta.';
            ocultarMensajeError();
        }
    });


    function ocultarMensajeError() {
        setTimeout(function() {
            mensajeError.textContent = '';
        }, 3000);
    }

});

// =====================================================================