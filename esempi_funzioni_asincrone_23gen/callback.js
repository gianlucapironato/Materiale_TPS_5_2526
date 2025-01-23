var fs = require('fs');

function fetchUserDataWithCallback(callback) {
    // operazione lenta
    /*fs.readFile('file.txt', 'utf8', (err, data) => {
        callback(data);
    });*/
    callback("ciao")
}

fetchUserDataWithCallback((userData) => {
    console.log("Il contenuto del file:", userData);
});
console.log("dopo") // questo viene eseguito prima della callback (se davvero l'operazione è lenta)