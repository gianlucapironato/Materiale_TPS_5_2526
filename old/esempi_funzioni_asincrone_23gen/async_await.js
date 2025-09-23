const fs = require('fs').promises;//occhio qui

async function fetchUserData() {
    // operazione lenta (e in realtà sotto funziona come una promise)
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
}

fetchUserData();
console.log("dopo"); // questo viene eseguito prima di main