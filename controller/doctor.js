import doctor from "../models/doctor.js";

import subject from "../models/subject.js"


export const create =async(req,res)=>{

    const subjects=await  subject.find().lean();
    
    res.render('create_doctor',{subjects});
}



export const store =  async(req, res)=> {
    const {name, code,explained_subject}= req.body;
     
    await doctor.create({

      name,
      code,
      explained_subject

    })
     
// res.send("add doctor")



};

// export const createdoctor=(req,res)=>{
//     res.render('doctor/createdoctor')
// }