const express = require("express")
const fs = require("fs").promises
const app = express()

//primo punto:
app.get("/values/", 
    (req,res)=>{
        fs.readFile("values.txt", "utf8", {root: __dirname}).then(
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
app.get("/values/gt/:val", 
    (req,res)=>{
        const limite = req.params.val
        fs.readFile("values.txt", "utf8", {root: __dirname}).then(
            (data)=>{
                const lines = data.split("\n")
                let risposta = ""
                lines.forEach(
                    (line)=>{
                        if(parseInt(line)>parseInt(limite)){
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