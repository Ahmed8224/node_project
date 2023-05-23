import { Schema, model } from "mongoose";

const student = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    academic_number:{
        type: Number,
        required: false,
    },
} ,
 {timestamps: true});
export default model("student",student);