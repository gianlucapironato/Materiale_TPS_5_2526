const express = require('express');

const app = express();
const port = 3000;

//questo middleware serve per leggere i dati inviati tramite form post
app.use(express.urlencoded({ 
    extended: true
}))


app.get('/users/:id', (req, res) => {
    res.send('Hai inviato id ' + req.params.id + ' tramite richiesta restful');
});

app.get('/users/', (req, res) => {
    res.send('Hai inviato id ' + req.query.id + ' tramite query string');
});

app.post('/users/', (req, res) => {
    res.send('Hai inviato id ' + req.body.id + ' tramite il form con metodo post');
});


// questa è la rotta per fornire la homepage di prova
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});