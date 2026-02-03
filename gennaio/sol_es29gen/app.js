const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer(
    (req,res)=>{
        res.writeHead(200, {"content-type": "text/html"});
        if (req.url === "/"){
            fs.readFile(
                "index.html",
                "utf-8",
                (err,data)=>{
                    if (err) {
                        res.end("Errore");
                    }
                    else{
                        res.end(data);
                    }
                }
            )
        }
        else if (req.url.startsWith("/eventi/")) {
            const parsedUrl = url.parse(req.url,true);
            const provincia = parsedUrl.query.provincia;

            fs.readFile(
                "eventi_lombardia.csv",
                "utf-8",
                (err,data)=>{
                    if (err) {
                        res.end("Errore");
                    }
                    else{
                        let tabella = "<table><thead><th>Nome</th><th>Mese</th><th>Comune</th></thead>";
                        data.split("\n").forEach(
                            (r)=>{
                                if (r.endsWith(provincia)) {
                                    tabella+="<tr><td>"+r.split(",")[0]+"</td><td>"+r.split(",")[2]+"</td><td>"+r.split(",")[4]+"</td></tr>"
                                }
                            }
                        )
                        tabella+="</table>";
                        res.end(tabella);
                    }
                }
            )

            // risposta sarà HTML contenente gli eventi in "provincia"

        }
        else{
            res.end("Pagina non trovata");//in tutti gli altri casi
        }
    }
).listen(8080);