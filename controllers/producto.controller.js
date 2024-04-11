import { getProductoModel, deleteProductModel, getProductoUnicoModel, createProductModel, updateProductoModel, deleteAllProducts } from "../models/producto.model.js";


export const getProduct = async (req,res) => {
    const userId = req.params.userId;
    let data = await getProductoModel(userId);
    res.status(200).json({msg : `esto es getProduct`, data:data});
}

export const getProductoUnico = async (req,res) => {
    let { id } = req.params;
    let data = await getProductoUnicoModel(id);
    res.status(200).json({msg : `esto es getProductoUnico`, data: data});
}

export const deleteProduct = async (req,res) => {
    console.log("Delete product");
    const productId = req.params.id;
    let data = await deleteProductModel(productId);
    res.status(data.status).send(data);
}

export const deleteProductAll = async (req, res) => {
        let data = await deleteAllProducts();
        res.status(data.status).send(data);
}

export const postProducto = async (req,res) => {
    console.log("save product");
    let data = req.body; // Acceder a los datos de la solicitud POST desde req.body
    let response = await createProductModel(data); // Pasar los datos a la función createProductModel
    res.status(response.status).send(response);
}

export const updateProducto = async (req, res) => {
    const id = req.params.id;
    let response = await updateProductoModel(id, req.body)
    res.status(response.status).send(response);
}

export default {
    getProduct,
    getProductoUnico,
    deleteProduct,
    deleteProductAll,
    postProducto,
    updateProducto
}