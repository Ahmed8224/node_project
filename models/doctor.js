import { Schema, model } from "mongoose";

const doctor=new Schema({
    name:{
        type:String,
        required:true,
    },
    code:{
        type:Number,
        required:false,
    },
    explained_subject:{
        type: Schema.Types.ObjectId,
        required:false,
        ref: 'subject'

    }
})

export default model('doctor',doctor)