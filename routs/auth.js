import {Router} from 'express'
import { login, loginform, register, registerform } from '../controller/user.js';

const router =new Router();
router.get('/register',registerform)

router.post('/register',register)

router.get('/login',loginform)

router.post('/login',login)


export default router;