const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.urlencoded({ extended: true }));
// per codificare in modo leggibile da Node.js i dati inviati dal form post

app.get('/eventi/:provincia', (req, res) => {
    let eventi = [];
    // array di oggetti da restituire poi in json

    fs.readFile(__dirname + '/eventi_lombardia.csv', 'utf8').then(
        (data) => {
            const lines = data.split('\n');
            lines.forEach((line) => {
                if (line.includes(req.params.provincia)){
                    eventi.push({
                        titolo: line.split(',')[0],
                        giorno: line.split(',')[1],
                        mese: line.split(',')[2],
                        anno: line.split(',')[3],
                        comune: line.split(',')[4],
                        provincia: line.split(',')[5]
                    });
                    // aggiungo un oggetto all'array eventi
                }
            });
            res.json(eventi);
        }
    )

});

app.post('/eventi/', (req, res) => {
    let giorno = req.body.data.split('-')[2];
    let mese = req.body.data.split('-')[1];
    let anno = req.body.data.split('-')[0];
    let stringaEvento = req.body.titolo + "," + giorno + "," + mese + "," + anno + "," + req.body.comune + "," + req.body.provincia + "\n";
    fs.appendFile(__dirname + '/eventi_lombardia.csv', stringaEvento).then(
        () => {
            res.redirect('/');
            // ricarica homepage
        }
    )
});

app.get('/eventi/', (req, res) => {
    let htmlResponse = ""
    fs.readFile(__dirname + '/eventi_lombardia.csv', 'utf8').then(
        (data) => {
            const lines = data.split('\n');
            lines.forEach((line) => {
                if (line.includes(req.query.provincia)){
                    htmlResponse += line+"<br>";
                }
            });
            res.send(htmlResponse);
        }
    )
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // la homepage con il form
});

app.listen(3000);