// ----VALIDACION DE CORREO ELECTRÓNICO Y CONTRASEÑA EN LOGIN-------

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('logEmail');
    const contrasenaInput = document.getElementById('contrasenaIngreso');
    const mensajeError = document.getElementById('mensajeError');
    const submitButton = document.getElementById('submitButton');

    const emailRegExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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
            mensajeError.textContent='La contraseña debe contener entre 8 y 11 caracteres, e incluir números, letras mayúsculas y/o minúsculas';
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
            mensajeError.textContent = 'Su correo o contraseña no son correctos, porfavor verifique';}
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