import {Router} from "express";
import { methodHTTP as clientesController } from "../controllers/clientes.controllers.js";
/* creamos el enrutador*/
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/",clientesController.getClientes);

/* configuramos respuesta desde server metodo http post*/
router.post("/",clientesController.postClientes);

/* ruta que recibe un parametro tipo get*/
router.get("/:id",clientesController.getClient);

/* ruta que elimina un solo parametro */
router.delete("/:id", clientesController.deleteClient);

/* ruta que actualiza por parametro*/
router.put("/:id", clientesController.updateClientes);


/* hacemos disponible el router en toda la app*/
export default router;