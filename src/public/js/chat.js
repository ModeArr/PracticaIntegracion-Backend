const socket = io()
const contactForm = document.getElementById('message-form');
const userInput = document.getElementById('userInput')

//SocketIO
socket.on("message sent", (message) => {
    const articleAdd = `<div class="flex mb-2">
    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
        <p class="text-sm text-purple-600">
            ${message.user}
        </p>
        <p class="text-sm mt-1">
            ${message.message}
        </p>
    </div>
</div>`
    
document.getElementById("messagesView")
.insertAdjacentHTML('beforeend', articleAdd)
})


//SweetAlert
Swal.fire({
    title: "Identificate para ingresar",
    input: "text",
    text: "¡Ingresa tu nombre para identificarte en el chat!",
    inputValidator: (value) => {
      return !value && "¡Necesitas escribir un nombre de usuario para continuar!";
    },
    allowOutsideClick: false
  }).then((result) => {
    userInput.value = result.value
  })


//FORM
const apiPost = 'http://localhost:8080/api/messages';

contactForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const userInput = document.getElementById('userInput')
  const messageInput = document.getElementById('messageInput')
  console.log(messageInput.value)
  console.log(userInput)
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messageInput.value,
          user: userInput.value
        })
      }

      await fetch(apiPost, requestOptions)
      .then((res) => {
        console.log(res)
        messageInput.value = ""
      })
      .catch(error => {
        throw new Error(error)
      })
})