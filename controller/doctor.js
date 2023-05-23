import department from "../models/department.js";
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

export const editdoctor = async(req,res)=>{
  const {_id}=  req.params
  const edit_doctor= await doctor.findById(_id).lean();
  const departments= await department.find().lean()
  res.render('edit_doctor',{ departments,doctor: edit_doctor})
}

export const update_doctor =async(req, res)=> {
  const {name, code, explained_subject}= req.body;
   const {i_d}= req.params

   await doctor.findByIdAndUpdate(_id, {$set: {name, code, explained_subject},});
     
   res.redirect('/edit_doctor')
  }

export const deleteone= async (req, res)=> {
  const{_id}=req.params;
  await doctor.findByIdAndDelete(_id);
  return res.redirect('/edit_doctor')

}

// export const createdoctor=(req,res)=>{
//     res.render('doctor/createdoctor')
// }


