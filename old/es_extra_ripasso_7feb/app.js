const express = require('express');
const app = express();
const fs = require('fs').promises;

const headHTML = '<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Agenda Web</title><link rel="stylesheet" href="/style.css"></head><body><div class="container"><h1>Agenda Web</h1><div class="current-date">'+Date()+'</div><div class="events-grid">'

const footHTML = '</div><a href="/new-event.html"><button class="add-button">+</button></a></div></body></html>'

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    fs.readFile('eventi.csv', 'utf8').then(
        (data)=>{
            const lines = data.split('\n');
            let risposta = headHTML;

            lines.forEach(
                (line) => {
                    if(line!=''){
                        const lDay = line.split(',')[1].split('-')[2];
                        const lMonth = line.split(',')[1].split('-')[1];
                        const lYear = line.split(',')[1].split('-')[0];

                        if(lDay == day && lMonth == month && lYear == year){
                            risposta += '<div class="event-card"><div class="event-time">'+line.split(',')[1].split('-')[3]+'</div><div class="event-title">'+line.split(',')[0]+'</div><div class="event-description">'+line.split(',')[2]+'</div></div>'
                        }
                    }

                }
            );
            risposta += footHTML;
            res.send(risposta);
        }
    )

    });

app.listen(3000);