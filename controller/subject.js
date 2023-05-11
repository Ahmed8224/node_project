import subject from "../models/subject.js"



export const index =(req,res)=>{
    res.render('subject/all')
}


export const create =(req,res)=>{

    const add=subject.find().lean()
    res.render('create_subjects',{add})
}

export const store =  async(req, res)=> {
    const {name, code, department,prerequistie}= req.body;
     
    await subject.create({

      name,
      code,
      department,
      prerequistie

    })
     
// res.redirect('/subjects')


};