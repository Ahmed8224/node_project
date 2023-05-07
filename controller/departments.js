import department from "../models/department.js";

export const create =(req,res)=>{
res.render('Department_Manage');
}
export const store = async(req,res)=>{
   
    const {name,code} =req.body;
   await department.create({
        name,
        code
    });
    // res.send("added");
    // console.log(name);
    }