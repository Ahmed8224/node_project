import jwt from "jsonwebtoken";

 export const aunthentication = (req ,res,next)=>{
    const {token}=req.cookies;
    try{
 var decoded=jwt.verify(token,process.env.JWT_SECRET);
 req.user=decoded;
 next();
    }catch (error){
 return res.redirect('/login');
 
    }
  
    
};