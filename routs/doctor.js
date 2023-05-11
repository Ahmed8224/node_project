import { Router } from "express";
import { create, store } from "../controller/doctor.js";



const router=new Router()

router.get('/create',create)
router.post('/',store);


export default router