import express from 'express';
import {Router} from 'express';
import ProductManager from '../managers/ProductManager.js';

const homeRouter = Router();
const productManager = new ProductManager;


homeRouter.get ('/', async (req, res) =>{
    let fullCollection = await productManager.getProducts();
    console.log(fullCollection);
    res.render ('home', 
    { documentTitle: "WebSockets & Handlebars",
    products: fullCollection
    })
})


export default homeRouter