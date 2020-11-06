const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const path = require("path");
const Burger = new (require('../models/burger.js'))();

// List all burgers
router.get("/", async function(req, res) {  
    const data = await Burger.ListBurgers();  
    res.render("index", { burgers: data });
});

// submit burger
router.post("/api/burgers",async function(req,res){
    name = req.body.burger_name;
    const result = await Burger.submitBurger(name);
    res.send({result});
});

// update burger
router.put("/api/burgers/:id", async function(req,res){
    const burgerId = req.params.id;
    const isDevoured = req.body.isDevoured;
    const result = await Burger.devourBurger(burgerId, isDevoured);
    res.json(result);
});

module.exports = router;