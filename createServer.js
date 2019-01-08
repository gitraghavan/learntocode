console.log ("Read HTML File and Serve. Hello World!");

const fs = require ('fs');
const http = require ('http');

const port = 6100;
const ip_address = '127.0.0.1';

http.createServer ((req, res) => {
    const htmlViews = fs.readFileSync ('./views/basic.html', 'utf8');
    res.writeHead (200, { 'Content-Type': 'text/html' });
    res.end (htmlViews);
}).listen (port, ip_address, () =>{
    console.log (`Server running on http://${ ip_address }:${ port }`);
});