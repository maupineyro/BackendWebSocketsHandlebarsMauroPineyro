import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath (import.meta.url);
//console.log (`la ruta del archivo es ${__fileName}`)

const __dirNameViews = path.dirname(__fileName);
//console.log(__dirNameViews);

export default __dirNameViews


//para ejecutar hacer >>  node src/views/solutionDirName.js

//la ruta de directorio del archivo es: C:\Users\El Mauchu\Desktop\coder backend\websocket mauro piñeyro\src\views
