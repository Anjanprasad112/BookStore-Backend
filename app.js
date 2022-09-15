// console.log("hello world!");
//  8vEUwkqNpVYAZhaI
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// 95PmHc870X5TvF93

// app.use("/",(req,res,next)=>{
//     res.send("This is our first response");
// })
app.use("/books",router);


mongoose.connect("mongodb+srv://dbuser:95PmHc870X5TvF93@cluster0.4yvznqv.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Connected to database!");
}).then(() => {
app.listen(5000);
console.log("http://localhost:5000");
})
.catch((err) => {
    console.log("Connection failed! " + err);
});

