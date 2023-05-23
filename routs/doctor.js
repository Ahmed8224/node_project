import { Router } from "express";
import { create, editdoctor, store } from "../controller/doctor.js";
import doctor from "../models/doctor.js";
import { deleteone, update_subjcte } from "../controller/subject.js";



const router=new Router()

router.get('/create',create);
router.post('/',store)

router.get('/update_doctor',async(req,res)=>{
    const update=await doctor.find().lean()
    res.render('update_doctor',{update});
})


router.get('/:id/edit', editdoctor)
router.put("/:id",update_subjcte)
router.delete('/:id',deleteone)



export default router