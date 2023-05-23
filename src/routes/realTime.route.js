import {Router} from 'express';
import ProductManager from '../managers/ProductManager.js';

const productManager = new ProductManager;
const realTimeRouter = Router();


realTimeRouter.get ("/", async (req,res) => {

        res.render('realtimeproducts', { 
            documentTitle: "WebSockets & Handlebars",
           
         });
       
})


export default realTimeRouter