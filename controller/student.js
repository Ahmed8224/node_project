import student from "../models/studentDB.js";

export const create =(req,res)=>{
res.render('student');
}
export const store = async(req,res)=>{
   
    const {name, password, academic_number}= req.body;
   await student.create({
        name,
        password,
        academic_number

    });
    // res.send("added");
    // console.log(name);
    }



