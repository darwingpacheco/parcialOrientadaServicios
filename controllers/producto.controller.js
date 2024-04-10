import { getProductoModel, getProductoUnicoModel, postProductoModel, updateProductoModel } from "../models/producto.model.js";


export const getProduct = async (req,res) => {
    let data = await getProductoModel();
    res.status(200).json({msg : `esto es getProduct`, data:data});
}

export const getProductoUnico = async (req,res) => {
    let { id } = req.params;
    let data = await getProductoUnicoModel(id);
    res.status(200).json({msg : `esto es getProductoUnico`, data: data});
}

export const postProducto = async (req,res) => {
    let {detalle, nombre, valor} = req.body;
    let data = await postProductoModel(nombre, detalle, valor)
    res.status(200).json({msg : `esto es postProducto`, data:data});
}

export const updateProducto = async (req, res) => {
    let {detalle, nombre, valor} = req.body;
    let { id } = req.params;
    let data = await updateProductoModel(id,nombre, detalle, valor)
    res.status(200).json({msg : `esto es updateProduct`, data:data});
}

export default {
    getProduct,
    getProductoUnico,
    postProducto,
    updateProducto
}