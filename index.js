// write your code here
const http = require('http')

const server = http.createServer((req, res) => {
    //send headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //send body
    res.end("Hello world!!");

});

//listen for incoming connections
server.listen(8080, 'localhost', null, () => {
    //log message that the server is listening and on which port
    console.log("Server is listening on localhost:3030")
});