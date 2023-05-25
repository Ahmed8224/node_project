import { Router } from "express";



const router = new Router();
router.get("/download",(req,res)=>{
    res.send("sara");
});



export default router;
