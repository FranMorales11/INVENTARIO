import getConnection from "../db/database.js"
const getClientes = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, correo, telefono FROM clientes")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getClient = async (req, res)=>{
    try {
        console.log(req.params);
        const{id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, correo, telefono FROM clientes WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}


const postClientes = async (req, res)=>{
    try {
        const {nombre, correo, telefono} = req.body;

        const client = {nombre, correo, telefono}

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO clientes SET ?", client)
        
        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteClient = async (req, res)=>{
    try {
        console.log("id del Cliente a borrar",req.params);
        const{id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM clientes WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateClientes = async (req, res) =>{
    try {
        const {id} = req.params;

        const{nombre, correo, telefono} = req.body;
    
        const client = {nombre, correo, telefono}
    
        const connection = await getConnection();
    
        const result = await connection.query("UPDATE clientes SET ? WHERE id = ?",[client, id])
    
        res.json(result)
    
    } catch (error) {
        console.error("ERROR 500");
    }
    }

export const methodHTTP = {
    getClientes,
    postClientes,
    getClient,
    deleteClient,
    updateClientes
}