import express from 'express';
import {Router} from 'express';

const homeRouter = Router();


homeRouter.get ('/', (req, res) =>{
    res.render ('home', 
    { documentTitle: "WebSockets & Handlebars"

    })
})


export default homeRouter