const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//---------------- file search krne k tariqa
// relative and absolute path 
// console.log(`yahn ho tum-->${__dirname}`) //absolute path
// laken mujhy too public k folder me index.js hai us ko access krna hai too
// console.log(path.join(__dirname, "../")) //ye 1 time back
// console.log(path.join(__dirname, "../public")) //ye complete path ban gaya
//--------------------------- 

const staticPath = path.join(__dirname, "../public");// yahn 'public' k baad koye space nhi aye
// builtin middleware
app.use(express.static(staticPath));
app.get("/", (req, res) => {        //is line ki need nhi ye by default root pe Static side ko show kryga
    res.send("Hello Guysss!");
})
app.listen(port, () => {
    console.log("Server is up at port ", port)
});
