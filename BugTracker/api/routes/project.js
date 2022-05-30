const router = require("express").Router();
const Project = require("../models/Project");



router.post('/newproject', (req,res)=>{
try{    
    // if(req.body.name && req.body.description && req.body.lead ){
    const newproject = new Project({
        name:req.body.name,
        description:req.body.description,
        lead:req.body.lead
    })
    //TODO if already exist then throw error

   newproject.save().then((err,result)=>{
     res.json(err)
   })   
}catch(err){
    res.status(500).json(err);
}
});
module.exports = router;