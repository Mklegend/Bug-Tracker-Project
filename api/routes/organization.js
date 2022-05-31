const router = require("express").Router();
const employee = require("../models/employeeSchema");
// router.get('/', (req, res) => {

//     res.send('org fetched!');

// })

router.post('/createemployee', async (req, res) => {

    try {
        const emp = new employee({
            name: req.body.name,
            designation: req.body.designation,
            assigned: req.body.assigned
        })

        emp.save().then((err, result) => {
            res.redirect('http://localhost:3000/admin');
        })
    }catch (err) {
        res.status(500).json(err);
    }


});

router.get("/getemployee", async (req,res)=>{
    try{
        const emp = await employee.find({},{name:1})
        // console.log(emp)
        res.status(200).json(emp);
    }catch(err){
        res.status(500).json(err);
    }
})

router.post("/deleteemployee", async(req,res) =>{
    const id = req.body.id;
    try{
        const result = await employee.deleteOne({_id:id});
        res.status(304).redirect('http://localhost:3000/admin')
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;