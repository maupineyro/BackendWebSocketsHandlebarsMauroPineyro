//este consolelog se verá en el navegador
console.log("es el index.js de cliente/public")

let socket = io ()
socket.on('message', (data)=>{
console.log(data);
socket.emit ('msg', 'hola back soy el cliente')
})