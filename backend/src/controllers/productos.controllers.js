import getConnection from "../db/database.js"
const getProductos = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, precio, stock, CategoriaID FROM productos")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getProduct = async (req, res)=>{
    try {
        console.log(req.params);
        const{id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, precio, stock, CategoriaID FROM productos WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}


const postProductos = async (req, res)=>{
    try {
        const {nombre, precio, stock, CategoriaID} = req.body;

        const product = {nombre, precio, stock, CategoriaID}

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO productos SET ?", product)
        
        res.json(result)

    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteProduct = async (req, res)=>{
    try {
        console.log("id del producto a borrar",req.params);
        const{id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id = ?",id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateProductos = async (req, res) =>{
    try {
        const {id} = req.params;

        const{nombre, precio, stock, CategoriaID} = req.body;
    
        const product = {nombre, precio, stock, CategoriaID}
    
        const connection = await getConnection();
    
        const result = await connection.query("UPDATE productos SET ? WHERE id = ?",[product, id])
    
        res.json(result)
    
    } catch (error) {
        console.error("ERROR 500");
    }
    }

export const methodHTTP = {
    getProductos,
    postProductos,
    getProduct,
    deleteProduct,
    updateProductos
}