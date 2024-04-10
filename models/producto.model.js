import pgService from "../server/pg.service.js"

export const getProductoModel = async () => {
    const pg = new pgService();
    return pg.connection.query(
        `SELECT * FROM producto`
    )
}

export async function getProductoUnicoModel(id){
    try{
        const pg = new pgService();
        return await pg.connection.oneOrNone(
            `SELECT * FROM producto WHERE id_producto = $1 `,
            [id]
    )
    }catch (error) {
        return `ESTO ES UN ERROR`;
    }
    
} 

export const postProductoModel = async (nombre, detalle,valor) => {
    const pg = new pgService();
    return pg.connection.query(
        `INSERT INTO producto (nombre, detalle, valor)
        VALUES
        ($1, $2, $3) RETURNING *`,
        [nombre, detalle, valor]
    )
}

export const updateProductoModel = async (id,nombre, detalle,valor) => {
    const pg = new pgService();
    return pg.connection.query(
        `UPDATE producto 
        SET 
        nombre = $2,
        detalle = $3,
        valor = $4
        WHERE id_producto = $1
        RETURNING *`,
        [id,nombre, detalle, valor]
    )
}
