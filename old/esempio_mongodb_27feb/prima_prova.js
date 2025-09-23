const express = require("express")
const app = express()
const mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/";

app.get("/",
    (req,res)=>{
        mongo.connect(url).then(
            (db)=>{
                console.log("connesso")
                dbo = db.db("blog")
                dbo.collection("posts").find({}).toArray().then(
                    (result)=>{
                        res.json(result)
                        db.close()
                    }
                )
            }
        )
    }
)

app.listen(3000)