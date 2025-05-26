import getConnection from "../db/database.js"
const getDetallesFactura = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, factura_id, producto_id, cantidad, precio_unitario, subtotal FROM detalles_factura")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getDetail = async (req, res)=>{
    try {
        console.log(req.params);
        const{id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, factura_id, producto_id, cantidad, precio_unitario, subtotal FROM detalles_factura WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}


const postDetallesFactura = async (req, res)=>{
    try {
        const {factura_id, producto_id, cantidad, precio_unitario, subtotal} = req.body;

        const detail = {factura_id, producto_id, cantidad, precio_unitario, subtotal}

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO detalles_factura SET ?", detail)
        
        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteDetail = async (req, res)=>{
    try {
        console.log("id del detalle de la factura a borrar",req.params);
        const{id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM detalles_factura WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateDetallesFactura = async (req, res) =>{
    try {
        const {id} = req.params;

        const{factura_id, producto_id, cantidad, precio_unitario, subtotal} = req.body;
    
        const detail = {factura_id, producto_id, cantidad, precio_unitario, subtotal}
    
        const connection = await getConnection();
    
        const result = await connection.query("UPDATE detalles_factura SET ? WHERE id = ?",[detail, id])
    
        res.json(result)
    
    } catch (error) {
        console.error("ERROR 500");
    }
    }

export const methodHTTP = {
    getDetallesFactura,
    postDetallesFactura,
    getDetail,
    deleteDetail,
    updateDetallesFactura
}