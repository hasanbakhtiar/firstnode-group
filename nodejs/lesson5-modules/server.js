let http = require("node:http");
let fs = require("fs");
const router = require("./routes/routes");




const server = http.createServer(router);


server.listen(3012);
