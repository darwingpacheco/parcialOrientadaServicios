import pgService from "../server/pg.service.js"

export const getProductoModel = async () => {
    const pg = new pgService();
    try{
        const products = await pg.connection.query(`select * from producto`);
        if (products[0]) {
            return {success:"Productos encontrados", status:200, data:products} ;
        }
        return  {message:"No hay productos", status:200 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
}

export async function getProductoUnicoModel(id){
    const pg = new pgService();
    try{
        const products = await pg.connection.query(`select * from producto where id_producto = $1`,[id]);
        if (products[0]) {
            return {success:"Productos encontrados", status:200, data:products} ;
        }
        return  {message:"Productos no encontrados", status:404 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
} 

export const deleteProductModel = async(productId) =>{
    const pg = new pgService();
    try{
        const product = await  pg.connection.query(`select * from producto where id_producto = $1`,[productId]);
        if (product[0]) {
            await pg.connection.query(`delete from producto where id_producto = $1`,[productId]);
            return {success:"Producto eliminado exitosamente", status:200, msg:"Delete product"};
        }
        return {message:"Producto no encontrado", status:404 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
}

export const deleteAllProducts = async() =>{
    const pg = new pgService();
    try{
        const product = await  pg.connection.query(`select * from producto`);
        if (product[0]) {
            await pg.connection.query(`delete from producto`);
            return {success:"Productos eliminados exitosamente", status:200, msg:"Delete Allproduct"};
        }
        return {message:"Productos no encontrado", status:404 };
    }catch(e){
        return  {error:"Error interno del servidor", status:500 };
    }
}

export const createProductModel = async(data) =>{
    const pg = new pgService();
    try{
        const product = await pg.connection.query(`select * from producto where nombre = $1`, [data.nombre]);
        if (product[0]) {
            return {error: "Ya existe un producto con ese nombre", status: 409, msg: "Product don't save"};
        }
        if(!data.nombre || !data.detalle || !data.valor){
            return {error : "Todos los atributos del producto son obligatorios y el precio debe ser mayor a cero",status : 400, msg:"Product don't save"};
        }
        await pg.connection.query(`insert into producto(nombre,detalle,valor) values($1,$2,$3)`, [data.nombre, data.detalle, data.valor]);
        return {success: "Producto guardado exitosamente", status: 201, msg: "Product save"};
    } catch(e){
        console.log(e);
        return {error: "Error interno del servidor", status: 500, msg: "Product don't save"};
    }
}

export const updateProductoModel = async (id, data) => {
    const pg = new pgService();
    try{
        const product = await  pg.connection.query(`select * from producto where id_producto =$1`,[id]);
        if (!product[0]) {
            return {success:"Producto no existente ", status:404, msg:"Product don't update"};
        }else if(!data.nombre || !data.detalle || !data.valor){
            return {error : "Todos los atributos del producto son obligatorios y el precio debe ser mayor a cero",status : 400, msg:"Product don't update"};
        }else if(product[0].nombre == data.nombre){
            await pg.connection.query(`update producto set nombre=$2, detalle=$3, valor=$4 where id_producto =$1`,[id, data.nombre, data.detalle, data.valor]);
            return {success:"Producto actualizado exitosamente", status:200};
        }else{
            const product1 = await  pg.connection.query(`select * from producto where nombre = $1`,[data.nombre]);
            if (product1[0]) {
                return {error:"Ya existe un producto con ese nombre", status:409, msg: "Product don't update"};
            }
            await pg.connection.query(`update producto set nombre=$2, detalle=$3, valor=$4 where id_producto =$1`,[id, data.nombre, data.detalle, data.valor]);
            return {success:"Producto actualizado exitosamente", status:200}
        }
    }catch(e){
        return {error:"Error interno sel servidor", status:500, msg:"Product don't update"};
    }
  };
