var http = require("http");

const port = 8081
const httpServer = http.createServer(handleServer).listen(port);


function handleServer(req, res) {
    if(req.url == "/welcome"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        res.end();
    }
    if(req.url == "/contact"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com'
        }));
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'})
        res.end('error')
    }
}


module.exports = httpServer;