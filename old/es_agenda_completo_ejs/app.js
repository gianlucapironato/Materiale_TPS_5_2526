const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

app.get('/eventi/:anno/:mese/:giorno', (req, res) => {
    const eventi = []

    fs.readFile('eventi.csv', 'utf8').then(
        (data)=>{
            const lines = data.split('\n');

            lines.forEach(
                (line) => {
                    if(line!=''){
                        const lDay = line.split(',')[1].split('-')[2];
                        const lMonth = line.split(',')[1].split('-')[1];
                        const lYear = line.split(',')[1].split('-')[0];

                        if(lDay == req.params.giorno && lMonth == req.params.mese && lYear == req.params.anno){
                            eventi.push( {
                                titolo: line.split(',')[0],
                                data: line.split(',')[1],
                                descrizione: line.split(',')[2]
                            } )
                        }
                    }

                }
            );
            res.json(eventi);
        }
    )
})

app.post('/eventi/', (req, res) => {
    const titolo = req.body.title;
    const data = req.body.date;
    const descrizione = req.body.description;
    const ora = req.body.time;

    fs.appendFile('eventi.csv', titolo+','+data + '-' + ora +','+descrizione+'\n').then(
        () => {
            res.redirect('/');
        }
    )
})

app.get('/add_event/', (req, res) => {
    res.render("new-event", {})
})

app.get('/', (req, res) => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    fs.readFile('eventi.csv', 'utf8').then(
        (data)=>{
            const lines = data.split('\n');
            let dataToRender = {
                events: []
            }

            lines.forEach(
                (line) => {
                    if(line!=''){
                        const lDay = line.split(',')[1].split('-')[2];
                        const lMonth = line.split(',')[1].split('-')[1];
                        const lYear = line.split(',')[1].split('-')[0];

                        if(lDay == day && lMonth == month && lYear == year){
                            let time = line.split(',')[1].split('-')[3]
                            let title = line.split(',')[0]
                            let description = line.split(',')[2]
                            dataToRender.events.push(
                                {
                                    time: time,
                                    title: title,
                                    description: description
                                }
                            )
                        }
                    }

                }
            );
            res.render("agenda", {data: dataToRender})
        }
    )

    });

app.listen(3000);