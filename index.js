const express = require("express")
const app = express()
const cors= require("cors")

app.use(cors())
port = process.env.PORT || 5630;

const apiData = require("./data.json")


app.get("/", (req, res) =>{
    res.send("Live and testing")
});

app.get("/data" , (req,res) =>{
    res.send(apiData)
})

app.listen(port, () => {
    console.log("live and running")
})