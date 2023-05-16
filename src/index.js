//Imports
import express from "express";
import {engine} from "express-handlebars";
import __dirNameViews from "./views/solutionDirName.js";
import homeRouter from "./routes/home.route.js";

//Seteo de App y handlebars
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine ("handlebars", engine());
app.set ("view engine", "handlebars");
app.set ("views", __dirNameViews);






//App Routes
app.use ('/home', homeRouter); //debe agregar todos los productos agregados hasta el momento
//app.use ('/realtimeproducts', realtimeRouter); //debe trabajar con webSocket y mostrar cambios a tiempo real


//listen
app.listen (PORT, () =>{
    console.log (`Server running on ${PORT}`)
})