import { Schema, model } from "mongoose";


const courseR = new Schema ({
    courseName:{
        type: String,
        required: true,
    },
},
{timestamps:true}
);



export default model('register',courseR);