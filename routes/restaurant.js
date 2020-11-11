const express = require("express");
const router = express.Router();
const restaurants = require('../data')


router.get('/' , (req,res) => {
    res.send('<h1>Hello Restaurant API<h1>');
});


router.get("/restaurants", (req,res) =>{
    res.json(restaurants);
});


router.get("/restaurants/:id", (req,res) =>{
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
  res.send(restaurant);

});


router.post("/restaurants", (req,res) =>{
    res.send("POST API");
});


router.put("/restaurants/:id", (req,res) =>{
    res.send("PUT API ");
});


router.delete("/restaurants/:id", (req,res) =>{
    res.send("DELETE API ");
});

module.exports = router;