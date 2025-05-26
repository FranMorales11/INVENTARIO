import {Router} from "express";
import { methodHTTP as facturasController } from "../controllers/facturas.controllers.js";
/* creamos el enrutador*/
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/",facturasController.getFacturas);

/* configuramos respuesta desde server metodo http post*/
router.post("/",facturasController.postFacturas);

/* ruta que recibe un parametro tipo get*/
router.get("/:id",facturasController.getFacture);

/* ruta que elimina un solo parametro */
router.delete("/:id", facturasController.deleteFacture);

/* ruta que actualiza por parametro*/
router.put("/:id", facturasController.updateFacturas);


/* hacemos disponible el router en toda la app*/
export default router;