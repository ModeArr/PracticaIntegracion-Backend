const socket = io()

//SocketIO

//SweetAlert
let userCon;

Swal.fire({
    title: "Identificate para ingresar",
    input: "text",
    text: "¡Ingresa tu nombre para identificarte en el chat!",
    inputValidator: (value) => {
      return !value && "¡Necesitas escribir un nombre de usuario para continuar!";
    },
    allowOutsideClick: false
  }).then((result) => {
    user = result.value
  });


//FORM
const apiPost = 'http://localhost:8080/api/messages';

const contactForm = document.getElementById('message-form');
const messagesView = document.getElementById('messagesView');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  formData.append(user, )

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      responseMessage.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});