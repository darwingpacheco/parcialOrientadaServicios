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


export const updateProductValidator = checkSchema({
    nombre: {
      optional: true,
      isLength: {
        options: { min:3, max: 100 },
        errorMessage: 'El nombre debe tener como minimo 3 y máximo 100 caracteres'
      },
      errorMessage: 'Nombre no válido'
    },
    detalle: {
      optional: true,
      matches: {
        options: /^[a-zA-Z0-9\s]+$/, // Solo permite caracteres alfanuméricos y espacios
        errorMessage: 'El detalle solo puede contener letras, números y espacios'
      },
      errorMessage: 'El detalle no puede estar vacío'
    },
    valor: {
      optional: true,
      isFloat: {
        options: { min: 0 }, // Asegura que el valor sea un número positivo
        errorMessage: 'El valor debe ser un número positivo'
      },
      errorMessage: 'El valor debe ser un número válido'
    }
  });





