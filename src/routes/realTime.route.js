import {Router} from 'express';


const realTimeRouter = Router();


realTimeRouter.get ("/", (req,res) => {
    
    res.render ('realtimeproducts',{
        documentTitle: "WebSockets & Handlebars",
    })
})




export default realTimeRouter