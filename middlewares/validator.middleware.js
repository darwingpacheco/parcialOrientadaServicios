import { validationResult } from "express-validator";

export const validate = ( validation ) => async(req,res, next) => {
    await Promise.all(
        validation.map( (val) => val.run(req))
    )

    const error = validationResult(req);
    if(error.isEmpty()){
        return next();
    }

    res.status(422).json({
        success: false,
        errors: error
    });
}