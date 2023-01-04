const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sumit123:admin987@cluster0.xqyw4eq.mongodb.net/notesDB", { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema
const notesSchema = {
    fname: String,
    lname: String,
    email: String,
    password: String,
    phone: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", (req, res) => {
    res.sendFile("/index.html", { root: __dirname });
})

app.post("/", (req, res) => {
    let newNote = new Note({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });
    newNote.save();
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})


