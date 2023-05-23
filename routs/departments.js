import {Router} from 'express'
import { create, store } from '../controller/departments.js';
import department from '../models/department.js'
const router =new Router();
router.get('/',(req,res)=>{
res.render('Department_Manage');
});
router.get('/createDepartment',async (req,res)=>{
    await department.create({
        name: 'computerSience',
        code: 'CS',
    });
    res.send('added');
    });
    router.get('/create',create);
    router.post('/',store);
export default router;
