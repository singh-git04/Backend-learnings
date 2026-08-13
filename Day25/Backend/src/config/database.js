import mongoose from "mongoose";


export async function connectToDB() {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log(`Mongoose Connected`)
    })
}