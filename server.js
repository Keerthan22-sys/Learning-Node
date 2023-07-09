const express = require("express");
const app = new express();
const port = 6969;
app.use(express.static('public'))
app.listen(port, ()=>{
    console.log(`Serving photo on http://localhost:${port}`)
})