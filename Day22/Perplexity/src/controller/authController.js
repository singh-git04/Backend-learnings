import userModel from "../model/user.model.js"
import sendEmail from "../services/mail.service.js"
import jwt from "jsonwebtoken"

// Register Controller
export async function register(req, res) {
    const { username, email, password } = req.body

    const isExistingUser = await userModel.findOne(
        {
            $or: [
                { username }, { email }
            ]
        }
    )
    if (isExistingUser) {
        return res.status(400).json({
            message: "User already exists with this username and email",
            success: false,
            err: "User already exists"
        })
    }


    const user = await userModel.create({
        username, email, password
    })

    const emailVerification = jwt.sign({
        email: user.email
    }, process.env.JWT_SECRET)

    await sendEmail({
        to: email,
        subject: 'Welcome to Perplexity',
        html: `<h2>Hi ${username}, 👋</h2>
            <p>Thank you for registering with <strong>Perplexity</strong>.</p>
            <p>We're excited to have you with us and can't wait for you to get started.</p>
            <p>Please, verify the email by the link given below:</p>
            <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerification}">Verify Email</a>
            <p>Best regards,<br><strong>Team Perplexity</strong></p>`
    })

    res.status(200).json({
        message: "User registered successfully",
        success: true,
        user: {
            id: user._id,
            user: user.username,
            email: user.email,

        }
    })
}

// login
export async function login(req, res) {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "Invalid email or password",
            success: false,
            err: "User not found"
        })
    }

    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
        return res.status(404).json({
            message: "Invalid email or passwrod",
            success: false,
            err: "Invalid Password"
        })
    }

    if (!user.verified) {
        return res.status(401).json({
            message: "Please verify your email before login",
            success: false,
            err: "Invalid Token"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.username
    }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.cookie("token", token)

    res.status(200).json({
        message: "User logged-in Successfully",
        success: true,
        user: {
            id: user._id,
            user: user.username,
            email: user.email
        }
    })
}

/// getme
export async function getMe(req,res) {
    const userId = req.user.id

    const user = await userModel.findById(userId).select("-password")

    if (!user) {
        return res.status(400).json({
            message: "User not found",
            success: false,
            err: "User not found"
        })
    }

    res.status(200).json({
        message: "User details fetched successfully",
        success: true,
        user
    })
}

// Verify Email controller
export async function verifyEmail(req, res) {
    try {
        const { token } = req.query

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            email: decoded.email
        })

        if (!user) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
                err: "User not found"
            })
        }

        user.verified = true
        await user.save()

        const html =
            `<h1>Email Verified Successfully!</h1>
        <p>Your email has been verified. You can now log in to your account.</p>
        <a href="http://localhost:3000/login">Go to Login</a>`

        return res.send(html)
    } catch (err) {
        res.status(400).json({
            message: "Invalid or expired token",
            success: false,
            err: err.message
        })
    }

}
