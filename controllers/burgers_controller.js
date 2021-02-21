var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    burger.selectAll((burgerData) => {
        res.render("index", { burger_data: burgerData });
    });
});


router.post("/burgers/create", (req, res) => {
    burger.insertOne(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect("/");
    });
});


router.put("/burgers/:id", (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;