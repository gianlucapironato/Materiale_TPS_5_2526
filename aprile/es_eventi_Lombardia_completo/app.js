const express = require("express");
const mongo = require("mongodb").MongoClient;
const urlMongo = "mongodb://localhost:27017";
const dbMongo = "10apr";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/eventi/provincia/:provincia", (req,res)=>{
    const provincia = req.params.provincia;
    mongo.connect(urlMongo).then(
        (db)=>{
            const dbo = db.db(dbMongo);
            dbo.collection("eventi").find({provincia: provincia}).toArray().then(
                (events)=>{
                    res.json(events)
                    db.close();
                }
            ).catch(
                (err)=>{
                    res.send(err.message);
                }
            )
        }
    ).catch(
        (err)=>{
            res.send(err.message);
        }
    )
})

app.post("/eventi/", (req,res)=>{
    const evento = {
        titolo: req.body.titolo,
        comune: req.body.comune,
        provincia: req.body.provincia,
        data: req.body.data
    }
    mongo.connect(urlMongo).then(
        (db)=>{
            const dbo = db.db(dbMongo);
            dbo.collection("eventi").insertOne(evento).then(
                (result)=>{
                    res.render("home");
                    db.close();
                }
            ).catch(
                (err)=>{
                    res.send(err.message);
                }
            )
        }
    ).catch(
        (err)=>{
            res.send(err.message);
        }
    )
})

app.get("/eventi/", (req,res)=>{
    const provincia = req.query.provincia;
    mongo.connect(urlMongo).then(
        (db)=>{
            const dbo = db.db(dbMongo);
            dbo.collection("eventi").find({provincia: provincia}).toArray().then(
                (events)=>{
                    res.render("events", {data: {events: events}});
                    db.close();
                }
            ).catch(
                (err)=>{
                    res.send(err.message);
                }
            )
        }
    ).catch(
        (err)=>{
            res.send(err.message);
        }
    )
})

app.get("/", (req,res)=>{
    res.render("home");
})


app.listen(3000);