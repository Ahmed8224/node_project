import express from 'express'
import {engine} from 'express-handlebars'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import departmentRouter from './routs/departments.js'
dotenv.config();
mongoose.connect(process.env.mongoConnectionURL)
const app =express();
app.use(express.urlencoded({extended: true}));
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./templates')

app.use('/departments',departmentRouter);
app.listen(process.env.PORT ,()=>{
    console.log("started the application on http://localhost:"+process.env.PORT);
});
