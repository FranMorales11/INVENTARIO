import getConnection from "../db/database.js"
const getFacturas = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, cliente_id, fecha, total FROM facturas")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getFacture = async (req, res)=>{
    try {
        console.log(req.params);
        const{id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, cliente_id, fecha, total FROM facturas WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}


const postFacturas = async (req, res)=>{
    try {
        const {cliente_id, fecha, total} = req.body;

        const facture = {cliente_id, fecha, total}

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO facturas SET ?", facture)
        
        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteFacture = async (req, res)=>{
    try {
        console.log("id de la Factura a borrar",req.params);
        const{id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM facturas WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateFacturas = async (req, res) =>{
    try {
        const {id} = req.params;

        const{cliente_id, fecha, total} = req.body;
    
        const facture = {cliente_id, fecha, total}
    
        const connection = await getConnection();
    
        const result = await connection.query("UPDATE facturas SET ? WHERE id = ?",[facture, id])
    
        res.json(result)
    
    } catch (error) {
        console.error("ERROR 500");
    }
    }

export const methodHTTP = {
    getFacturas,
    postFacturas,
    getFacture,
    deleteFacture,
    updateFacturas
}