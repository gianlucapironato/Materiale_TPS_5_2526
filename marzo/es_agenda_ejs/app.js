const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises;
const giorno = new Date().toISOString().split('T')[0];

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/:anno/:mese/:giorno", (req, res) => {
    const DataCercata = `${req.params.anno}-${req.params.mese}-${req.params.giorno}`;

    fs.readFile(path.join(__dirname, "eventi.csv"), 'utf8').then((file) => {
        let cards = '';
        const righe = file.split("\n").filter(r => r.trim() !== '');

        if (righe.length === 0) {
            cards = `<p class="empty">Nessun appuntamento presente.</p>`;
        } else {
            righe.forEach(riga => {
                const [titolo, dataOra, note] = riga.split(",");
                const data = dataOra.split('-').slice(0, 3).join('-');
                const ora = dataOra.split('-')[3];
                if (data === DataCercata) {
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

        res.send(`
            <!DOCTYPE html>
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
                        <a href="/AggiungiAppuntamento/"><button>+ Nuovo appuntamento</button></a>
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
            </html>`
        );
    }).catch(() => {
        res.send(`<p class="empty">Nessun appuntamento presente.</p>`);
    });
})

app.get("/AggiungiAppuntamento/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.post("/AggiuntaAppuntamento/", (req, res) => {
    fs.appendFile(
        path.join(__dirname, "eventi.csv"),
        `${req.body.title},${req.body.date}-${req.body.time},${req.body.description}\n`,
        'utf-8'
    ).then(() => {
        res.redirect("/");
    });
})

app.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "eventi.csv"), 'utf8').then((file) => {
        let cards = '';
        const righe = file.split("\n").filter(r => r.trim() !== '');

        if (righe.length === 0) {
            cards = `<p class="empty">Nessun appuntamento presente.</p>`;
        } else {
            righe.forEach(riga => {
                const [titolo, dataOra, note] = riga.split(",");
                const data = dataOra.split('-').slice(0, 3).join('-');
                const ora = dataOra.split('-')[3];
                if (data === giorno) {
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
        
        res.send(`
            <!DOCTYPE html>
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
                        <a href="/AggiungiAppuntamento/"><button>+ Nuovo appuntamento</button></a>
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
            </html>`
        );
    }).catch(() => {
        res.send(`<p class="empty">Nessun appuntamento presente.</p>`);
    });
});

app.listen(3000);