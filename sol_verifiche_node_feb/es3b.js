const express = require("express")
const fs = require("fs").promises
const app = express()

//primo punto:
app.get("/names/", 
    (req,res)=>{
        fs.readFile("names.txt", "utf8", {root: __dirname}).then(
            (data)=>{
                const lines = data.split("\n")
                let risposta = ""
                lines.forEach(
                    (line)=>{
                        risposta+=line+"<br>"
                    }
                )
                res.send(risposta)
            }
        ).catch(
            (err)=>{
                res.send(err.message)
            }
        )
    }
)

//secondo punto:
app.get("/names/start/:letter", 
    (req,res)=>{
        const lettera = req.params.letter
        fs.readFile("names.txt", "utf8", {root: __dirname}).then(
            (data)=>{
                const lines = data.split("\n")
                let risposta = ""
                lines.forEach(
                    (line)=>{
                        if(line[0]==lettera){
                            risposta+=line+"<br>"
                        }
                    }
                )
                res.send(risposta)
            }
        ).catch(
            (err)=>{
                res.send(err.message)
            }
        )
    }
)

//per le altre richieste:
app.use(
    (req,res)=>{
        res.send("Errore")
    }
)

app.listen(8080)