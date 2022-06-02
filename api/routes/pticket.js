const Ptickets = require("../models/Ptickets");

const router = require("express").Router();


router.post("/createpticket", async (req, res) => {
    // try {
    //     const user = await User.findOne({ username: req.body.username });
    //     !user && res.status(400).json("Wrong credentials!");

    //     const validated = await bcrypt.compare(req.body.password, user.password);
    //     !validated && res.status(400).json("Wrong credentials!");

    //     const { password, ...others } = user._doc;
    //     res.status(200).json(others);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
    // res.send("pticket api hit");

    const temp = new Ptickets({projectId: "2951b05980ffaf08728d03f", ticketTitle: "First"})


});

router.get('/searchpticket', async(req, res) => {
    try{
        console.log(req.query.id)
        const proj = await Ptickets.find({projectId: req.query.name})
        res.status(200).json(proj);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;