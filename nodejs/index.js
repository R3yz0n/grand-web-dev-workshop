const express = require("express");
const mongoose = require("mongoose");

const app = express();

//  Connect to mongoDBs
const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.3oldbww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGODB_URI).then(()=> {
    console.log("Mongodb connect vayo...");
}).catch((err)=> {
    console.log("Connect vayena...", err);
})


app.get("/", (req, res) => {
    res.send("Hello nepal123!")
})

//  Creating a server on PORT 3000
app.listen(3000, () => {
    console.log("Server is running....")
})