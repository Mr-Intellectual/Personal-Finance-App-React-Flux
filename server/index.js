const express = require("express");
const http = require("http");
const bodyParser =require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors());
app.options("*",cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    return res.send("Test");
})

http.createServer(app).listen(process.env.POST || 8080);
