import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from "dotenv";

import subjectrouter from './routes/subjects.js'
const app =express()

dotenv.config();

mongoose.connect(process.env.mongolink)

app.use(express.urlencoded({extended:true}))



app.use('/subjects',subjectrouter)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './temp');



app.listen(process.env.port, ()=> {
    console.log('started app on http://localhost:'+process.env.port);
});