const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// tutto quello che sta nella cartella public è accessibile
app.use('/media/', express.static('public'));
// se non si passa il primo parametro sarà tutto accessibile da /

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //path join non fa altro che unire i vari elementi in un unico pathname corretto
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});