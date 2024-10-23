let http = require('node:http');


let server = http.createServer((req, res) => {


    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                <a href="/about">About</a>
                    <h1>Home</h1>
                </body>
                </html>
                `);
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(`
                    <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                <a href="/">Home</a>
                    <h1>About</h1>
                    
                </body>
                </html>
                `)
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" })
            res.write(`
                
                    <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h1>Sorry , not found page </h1>
                </body>
                </html>
                `);
            break;
    }


    // if (req.url === '/') {
    //     res.write("Home");
    // }else if(req.url==="/about"){
    //         res.write("about")
    // }else{
    //     res.write("404 not found")

    // }


    res.end();
});



server.listen(3012);

