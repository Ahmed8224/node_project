import department from "../models/department.js"
import subject from "../models/subject.js"



export const index =async(req,res)=>{
     
//    const {token}=console.log(req.cookies);
//    try{
// var decoded=jwt.verify(token,process.env.JWT_SECRET);
//    }catch (error){
// return res.send('incorrect token');

//    }
// console.log(decoded);
   const subjects=await subject.find({doctor: req.user._id},{name:1}).lean();
   
    
    res.render('all',{subjects});
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
      prerequistie,
      doctor: req.user._id,

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
     const {_id}= req.params

     await subject.findByIdAndUpdate(_id, {$set: {name, code, department, prerequistie},});
       
     res.redirect('/update')
    }

export const deleteone= async (req, res)=> {
    const{_id}=req.params;
    await subject.findByIdAndDelete(_id);
    return res.redirect('/update')

}