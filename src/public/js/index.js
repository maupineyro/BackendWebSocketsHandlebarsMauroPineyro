//este consolelog se verá en el navegador
console.log("es el index.js de cliente/public")

let socket = io ()
socket.on('message', (data)=>{
console.log(data);
socket.emit ('msg', 'hola back soy el cliente')
})


function toggleDescripcion(button) {
    let descripcion = button.nextElementSibling;
  
    if (descripcion.style.display === 'none' || descripcion.style.display === '') {
      descripcion.style.display = 'block';
      button.innerText = 'Ocultar descripción';
      button.setAttribute('data-visible', 'true');
    } else {
      descripcion.style.display = 'none';
      button.innerText = 'Mostrar descripción';
      button.setAttribute('data-visible', 'false');
    }
  }
  