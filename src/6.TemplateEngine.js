// Template Engine video 6

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const hbs = require('hbs');

// Set up the view engine to use Handlebars
app.set('view engine', 'hbs');  //spelling same ho mandatory

/* Set the path to your views directory */
// app.set("views", path.join(__dirname, "../views"))
const viewsPath = path.join(__dirname, "../views")
console.log(viewsPath)
app.set('views', viewsPath);

// More configuration and routes
app.get("/", (req, res) => {
    res.render('index') //render kro index.hbs ko 
})
// Optional q k nichy jayega hi nhi
// wo upper k page ko render krdyga
app.get("/", (req, res) => {
    res.send("Hello Template")
})

app.listen(port, () => {
    console.log(`Server is up ${port}`)
})