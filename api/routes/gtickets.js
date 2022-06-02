const router = require("express").Router();
const Gtickets = require("../models/Gtickets"); 


router.post('/',(req,res)=>{
    try{
    const obj = new Gtickets({projectName:"zulfi",ticket:"first ticket",status:"pending",daysOutstanding:2,priority:"low"});
    obj.save();
}catch(err){
    res.send(500).json();
}

})

router.get('/searchgticket', async(req, res) => {
    try{
        console.log(req.query.name)
        const proj = await Gtickets.find({projectName: req.query.name})
        res.status(200).json(proj);
        console.log(proj);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;