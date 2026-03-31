import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await  mongoose.connect(process.env.MONGODB_URI,{
            dbName:"Eventa"
        })

        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error in database connection",error)
    }
}
