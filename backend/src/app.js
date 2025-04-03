/* importamos el framerwork express*/
import express from "express"

/* asignamos a app toda funcionalidad para mi server web*/
const app =express();

/* setear un puerto a mi web server*/
app.set("port",5000)

/*  hacemos disponible a mi server app para toda la aplicaicon*/
export default app;