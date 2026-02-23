const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const oggi = new Date();
const giorno = oggi.toISOString().split('T')[0]; 

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/:anno/:mese/:giorno", (req, res) => {
    const DataCercata = req.params.anno + "-"+ req.params.mese+"-"+ req.params.giorno;
    console.log(DataCercata);
    let cards = '';

    try {
        const file = fs.readFileSync(path.join(__dirname, "database.txt"), 'utf8');
        const righe = file.split("\n").filter(r => r.trim() !== '');

        if (righe.length === 0) {
            cards = `<p class="empty">Nessun appuntamento presente.</p>`;
        } else {
            righe.forEach(riga => {
                const [titolo, data, ora, note] = riga.split(",");
                if(data == DataCercata)
                {
                cards += `
                <div class="event">
                    <div>
                        <strong>${titolo}</strong>
                        <div class="meta">${data} alle ${ora}</div>
                        ${note ? `<div class="small">${note}</div>` : ''}
                    </div>
                </div>`;
                }
                
            });
        }
    } catch (e) {
        cards = `<p class="empty">Nessun appuntamento presente.</p>`;
    }

    res.send(`<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header>
        <h1>La mia Agenda</h1>
        <h3>${giorno}</h3>
    </header>
    <div class="container">
        <div class="toolbar" style="margin-top:1rem">
            <a href="/AddAppuntamento/"><button>+ Nuovo appuntamento</button></a>
        </div>
        <div class="layout">
            <div class="card day-view">
                <div class="date-head">
                    <strong>Tutti gli appuntamenti</strong>
                </div>
                <div class="events-list">
                    ${cards}
                </div>
            </div>
        </div>
    </div>
</body>
</html>`);
})

app.get("/AddAppuntamento/", (req, res) => 
{
    res.sendFile(path.join(__dirname, "index.html"));
})

app.post("/AggiuntaAppuntamento/", (req, res) => 
{
    fs.appendFileSync(path.join(__dirname, "database.txt"), req.body.title + "," + req.body.date + "," + req.body.time + "," + req.body.description + "\n", 'utf-8');
    res.redirect("/");
})


app.get("/", (req, res) => {
    let cards = '';

    try {
        const file = fs.readFileSync(path.join(__dirname, "database.txt"), 'utf8');
        const righe = file.split("\n").filter(r => r.trim() !== '');

        if (righe.length === 0) {
            cards = `<p class="empty">Nessun appuntamento presente.</p>`;
        } else {
            righe.forEach(riga => {
                const [titolo, data, ora, note] = riga.split(",");
                if(data == giorno)
                {
                cards += `
                <div class="event">
                    <div>
                        <strong>${titolo}</strong>
                        <div class="meta">${data} alle ${ora}</div>
                        ${note ? `<div class="small">${note}</div>` : ''}
                    </div>
                </div>`;
                }
                
            });
        }
    } catch (e) {
        cards = `<p class="empty">Nessun appuntamento presente.</p>`;
    }

    res.send(`<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header>
        <h1>La mia Agenda</h1>
        <h3>${giorno}</h3>
    </header>
    <div class="container">
        <div class="toolbar" style="margin-top:1rem">
            <a href="/AddAppuntamento/"><button>+ Nuovo appuntamento</button></a>
        </div>
        <div class="layout">
            <div class="card day-view">
                <div class="date-head">
                    <strong>Tutti gli appuntamenti</strong>
                </div>
                <div class="events-list">
                    ${cards}
                </div>
            </div>
        </div>
    </div>
</body>
</html>`);
});





app.listen(3000);