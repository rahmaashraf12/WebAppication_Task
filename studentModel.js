import { Schema,model } from "mongoose";
const studentScheme=new Schema({
    name:{
        type:String,
        required:true
    },
    
},{timestamps:true});
export const studentmodel=model('myStudents',studentScheme)
 