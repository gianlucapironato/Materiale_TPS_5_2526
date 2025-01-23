var fs = require('fs');

function fetchUserDataWithPromise() {
    return new Promise((resolve, reject) => {
        // overhead per creazione oggetto promise + operazione lenta
        /*fs.readFile('file.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });*/
        resolve("ciao")
    });
}

fetchUserDataWithPromise().then((userData) => {
        console.log("Il contenuto del file:", userData);
    }).catch((err) => {
        console.error(err);
    });

console.log("dopo"); // questo viene eseguito prima della promise