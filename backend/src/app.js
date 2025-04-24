/* importamos el framerwork express*/
import express from "express"
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"

/* asignamos a app toda funcionalidad para mi server web*/
const app =express();

/* setear un puerto a mi web server*/
app.set("port",5000)

/*Middleware*/
app.use(express.json());

/*rutas*/
app.use("/api/categorias",categoriaRoutes)

/*CORS*/
app.use(cors());

/*  hacemos disponible a mi server app para toda la aplicaicon*/
export default app ;