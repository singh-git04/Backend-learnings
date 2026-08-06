import mongoose from "mongoose";

async function connectToDb() {
    const conn  = await mongoose.connect(process.env.MONGODB_URI)
    // .then(()=>{
    //     console.log("Connect to DB")
    // })

    console.log(`Mongoose Connected ${conn.connection.host}`)
}

export default connectToDb