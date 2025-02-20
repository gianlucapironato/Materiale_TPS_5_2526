const express = require("express")
const app = express()
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.send("Home")
})

app.get("/users/:username",
    (req,res)=>{
        const username = req.params.username
        res.render("index", {username: username})
    }
)

app.listen(3000)