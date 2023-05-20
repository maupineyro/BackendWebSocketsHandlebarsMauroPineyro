import {Router} from 'express';


const realTimeRouter = Router();


realTimeRouter.get ("/", async (req,res) => {
    res.render ('realtimeproducts',{
        documentTitle: "WebSockets & Handlebars",
    })
})


export default realTimeRouter