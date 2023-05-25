import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: false,
    },
    
     departmet:{
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'department'
    },
    prerequistie:{
        type:String,
        required:false,
    },
    doctor:{
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'user'
    }

}, 
{timestamps: true});

export default model("subject",subject)