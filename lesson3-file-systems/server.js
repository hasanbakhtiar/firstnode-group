let http = require("node:http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  
  switch (req.url) {
    case "/":
      fs.readFile("pages/index.html", (error, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      });
      break;

    case "/about":
      fs.readFile("pages/about.html", (error, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      });
      break;

    default:
      fs.readFile("pages/notfoundpage.html", (error, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      });

      break;
  }


});

server.listen(3012);
