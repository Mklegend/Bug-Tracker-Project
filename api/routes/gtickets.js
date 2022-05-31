const router = require("express").Router();
const Gtickets = require("../models/Gtickets"); 


router.get('/',(req,res)=>{

    res.send('gtickets fetched !')

})
module.exports = router;