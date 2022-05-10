// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//Animación Formulario.
function animarForm(){
  // Obtenemos los elementos input del formulario
  let input = document.querySelectorAll(".anim");

  //Recorro todos los input del formulario
  input.forEach(element => {
      if(element.value === ""){
        console.log(element);
    // Agregamos las clases form-error, animate__animated y animate__shakeX al input
        element.classList.add("animate__animated", "animate__shakeX");
    // Al acabar la animación, quitamos las clases animate__animated y animate__shakeX al input
        element.addEventListener("animationend",  function (){
          element.classList.remove("animate__animated", "animate__shakeX");
        });
      }
  }); 
}