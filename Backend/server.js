import  "./src/config/env.js";
import app from "./src/app.js";
import { connectDB } from "./src/config/DB.js";

const PORT = process.env.PORT || 3000

await  connectDB()

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})