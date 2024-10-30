let http = require("node:http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile("pages/index.html", (error, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url === "/create" && req.method ==="POST") {

    const data = [];
    req.on("data",(chunk)=>{
      data.push(chunk);
      // console.log(chunk);
      
    })
    req.on("end",()=>{
      const result = Buffer.concat(data).toString();
      const parseData = result.split("=")[1];
  fs.appendFile("./data/text.txt",` ${parseData} `,(err)=>{
      
      if (err) {
        console.log(err);
        
      }else{


      
        res.statusCode = 302;
        res.setHeader("Location","/");
        res.end();
      }
    })
      
      
    })
  
  
    
    

  } else if (req.url === '/create') {
    fs.readFile("pages/create.html", (error, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("pages/notfoundpage.html", (error, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  }

});

server.listen(3012);
