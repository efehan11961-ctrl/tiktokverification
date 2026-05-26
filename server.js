const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/save",(req,res)=>{

    const data = `
Name: ${req.body.fullname}
Account: ${req.body.account}
-------------------------
`;

    fs.appendFileSync("data.txt",data);

    res.send("saved");

});

app.listen(3000,()=>{
    console.log("Server running");
});