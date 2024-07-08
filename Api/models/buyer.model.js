import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";


const buyerSchema=mongoose.Schema(
    {
        first_name:{type:String,required:true},
        last_name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
    },{timeStamp:true}
);
const Buyer=mongoose.model("Buyer",buyerSchema);
export default Buyer