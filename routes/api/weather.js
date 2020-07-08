const router = require("express").Router();
const util = require('util')
const axios = require("axios");
require("dotenv").config();

// @route POST api/weather
// @desc post weather, route to provide weather data to the client
// @access Private
router.post("/", async (req, res) => {
    const {weatherCountry, weatherLocation} = req.body;
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${weatherLocation}&country=${weatherCountry}&key=${process.env.APIKEY}`)
        .then(response => {
            if(response.status !== 200) {
                console.log("Invalid search, please try again")
                return res.status(204).send();
            }
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(400).send("Error: " + error);
        });
});

module.exports = router;