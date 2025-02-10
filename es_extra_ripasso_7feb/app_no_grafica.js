const express = require("express")
const fs = require("fs").promises
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/",
    (req,res)=>{
        // devo fornire la pagina con gli eventi di oggi
        fs.readFile("eventi.csv", "utf8").then(
            (data) => {
                const g = new Date().getDate()
                const m = new Date().getMonth() + 1
                const a = new Date().getFullYear()

                let risposta = ""

                const righe = data.split("\n")
                righe.forEach(
                    (r) => {
                        if(r!=""){
                            const gr = r.split(",")[1].split("-")[2]
                            const mr = r.split(",")[1].split("-")[1]
                            const ar = r.split(",")[1].split("-")[0]

                            if(g == gr && m == mr && a == ar){
                                risposta += r + "<br>"
                            }
                        }
                    }
                )
                risposta+="<a href='/nuovo_evento.html'>+</a>"
                res.send(risposta)
            }
        )
    }
)

app.post("/eventi/",
    (req,res)=>{
        const titolo = req.body.titolo
        const data = req.body.data
        const ora = req.body.ora
        const descrizione = req.body.descrizione

        fs.appendFile("eventi.csv", titolo+","+data+"-"+ora+","+descrizione+"\n").then(
            ()=>{
                res.redirect("/")
            }
        )
    }
)

app.listen(3000)