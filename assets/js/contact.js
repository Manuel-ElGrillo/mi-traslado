
  const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_AUTH_DOMAIN",

    databaseURL: "YOUR_DB_URL",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_STORAGE_BUCKET",

    messagingSenderId: "YOUR_SENDER",

    appId: "YOUR_APP_ID"

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

  



 

  
