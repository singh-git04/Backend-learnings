import userModel from "../model/user.model.js"
import sendEmail from "../services/mail.service.js"


async function register(req,res){
    const {username, email, password} = req.body

    const isExistingUser = await userModel.findOne(
        {
            $or:[
                {username},{email}
            ]
        }
    )
    if(isExistingUser){
        res.status(400).json({
            message: "User already exists with this username and email",
            success: false,
            err: "User already exists"
        })
    }


    const user = await userModel.create({
        username, email, password
    })
     
    await sendEmail({
        to:email,
        subject: 'Welcome to Perplexity',
        html:  `<h2>Hi ${username}, 👋</h2>
            <p>Thank you for registering with <strong>Perplexity</strong>.</p>
            <p>We're excited to have you with us and can't wait for you to get started.</p>
            <p>Best regards,<br><strong>Team Perplexity</strong></p>`
    })
 

    res.status(200).json({
        message: "User registered successfully"
    })
}
export default {
    register
}


