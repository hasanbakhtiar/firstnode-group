
// console.log("Hello world");
// console.log("Hello node js");

let http = require('http');

// let server = http.createServer((req,res)=>{
// return res;
// });


// console.log(server);

let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader("Content-Type","text/html");
    res.write("<h1>Hello node js</h1>");
    
    
    res.end();
    });
    
    

server.listen(3012);



// console.log(http);