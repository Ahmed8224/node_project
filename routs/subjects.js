import { Router } from "express";
import subject from "../models/subject.js";
import { create, edit, index, store,update_subjcte,deleteone } from "../controller/subject.js";
const router=new Router()

router.get("/",index)
router.get("/create",create)
router.post('/',store)

router.get('/update_subject',async(req,res)=>{
    const update=await subject.find().lean()
    res.render('update_subject',{update})
})

router.get('/:id/edit', edit);

router.put("/:id",update_subjcte)
router.delete('/:id',deleteone)

// router.get('/create',async(req,res)=>{
//   await  subject.create({
//             name:"C++",
//             code:"133",
//             departmet:"IT",
//             prerequistie:"java"

//     })
//     await  subject.create({
//         name:"PHP",
//         code:"133",
//         departmet:"IT",
//         prerequistie:"C++"
// })
// await  subject.create({
//     name:"HTML",
//     code:"133",
//     departmet:"IT",
//     prerequistie:"Nodejs"
// })
// res.send("adding")
// })

export default router