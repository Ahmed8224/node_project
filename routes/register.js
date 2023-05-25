import { Router } from "express";

import register, { create,store} from "../controllers/register.js";
import register from "../models/register.js";


const router = new Router();


router.get('/create',create)
router.post('/',store);




export default router;