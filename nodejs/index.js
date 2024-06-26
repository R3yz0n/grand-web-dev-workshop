const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.set("view engine", "ejs");

//  Connect to mongoDBs
const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.3oldbww.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGODB_URI).then(()=> {
    console.log("Mongodb connect vayo...");
}).catch((err)=> {
    console.log("Connect vayena...", err);
})

// app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.send("Hello from Bookstore!")
})

// Get all books
app.get("/allBooks", async (req,res) => {

    const allBooks = await Book.find({});

    res.render("allBooks", {books:allBooks})
})

// Add new book
app.get("/addBook", (req,res)=> {
    res.render("addBook",{})
})

app.post("/add-book", async(req,res) => {
    const title = req.body.title;
    const author = req.body.author;
    const price = req.body.price;
    const image = req.body.image;

    const newBook = {
        title,
        author,
        price,
        image
    }

    const addedBook = await Book.create(newBook);
})



//  Creating a server on PORT 3000
app.listen(3000, () => {
    console.log("Server is running....")
})