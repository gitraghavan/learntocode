const fs = require ('fs');
var http = require ('http');

const port = 6200;
const ip_address = '127.0.0.1';

http.createServer ((req, res) => {
    res.writeHead (200, { 'Content-Type': 'text/html' });
    fs.createReadStream ('./views/basic.html', 'utf8').pipe (res);
}).listen (port, ip_address, () =>{
    console.log (`Server running on http://${ ip_address }:${ port }`);
});