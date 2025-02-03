const express = require('express');
const morgan = require('morgan');
// esempi per ordine rotte e uso middleware

const app = express();
app.use(morgan('dev')); // varie opzioni oltre a dev

/*
se volessi scrivere su file: (previo import di fs)
app.use(morgan('dev', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
*/

// le richieste con qualsiasi metodo per qualsiasi URL
app.all('*', (req, res) => {
    res.send('Hello World!');
})

//si potrebbe fare anche con una funzione di middleware
/*
app.use((req, res) => {
    res.send('Hello World!');
})
*/



app.listen(3000,
    () => console.log('Server started on http://localhost:3000')
)