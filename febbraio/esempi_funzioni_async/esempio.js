const fs = require("fs").promises;

fs.readFile("file.txt", "utf-8").then(
    (data)=>{
        console.log(data);
    }
).catch(
    (err)=>{
        console.log("Errore!");
    }
)