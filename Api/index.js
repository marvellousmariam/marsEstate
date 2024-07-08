import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import buyerRouter from './routes/buyer.routes.js';
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected")

}).catch((err)=>{
    console.log(err)
 
})

const app = express();




app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
app.use('/api/buyer',buyerRouter)