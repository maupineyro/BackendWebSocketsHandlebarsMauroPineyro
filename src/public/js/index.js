//este es el index.js de cliente

//socket (cliente)
let socket = io ()// este ya genera la conexión del evento 'connection'


const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita que el formulario se envíe al recargar

      const newProduct = { //crea el objeto newProduct con los valores del form
        title: document.getElementById('productTitle').value,
        description: document.getElementById('productDescription').value,
        code: document.getElementById('productCode').value,
        price: document.getElementById('productPrice').value,
        status: true, // por una actividad de entrega anterior, status siempre en true
        stock: document.getElementById('productStock').value,
        category:document.getElementById('productStock').value,
        thumbnail:document.getElementById('productImage').value,
        //id se debe agregar auto con el método
      };

      socket.emit('newProduct', newProduct); // Enviar datos del producto al servidor
      productForm.reset(); // Limpiar el formulario
    });









//funciones

//mostrar/ocultar descripción 
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

//
  