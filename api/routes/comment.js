const router = require("express").Router();
const Comment = require("../models/Pcomments");


router.post("/createcomment", async (req, res) => {
    try {
        const newcomment = new Comment({
            comment: req.body.comment,
            user: req.body.user
        })

        newcomment.save().then((err, result) => {
            res.json(err)
        })
    } catch (err) {
        res.status(500).json(err);
    }
    //res.send("comment api hit");
});


module.exports = router;