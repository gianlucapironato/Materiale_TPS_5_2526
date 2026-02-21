const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/eventi", (req, res) => {
    const provincia = req.query.provincia;
    fs.readFile("eventi_lombardia.csv", "utf8", (err, data) => {
        if(err){
            res.send("Errore");
        } else{
            let filtrati = [];
            let righeTab = data.split("\n");
            righeTab.forEach(r => {
                r = r.split(",");
                if(r[5] == provincia) {
                    filtrati.push(r);
                }
            })
            let righeHtml = ""; 
            filtrati.forEach(r => {
                righeHtml +=  `
                    <tr>
                        <td>${r[0]}</td>
                        <td>${r[1]}</td>
                        <td>${r[2]}</td>
                        <td>${r[3]}</td>
                        <td>${r[4]}</td>
                        <td>${r[5]}</td>
                    </tr>`;
            })

            const pagina = `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Elenco per prov</title>

                <style>
                    table {
                    border-collapse: collapse;
                    width: 100%;
                    }

                    th, td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: center;
                    }

                    th {
                    background-color: #f2f2f2;
                    }
                </style>

            </head>
            <body>
                <table>
                    <thead>
                        <tr>
                            <th>Titolo Evento</th>
                            <th>Giorno</th>
                            <th>Mese</th>
                            <th>Anno</th>
                            <th>Comune</th>
                            <th>Provincia</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${righeHtml}
                    </tbody>
                </table>
                
            </body>
            </html>`
            res.send(pagina);
        }
    });
});

app.get("/eventi/:provincia", (req, res) => {
    const provincia = req.params.provincia;
    fs.readFile(path.join(__dirname, "eventi_lombardia.csv"), "utf8", (err, data) => {
        if(err) {
            return res.send("Errore");
        } else{
            let filtrati = [];
            let righeTab = data.split("\n");
            righeTab.forEach(r => {
                r = r.split(",");
                if(r[5] == provincia) {
                    filtrati.push({
                        titolo: r[0],
                        giorno: r[1],
                        mese: r[2],
                        anno: r[3],
                        comune: r[4],
                        provincia: r[5]
                    });
                }
            });
            res.json(filtrati);
        }
    })
});

app.post("/eventi", (req, res) => {
    const titolo = req.body.titolo;
    let data = req.body.data.split('/');
    const comune = req.body.comune;
    const provincia = req.body.provincia;

    const stringToWrite = titolo + "," + data[0] + "," + data[1] + "," + data[2] + "," + comune + "," + provincia + "\n";
    
    fs.appendFile("eventi_lombardia.csv", stringToWrite, "utf8", (err) => {
        let mess = "";
        if(err){
            mess = "errore nell'aggiunta dell'evento"
        } else{
            mess = "evento: " + stringToWrite + " aggiunto correttamente" 
        }
        const pagina = `
            <!DOCTYPE html>
                <html leng="en">
                <head>
                    <title>Aggiunta riga</title>
                </head>

                <body>
                    <h1>${mess}</h1>
                </body>
            </html>`;
        res.send(pagina);
    });
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});