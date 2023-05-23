//Imports
import express from "express";
import {engine} from "express-handlebars";
import http from 'http';
import {Server} from "socket.io";
import __dirNameViews from "./views/solutionDirName.js";
import __dirNamePublic from "./public/publicDirName.js";
import homeRouter from "./routes/home.route.js";
import realTimeRouter from "./routes/realTime.route.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import ProductManager from "./managers/ProductManager.js";

const ProductManagerServer = new ProductManager;

//Seteo de App y handlebars
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine ("handlebars", engine());
app.set ("view engine", "handlebars");
app.set ("views", __dirNameViews);

//Public
app.use(express.static(__dirNamePublic));

//App Routes
app.use ('/home', homeRouter); //debe agregar todos los productos agregados hasta el momento
app.use ('/realtimeproducts', realTimeRouter); //debe trabajar con webSocket y mostrar cambios a tiempo real
app.use ("/api/products", productRouter);
app.use ("/api/cart", cartRouter);

//Socket IO
const server = http.createServer(app);
const io = new Server(server);



 
//socket (server)
io.on ('connection', async (socket) =>{ // metodo on, escucha eventos, en este caso el evento 'connection'
    console.log ('connection: User conectado');
    
    const products = await ProductManagerServer.getProducts();
    
  socket.emit('initialProducts', products);// Emitir la lista de productos actual al cliente que se conecta
    

    socket.on('newProduct', (newProduct)=>{ //debe escuchar el evento emitido por el cliente que trae el objeto newProduct
        ProductManagerServer.addProducts(newProduct);
        console.log("el producto enviado via socket es:", newProduct);

    })

    

    

})

//listen
server.listen (PORT, () =>{
    console.log (`Server running on ${PORT}`)
})