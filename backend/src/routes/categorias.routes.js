import {Router} from "express";
import { methodHTTP as categoriasController } from "../controllers/categoria.controllers.js";
/* creamos el enrutador*/
const router = Router();

/* configuramos respuesta desde server metodo http get*/
router.get("/",categoriasController.getCategorias);

/* configuramos respuesta desde server metodo http post*/
router.post("/",categoriasController.postCategorias);

/* ruta que recibe un parametro tipo get*/
router.get("/:id",categoriasController.getCategory);

/* ruta que elimina un solo parametro */
router.delete("/:id", categoriasController.deleteCategory);

/* ruta que actualiza por parametro*/
router.put("/:id", categoriasController.updateCategoria);


/* hacemos disponible el router en toda la app*/
export default router;