import {Router} from "express";
import ProductManager from "../managers/ProductManager.js";

const productManager = new ProductManager;
const productRouter = Router();
let socket = io ()

//POST (en post method, desde Body, para "subir" un producto desde cliente)
productRouter.post ("/", async (req,res) =>{
let newProduct = req.body;
res.send (await productManager.addProducts(newProduct))
console.log (newProduct)
})

//GET (para mostrar los productos guardados)
productRouter.get ("/", async (req,res) =>{
    let limit = parseInt(req.query.limit); // tomo el limit del req de navegación, parseInt para pasar el string a número
    let fullCollection = await productManager.readProducts(); // es el total de los productos guardados hasta el momento
    let limitCollection =fullCollection.slice (0, limit); // slice para mostrar productos con limit

    limit ? res.send (await limitCollection) : res.send (await productManager.getProducts());
    socket.emit ('limit', limitCollection);
    socket.emit ('getProducts', fullCollection);
   
})

//GET by ID (encontrar producto por su Id en products.json)
productRouter.get ("/:id", async (req,res) =>{
    let id = req.params.id;
    res.send (await productManager.getProductById(id))

})

//DELETE (para borrar productos de products.json)
productRouter.delete ("/:id", async (req,res) =>{
    let id= req.params.id;
    res.send (await productManager.deleteProducts(id))
})

//PUT (para modificar algun producto sin cambiar el id)
productRouter.put ("/:id", async (req,res) =>{
    let id= req.params.id;
    let updateProductPut = req.body;
    res.send (await productManager.updateProducts(id, updateProductPut))
})

export default productRouter

//comprobaciones

//cargo http://localhost:8080/api/products

//cargo http://localhost:8080/api/products/2      (no lo tiene que encontrar por el id nanoid)

//cargo http://localhost:8080/api/products/793f2b4c

//cargo http://localhost:8080/api/products/?limit=3 