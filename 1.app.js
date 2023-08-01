// video 1

//file k name app.js nhi 1.app.js hai --->  nodemon 1.app.js

// $ npm init
// $ npm install express

const express = require('express')
const app = express()
const port = 3000
// app.get(route,callback)
// API
// get  - read
// post - create
// put  - update
// delete - delete

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})