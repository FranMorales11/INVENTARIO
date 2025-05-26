import {Router} from "express";
import { methodHTTP as detallesfacturaController } from "../controllers/detalles_factura.controllers.js";
/* creamos el enrutador*/
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/",detallesfacturaController.getDetallesFactura);

/* configuramos respuesta desde server metodo http post*/
router.post("/",detallesfacturaController.postDetallesFactura);

/* ruta que recibe un parametro tipo get*/
router.get("/:id",detallesfacturaController.getDetail);

/* ruta que elimina un solo parametro */
router.delete("/:id", detallesfacturaController.deleteDetail);

/* ruta que actualiza por parametro*/
router.put("/:id", detallesfacturaController.updateDetallesFactura);


/* hacemos disponible el router en toda la app*/
export default router;