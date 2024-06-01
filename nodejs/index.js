const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello nepal123!")
})

//  Creating a server on PORT 3000
app.listen(3000, () => {
    console.log("Server is running....")
})

// sqlite