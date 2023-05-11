import { Router } from "express";
import { create, store } from "../Controller/student.js";
const router=new Router();


router.get("/create",create);
router.post('/',store);



export default router;