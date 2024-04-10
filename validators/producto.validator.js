import { checkSchema } from "express-validator";

export const postProductoValidator = checkSchema(
    {
        nombre: {
            errorMessage : "Nombre no valido",
            notEmpty: true,
            isLength :  {
                errorMessage: "el tamaño debe ser minimo 1",
                Options: { min: 1, max: 100}
            },

        },
        valor: {
            matches: { options: /^[0-9]+$/ },
            errorMessage: "Valor no valido",
        }
    },
    ["body"]

);

export const getProductoUnicoValidator = checkSchema(
    {
        id: {
            errorMessage : "debe ingresar id del producto",
            notEmpty: true,
            isLength :  {
                errorMessage: "debe ingresar id del producto",
                Options: { min: 1, max: 100}
            },

        },
    },
    ["params"]
);