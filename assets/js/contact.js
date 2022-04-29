
  const firebaseConfig = {

    apiKey: "AIzaSyAfjwHEQqDIBOq51Es43Ow2YdRtZbLept8",

    authDomain: "mi-traslado-1.firebaseapp.com",

    databaseURL: "https://mi-traslado-1-default-rtdb.firebaseio.com",

    projectId: "mi-traslado-1",

    storageBucket: "mi-traslado-1.appspot.com",

    messagingSenderId: "799032553035",

    appId: "1:799032553035:web:caf8efaec1ab2de82e27ce"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  

  const contactFormDB = firebase.database().ref("contactForm");
  const formulario = document.querySelector("#contactForm");
  const alerta = document.querySelector(".formulario__succes");
  let nombreForm = document.querySelector("#nombre").value;
  let emailForm = document.querySelector("#email").value;
  let mensajeForm = document.querySelector("#mensaje").value;

  
  formulario.addEventListener("submit", submitFormulario);

  function submitFormulario (event) {
    event.preventDefault();

    guardarMensaje (nombreForm, emailForm, mensajeForm);

    alerta.style.display = "block";

    setTimeout( () => {
      alerta.style.display = "none";
    }, 3000);

    formulario.reset();

    console.log(nombreForm, emailForm, mensajeForm)
  }

  function guardarMensaje  (nombreForm, emailForm, mensajeForm) {
    let nuevoMensaje = contactFormDB.push();

    nuevoMensaje.set({
      nombreForm,
      emailForm,
      mensajeForm
    })
  }

  



 

  
