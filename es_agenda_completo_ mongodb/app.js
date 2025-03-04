const express = require('express');
const mongo = require('mongodb').MongoClient;


const app = express();
var url = "mongodb://localhost:27017/";

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

app.get('/eventi/:anno/:mese/:giorno', (req, res) => {

    mongo.connect(url).then(
        (db) => {
            const dbo = db.db("agenda");
            dbo.collection("eventi").find(
                {date: req.params.anno + '-' + req.params.mese + '-' + req.params.giorno}
            ).toArray().then(
                (result) => {
                    res.json(result);
                    db.close();
                }
            )
        }
    )
})

app.post('/eventi/', (req, res) => {
    const titolo = req.body.title;
    const data = req.body.date;
    const descrizione = req.body.description;
    const ora = req.body.time;

    mongo.connect(url).then(
        (db) => {
            const dbo = db.db("agenda");
            const myobj = { title: titolo, date: data, description: descrizione, time: ora };
            dbo.collection("eventi").insertOne(myobj).then(
                (result) => {
                    res.redirect('/')
                    db.close();
                })
        })
    
})

app.get('/add_event/', (req, res) => {
    res.render("new-event", {})
})

app.get('/', (req, res) => {

    mongo.connect(url).then(
        (db) => {
            dbo = db.db("agenda");
            dbo.collection("eventi").find(
                {date: new Date().toISOString().split('T')[0]}
            ).toArray().then(
                (result) => {
                    console.log(result)
                    let dataToRender = {events: result}
                    res.render("agenda", {data: dataToRender})
                    db.close()
                }
            )
        }
    )

    });

app.listen(3000);