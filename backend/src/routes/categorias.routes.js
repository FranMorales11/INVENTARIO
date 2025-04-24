import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";
/* creamos el enrutador*/
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/",categoriaController.getCategorias);

/* configuramos respuesta desde server metodo http post*/
router.post("/",categoriaController.postCategorias);

/* ruta que recibe un parametro tipo get*/
router.get("/:id",categoriaController.getCategory);

/* ruta que elimina un solo parametro */
router.delete("/:id", categoriaController.deleteCategory);

/* ruta que actualiza por parametro*/
router.put("/:id", categoriaController.updateCategoria);


/* hacemos disponible el router en toda la app*/
export default router;