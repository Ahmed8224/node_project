import { Router } from "express";
import { create, delet_student, editstudent, store } from "../Controller/student.js";
import doctor from "../models/doctor.js";
import studentDB from "../models/studentDB.js";
import { editdoctor } from "../controller/doctor.js";
import { deleteone, update_subjcte } from "../controller/subject.js";
const router=new Router();


router.get("/create",create);
router.post('/',store);


router.get('/update_student',async(req,res)=>{
    const update_student=await studentDB.find().lean()
    res.render('update_student',{update_student});

})


router.get('/:id/edit', editstudent)
router.put("/:id",update_subjcte)
router.delete('/:id',delet_student)




export default router;