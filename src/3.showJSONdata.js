// video 2
//express .status(200) hume status code
// nhi btana hota ye khud krta hai detect

const express = require("express")
const app = express();
const port = 3000
app.get("/", (req, res) => {

    res.send("<h1>Hello World /about me jao wahn alag alag data send kiya hai</h1>")
    // res.send("Hello World2") its not , 
    // humne " res.write() " use krna hoga nichy dekho
})
app.get("/about", (req, res) => {
    res.write("<h1>res.write(1)</h1>")
    res.write("<h1>res.write(2)</h1>")
    res.write("<h1>ab tum</h1>")
    res.write("<h1>/ObjectData per jao or 'Object' k data ko 'JSON' k format me dekho</h1>")
    res.write("<h1>/ArrayObjectData per jao or 'Array-Object' k data ko 'JSON' k format me dekho</h1>")
    res.write("<h1>/JSON per jao or ye 'res.send' nhi bulky 'res.json' kiya hai</h1>")
    res.send(); // ye likhna zarori hai warna browser 
    // wait krta rhyga k or data araha hai
})
app.get("/objectdata", (req, res) => {
    res.send({          //agar humne "res" me "object" diya too
        id: 1,  //browser usy "json" me convert kr k show kryga
        name: "abid",
        class: "Five",
    }, /* {     //ye Error dyga q k apne 2 alag alag object dy diya
                //isy ap ' Array ' me rakh kr k pass kren
        id: 2,
        name: "Sajid",
        class: "Five",
    } */
    )
})
app.get("/arrayobjectdata", (req, res) => {
    res.send([{          //agar humne "res" me "object" diya too
        id: 1,  //browser usy "json" me convert kr k show kryga
        name: "abid",
        class: "Five",
    }, {
        id: 2,
        name: "Sajid",
        class: "Five",
    }, {
        id: 3,
        name: "Sajid",
        class: "Five",
    }, {
        id: 4,
        name: "Sajid",
        class: "Five",
    }
    ])
})
app.get("/JSON", (req, res) => {
    res.json([{          //agar humne "res" me "object" diya too
        id: 1,  //browser usy "json" me convert kr k show kryga
        name: "abid",
        class: "Five",
    }, {
        id: 2,
        name: "Sajid",
        class: "Five",
    }, {
        id: 3,
        name: "Sajid",
        class: "Five",
    }, {
        id: 4,
        name: "Sajid",
        class: "Five",
    }
    ])
})


// the methods are identical when an object or array is passed,
// but res.json() will also conver non-objects,
// such as null and undefined, which are not valid JSON

app.listen(port, "localhost", () => {
    console.log("Server is Up on port ", port)
})