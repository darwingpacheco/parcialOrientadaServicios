import pgService from "../server/pg.service.js"

export const getUsuario = async (username, password) => {
    const pg = new pgService();
    return await pg.connection.oneOrNone(`SELECT username FROM usuario 
    WHERE username = $1 AND password = $2`, [username, password])
}