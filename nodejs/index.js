const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

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

// Get all books
app.get("/allBooks", (req,res) => {
    res.render("allBooks", {})
})

// Add new book
app.get("/addBook", (req,res)=> {
    res.render("addBook",{})
})



//  Creating a server on PORT 3000
app.listen(3000, () => {
    console.log("Server is running....")
})