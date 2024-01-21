const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port number  ${port}`);
})

// app.use((req,res) => {
//     console.log("Request recieve ");
//     res.send("<h1>This is a basic response</h1>");
// })

app.get("/",(req,res) => {
    console.log("request received on home page ")
    res.send("home page");
})

// app.get("/search",(req,res) =>{
//     console.log("request received on search page ")
//     res.send("search page");
// })

// app.get("*",(req,res)=>{
//     console.log("pagal galat raste pe chala gaya");
//     res.send("Pagal hai kya ");
// })

app.get("/:username/:phn",(req,res)=>{
    let {username,phn} = req.params;
    res.send(`name: ${username} , Mobilenumber: ${phn}`);
})

app.get("/search",(req,res) =>{
    let {q} = req.query;
    if(!q){
        res.send("nthg searched");
    }
    res.send(`Here is your result for ${q}`);
});