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




    export const editstudent = async(req,res)=>{
        const {_id}=  req.params
        const edit_student= await student.findById(_id).lean();
    
        res.render('edit_student',{ student: edit_student})
      }
      
      export const update_student =async(req, res)=> {
        const {name, password, academic_numbe}= req.body;
         const {i_d}= req.params
      
         await student.findByIdAndUpdate(_id, {$set: {name, password, academic_numbe},});
           
         res.redirect('/edit_student')
        }
      
      export const delet_student= async (req, res)=> {
        const{_id}=req.params;
        await student.findByIdAndDelete(_id);
        return res.redirect('/edit_student')
      
      }



