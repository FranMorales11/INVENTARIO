/* importamos el framerwork express*/
import express from "express"
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"
import clientesRoutes from "./routes/clientes.routes.js"
import detallesfacturaRoutes from "./routes/detalles_factura.routes.js"
import facturasRoutes from "./routes/facturas.routes.js"
import productosRoutes from "./routes/productos.routes.js"


/* asignamos a app toda funcionalidad para mi server web*/
const app =express();

/* setear un puerto a mi web server*/
app.set("port",5000)

/*Middleware*/
app.use(express.json());

/*rutas*/
app.use("/api/categorias",categoriaRoutes)
app.use("/api/clientes",clientesRoutes)
app.use("/api/detalles_factura",detallesfacturaRoutes)
app.use("/api/facturas",facturasRoutes)
app.use("/api/productos",productosRoutes)

app.get('/',(req,res)=>{
    res.send('RES API EN RENDER WITHOUT DATABASE ENDPOINTS')
})

/*CORS*/
app.use(cors());

/*  hacemos disponible a mi server app para toda la aplicaicon*/
export default app ;