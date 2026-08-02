
export async function registerUser(req,res,next) {
    try {
    throw new Error ("Encounter a error while registering a user")
    } catch (err) {
        next(err)
    }
}
