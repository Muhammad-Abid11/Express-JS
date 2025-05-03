// Template Engine video 6/7
// partials video 8 // ye react k components k trha hai jis code ko hum re-use kr

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
    // res.render('index')
    //OR 
    res.render('index', {
        DynamicName: "the way I am from Nodejs server Route"
    }) //render kro index.hbs ko 

})
// video 7
app.get("/about", (req, res) => {
    res.render('about')
})

// video 8 Partials     //apne Express k folder me k now use $nodemon src/6.TemplateEngine.js -e js,hbs
// use $nodemon src/6.TemplateEngine.js -e js,hbs //<---ye apne src sy bahir run krna hai ab ye .js .hbs dono ki changes monitor kryga

// console.log(path.join(__dirname, "../views/components"))
const componentsPath = path.join(__dirname, "../views/components")
hbs.registerPartials(componentsPath);//here we connect HBS with our Project

// Optional 
// jo  route upper hoga wo render hojaygea
app.get("/", (req, res) => {
    res.send("Hello Template")
})

// video 9 404 Page Not Found and Page in Progress

app.get("/Services", (req, res) => {
    res.render('Working')
})


app.get("/about/*", (req, res) => {  // " * " about k page k nested route per bhi agar user hit kry too bhi 404 dikhao
    res.render('404')// warna page not found
})
app.get("*", (req, res) => {  // " * " universal opearator  always at bottom
    // all pages q k wo upper sy check krty hoa ayega jo mila us page me enter
    res.render('404')// warna page not found
})

app.listen(port, () => {
    console.log(`Server is up ${port}`)
})