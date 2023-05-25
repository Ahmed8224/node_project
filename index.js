import express from 'express';
import { engine } from 'express-handlebars';

import registerRouter from './routes/register.js';
import fileRouter from './routes/file.js';

const app = express();

app.use('/register',registerRouter);
app.use('/file' , fileRouter);



const PORT = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './template');



app.listen(PORT,()=>{
    console.log('Started the application on http://localhost:' + PORT);
});
app.use(express.static('public'));
