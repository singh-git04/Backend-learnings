import dotenv from "dotenv"

dotenv.config()

function handleError(err, req, res, next){

    const response = {
        message: err.message
    }

    if(process.env.NODE_ENVIRONMENT === 'development'){
        response.stack = err.stack
    }

    res.status(err.status).json(response)





    // res.status(err.status).json({
    //     message: err.message,
    //     // stack : err.stack             //this we use only for developer side
    // })

     
}

export default handleError