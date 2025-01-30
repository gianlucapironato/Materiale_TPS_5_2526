var http = require("http")
var fs = require("fs").promises
var url = require("url")

http.createServer(
    (req,res)=>{
        parsedUrl = url.parse(req.url, true)

        let provincia = parsedUrl.query.provincia

        if(provincia && parsedUrl.pathname=="/eventi/"){
            // leggo il file, lo filtro e mando in risposta solo gli eventi per provincia
            fs.readFile("eventi_lombardia.csv", "utf-8").then(
                (data)=>{
                    let righe = data.split("\n")
                    res.writeHead(200,{"content-type":"text/html"})
                    righe.forEach(riga => {
                        if(riga.includes(provincia)){
                            res.write(riga+"<br>")
                        }
                    });
                    res.end()
                }
            ).catch(
                (err)=>{
                    res.writeHead(400, {"content-type": "text/html"})
                    res.end(err.message)
                }
            )
        }
        else{ // fornisco il form
            fs.readFile("index.html", "utf-8").then(
                (data)=>{
                    res.writeHead(200, {"content-type": "text/html"})
                    res.end(data)
                }
            ).catch(
                (err)=>{
                    res.writeHead(400, {"content-type": "text/html"})
                    res.end(err.message)
                }
            )
        }
    }
).listen(8080)