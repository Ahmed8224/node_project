import user from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerform =(req,res) =>{
    res.render('authentication/register');
};
export const register =async(req,res)=>{
    const {username,email,password}=req.body;
    console.log(username,email,password);
    const salt = bcrypt.genSaltSync(10);
    const encrptedpassword=bcrypt.hashSync(password,salt);
    console.log(encrptedpassword);
    await user.create({
        username,
        email,
        password:encrptedpassword
    });

    res.redirect('/login');
};

export const loginform =(req,res) =>{
    res.render('authentication/login')
}


export const login =async(req,res)=>{
    const { email, password} = req.body;

    console.log(email,password);
   
    const loggedUser = await user.findOne({email});
    const iscorrectpassword= bcrypt.compareSync(password,loggedUser.password);
    if(!iscorrectpassword){
        res.send("wrong password");
    }
    const data = {
        _id: loggedUser._id,
        email:loggedUser.email,
       
    };
    const jwtToken = jwt.sign(data, process.env.JWT_SECRET);
    console.log(jwtToken);
    res.cookie('token',jwtToken);
    
    res.send("login in");
}
