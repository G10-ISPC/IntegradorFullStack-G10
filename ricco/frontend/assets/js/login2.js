//--------------------------------------------------------------------
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
             mensajeError.textContent = 'Ingrese un E-mail válido por favor.';
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
  
  
     emailInput.addEventListener('input', validarEmail);
     contrasenaInput.addEventListener('input', validarContrasena);
  
  
     submitButton.addEventListener('click', function(event) {
         if (emailRegExpression.test(emailInput.value) && passwordRegExpression.test(contrasenaInput.value)) {
             emailInput.value = '';
             contrasenaInput.value = '';
             mensajeError.textContent = '';
         } else {
             event.preventDefault(); 
             mensajeError.textContent = 'Ambos campos deben ser completados correctamente.';
             ocultarMensajeError();
         }
     });
  
  
     function ocultarMensajeError() {
         setTimeout(function() {
             mensajeError.textContent = '';
         }, 3000);
     }
  
  });
  
  
  function ocultarMensajeError() {
      setTimeout(function() {
          mensajeError.textContent = '';
      }, 3000);
  }
  
  