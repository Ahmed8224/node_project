import register from "../models/register.js"


export const create = async(req,res)=>{
    const registers = await register.find().lean();
    res.render("studentCourses",{registers});
}



export const store =  async(req, res)=> {
    const {courseName}= req.body;
     
    await register.create({

        courseName

    })

};



// export const create = (req,res){
//     res.render("register/create")
// };

// export const store = (req,res){
//     res.render("register/store")
// };


