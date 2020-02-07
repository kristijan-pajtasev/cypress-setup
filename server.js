const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

app.get("/data", (req, res) => {
    setTimeout(() => {
        res.json({
            "firstName": "john",
            "lastName": "doe"
        })
    }, 15000)

});

app.listen("3002");