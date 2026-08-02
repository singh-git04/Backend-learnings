import {body, validationResult} from "express-validator"

const validate = (req, res , next )=> {

     const error = validationResult(req)

     if(error.isEmpty()){
                return next()
            }

            res.status(400).json({
                error: error.array()
            })
}
 
 export const registerValidation =
    [
        body("username").isString().withMessage("username should be sting"),
        body("email").isEmail().withMessage("Email should be valid email address "),
        // body("password").isLength({max: 12,min: 6}).withMessage("Password lenght must be at least 6 characters max 12"),

        body("password").custom((value) =>{
            if(value.length<6){
                throw new Error("Password must be more then atleast 6 charcter")
            }

            const passwordRegix = /^(?=.*[A-Z])(?=.*\d).+$/
            if(!passwordRegix.test(value)){
                  throw new Error("password should contain at least one uppercase letter and one number")
            }
            return true
        }).withMessage("password should be at least 6 characters long and contain at least one uppercase letter and one number"),

        body("userId").isMongoId(),
        validate
    ]