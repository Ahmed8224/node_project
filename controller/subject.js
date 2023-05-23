import department from "../models/department.js"
import subject from "../models/subject.js"



export const index =(req,res)=>{
    res.render('subject/all')
}


export const create = async(req,res)=>{

    const add= await subject.find().lean()
    res.render('create_subjects',{add})
}

export const store =  async(req, res)=> {
    const {name, code, department,prerequistie}= req.body;
     
    await subject.create({

      name,
      code,
      department,
      prerequistie

    })
     
// res.redirect('/subjects')


};

export const edit = async(req,res)=>{
    const {_id}=  req.params
    const editsubject= await subject.findById(_id).lean();
    const departments= await department.find().lean()
    res.render('edit_subject',{ departments,subject: editsubject})
}

export const update_subjcte =async(req, res)=> {
    const {name, code, department,prerequistie}= req.body;
     const {i_d}= req.params

     await subject.findByIdAndUpdate(_id, {$set: {name, code, department, prerequistie},});
       
     res.redirect('/update')
    }

export const deleteone= async (req, res)=> {
    const{_id}=req.params;
    await subject.findByIdAndDelete(_id);
    return res.redirect('/update')

}