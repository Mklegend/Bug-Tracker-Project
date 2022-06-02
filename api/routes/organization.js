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
        const emp = await employee.find({})
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

router.post('/updateemployee',async (req,res)=>{
    const oldName = req.body.oldName
    const newName = req.body.newName
    const desg = req.body.newDesignation

    try{
        const emp = await employee.find({name:oldName})
        console.log(emp)
        const result = await employee.updateOne({name:oldName},{$set:{name:newName,designation:desg}})
        res.redirect('http://localhost:3000/admin')
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

// router.put("/:id", async (req, res) => {  //req is what we are sending to our server

//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.username === req.body.username) {
//             try {
//                 const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
//                     $set: req.body
//                 }, { new: true });
//                 res.status(200).json(updatedPost);
//             } catch (err) {
//                 res.status(500).json(err);
//             }
//         }
//         else {
//             res.status(401).json("You can update only your post!");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }

// })