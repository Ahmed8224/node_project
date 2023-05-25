import express from 'express'
import {engine} from 'express-handlebars'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import departmentRouter from './routs/departments.js'
 import subjectrouter from './routs/subjects.js'
 import studentrouter from './routs/student.js'
 import doctorrouter from './routs/doctor.js'
 import methodOverride from "method-override"
import authroute from './routs/auth.js'
import absence from './models/absence.js'
import cookieParser from 'cookie-parser'
import { aunthentication}  from './middleware/authentication.js' 

dotenv.config();
mongoose.connect(process.env.mongoConnectionURL)
const app =express();
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'))
app.use(express.static('public'));
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./templates');


app.use('/subjects', aunthentication ,subjectrouter);
app.use('/departments',departmentRouter);
app.use('/students' , studentrouter);
app.use('/doctors' , doctorrouter);

app.get("/absence",(req, res) =>{
    res.render("absence",{absence});
})

app.use('/',authroute);


app.listen(process.env.PORT ,()=>{
    console.log("started the application on http://localhost:"+process.env.PORT);
});

