const express = require("express");
const app = express();

app.get("/data", (req, res) => {
    setTimeout(() => {
        res.json({
            "firstName": "john",
            "lastName": "doe"
        })
    }, 2000)

});

app.listen("3002");