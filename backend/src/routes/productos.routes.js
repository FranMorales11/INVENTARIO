import {Router} from "express";
import { methodHTTP as productosController } from "../controllers/productos.controllers.js";
/* creamos el enrutador*/
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/",productosController.getProductos);

/* configuramos respuesta desde server metodo http post*/
router.post("/",productosController.postProductos);

/* ruta que recibe un parametro tipo get*/
router.get("/:id",productosController.getProduct);

/* ruta que elimina un solo parametro */
router.delete("/:id", productosController.deleteProduct);

/* ruta que actualiza por parametro*/
router.put("/:id", productosController.updateProductos);


/* hacemos disponible el router en toda la app*/
export default router;