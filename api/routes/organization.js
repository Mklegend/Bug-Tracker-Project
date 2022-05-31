const router = require("express").Router();
router.get('/',(req,res)=>{
    
    res.send('org fetched!');

})
module.exports = router;