// ---------------------------VALIDACION DE REGISTRO DE USUARIO-------
//-----------------asignamos cada campo de registro.html a una variable-----------------
document.addEventListener('DOMContentLoaded', function() {
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
      const submitButton = document.getElementById('submitButton');
      const mensajeError = document.getElementById('mensajeError');

   
    //-------------------asignamos las expresiones regulares regex para cada campo--------------------------
       const nombreRegexpression= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
       const apellidoRegExpression=  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
       const correoRegExpression= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       const direccionRegExpression= /^[A-Za-z0-9\s]+$/g;
       const barrioRegExpression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; 
       const localidadRegExpression= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;        
       const telefonoRegExpression= /^[0-9]+$/;
       const cpRegExpression= /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
       const passRegExpression= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
       const pass2RegExpression= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    /*-----------Roles:------------
        1:Administrador
        2:Cliente */

        var listUsers= 
            [//nombre        apellido       correo      contraseña  rol
            ['NombreAdm1','ApellidoAdm1','administrador@gmail.com','1234Admi','1'],
            ['NombreCliente1','ApellidoCliente1','cliente@gmail.com','1234Cliente','2']
            ];

    
    //---------- validamos cada variable con su respectivo expresion regular regex ----------  
       function validarNombre(){
           const nombre = nombreInput.value;
           if (nombreRegexpression.test(nombre)) {
               mensajeError.textContent = ''; 
            } else {
               mensajeError.textContent = 'Ingrese solo letras mayusculas y minusculas.';
              ocultarMensajeError();
           }  
       }
   
       function validarApellido(){
           const apellido = apellidoInput.value;
           if (apellidoRegExpression.test(apellido)) {
               mensajeError.textContent = ''; 
            } else {
               mensajeError.textContent = 'Ingrese solo letras mayusculas y minusculas.';
              ocultarMensajeError();
           }  
       }

        function validarCorreo() {
            const correo = correoInput.value;
            if (correoRegExpression.test(correo)) {
                const correoExistente = listUsers.some(user => user[2] === correo);
                if (correoExistente) {       
                    mensajeError.textContent = 'El correo ya está registrado. Por favor, inicia sesión.';             

                } else {
                    mensajeError.textContent = '';                    
                }
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
               mensajeError.textContent = 'Comience con letra mauyscula, seguido de minusculas y el número de altura.';
               ocultarMensajeError();
           }
       }
   
       function validarBarrio() {
           const barrio = barrioInput.value;
           if (barrioRegExpression.test(barrio)) {
               mensajeError.textContent = ''; 
            } else {
               mensajeError.textContent = 'Ingrese solo letras y números. No caracteres.';
               ocultarMensajeError();
           }
       }
    
       function validarLocalidad() {
           const localidad = localidadInput.value;
           if (localidadRegExpression.test(localidad)) {
               mensajeError.textContent = ''; 
            } else {
               mensajeError.textContent = 'Ingrese solo letras y números. No caracteres.';
               ocultarMensajeError();
           }
       }
   
       function validarTelefono() {
           const telefono = telefonoInput.value;
           if (telefonoRegExpression.test(telefono)) {
               mensajeError.textContent = ''; 
            } else {
               mensajeError.textContent = 'Ingrese solo números, sin caracteres .';
               ocultarMensajeError();
           }
       }
   
       function validarCp() {
           const cp = cpInput.value;
           if (cpRegExpression.test(cp)) {
               mensajeError.textContent = ''; 
            } else {
               mensajeError.textContent = 'Ingrese cinco dígitos.';
               ocultarMensajeError();
           }
       }
   
       function validarPassword(){
           const password = passwordInput.value;
           if (passRegExpression.test(password)) {
               mensajeError.textContent='';
           }else{
               mensajeError.textContent='La contraseña debe contener entre 8 y 12 caracteres, e incluir números, letras mayúsculas y/o minúsculas';
               ocultarMensajeError();
            }
        }
   
        function validarPassword2(){
           const inputPassword1 = document.getElementById('password');
           const inputPassword2 = document.getElementById('password2');
//-------------------alidamos que sean iguales la contraseña y su verificacion------------------------
           if(inputPassword1.value == inputPassword2.value){
               mensajeError.textContent='';
           } else{
               mensajeError.textContent= 'Ambas contraseñas deben ser iguales';
               ocultarMensajeError();
           }
   
       }

 
   // ----------------------quedamos a la escucha de cada campo para validar---------------------------------------
   
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

//-----------------------Enviar a login-------------------------

submitButton.addEventListener('click', function(event) {
               
        if (nombreRegexpression.test(nombreInput.value) &&
         apellidoRegExpression.test(apellidoInput.value) && 
         correoRegExpression.test(correoInput.value) && 
         direccionRegExpression.test(direccionInput.value) &&
         barrioRegExpression.test(barrioInput.value) &&
         localidadRegExpression.test(localidadInput.value)&&
         telefonoRegExpression.test(telefonoInput.value) &&
         cpRegExpression.test(cpInput.value) &&
         passRegExpression.test(passwordInput.value) &&
         pass2RegExpression.test(password2Input.value)) {

           // console.log('Formulario válido. Redirigiendo a login.html');
            window.location.href = "login.html";
            window.alert('¡Bienvenido a Ricco Burgers!');
        }else {
                   event.preventDefault(); 
                   mensajeError.textContent = '';
                   ocultarMensajeError();
               }
             
           });


/*Roles:
        1:Administrador
        2:Cliente 

        var listUsers= 
            [//nombre        apellido       correo      contraseña  rol
            ['NombreAdm1','ApellidoAdm1','administrador@gmail.com','1234Admi','1'],
            ['NombreCliente1','ApellidoCliente1','cliente@gmail.com','1234Cliente','2']
            ];
        

        function enviarFormulario(event) {
            
            mensajeExito.textContent = 'Datos enviados exitosamente.';
            window.location.href = 'login.html';
        }
            
        submitButton.addEventListener('click', enviarFormulario);*/
            






    // // creamos Lista para almacenar los datos
    // const listaUsuarios = [];

    //     function guardarUsuario() {
    //     const usuario = {
    //         nombre: nombreInput.value,
    //         apellido: apellidoInput.value,
    //         correo: correoInput.value,
    //         direccion: direccionInput.value,
    //         barrio: barrioInput.value,
    //         localidad: localidadInput.value,
    //         telefono: telefonoInput.value,
    //         cp: cpInput.value,
    //         password: passwordInput.value,
    //         password2: password2Input.value,
    //     };

    //     // Verificamos si el correo ya existe en la lista
    //     const correoExiste = listaUsuarios.some(user => user.correo === usuario.correo);

    //     if (correoExiste) {
    //         mensajeError.textContent = 'El correo ya existe.';
    //         console.log('EXISTE...!')
    //         return false; // Retorna false para prevenir el envío del formulario
    //     }   
        
    //     listaUsuarios.push(usuario);
    //     return true; // Retorna true para permitir el envío del formulario
    //     }

    // ////// escucha 
    // submitButton.addEventListener('click', function(event) {
    //     event.preventDefault(); // Previene el envío del formulario

    //     if (guardarUsuario()) {
    //         console.log(guardarUsuario())
    //         // Elegir que accion hacer
    //         // Como envio los datos al servidor o redirigir a otra página
    //         console.log('Usuario guardado correctamente:', listaUsuarios);
    //     }
    // });

    function ocultarMensajeError() {
        setTimeout(function() {
            mensajeError.textContent = '';
        }, 3000);
    }

  });