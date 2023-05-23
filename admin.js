import express from 'express'
import {engine} from 'express-handlebars'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import departmentRouter from './routs/departments.js'
 import subjectrouter from './routs/subjects.js'
 import studentrouter from './routs/student.js'
 import doctorrouter from './routs/doctor.js'
 import methodOverride from "method-override"

import absence from './models/absence.js'

dotenv.config();
mongoose.connect(process.env.mongoConnectionURL)
const app =express();
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'))

app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./templates')


app.use('/subjects',subjectrouter)
app.use('/departments',departmentRouter);
app.use('/students' , studentrouter);
app.use('/doctors' , doctorrouter);

app.get("/absence",(req, res) =>{
    res.render("absence",{absence})
})


app.listen(process.env.PORT ,()=>{
    console.log("started the application on http://localhost:"+process.env.PORT);
});

