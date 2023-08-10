// video 2

const express = require("express")
const app = express();
const port = 3000
app.get("/", (req, res) => {
    res.send("Hello World /about /contact /home")
})
app.get("/about", (req, res) => {
    res.send("Hello World about")
})
app.get("/contact", (req, res) => {
    res.send("Hello World contact")
})
app.get("/home", (req, res) => {
    res.send("Hello World home")
})

app.listen(port, "localhost", () => {
    console.log("Server is Up on port ", port)
})