// Core Imports
const express = require ('express');
const app = express ();
const path = require ('path');

const port = 6100;
const ip_address = '127.0.0.1';

app.use ('/app', express.static (path.join (__dirname, 'views')));

app.get ('/', (req, res) => {
	res.send ('Hello World!');
});

app.listen (port, () => {
	console.log(`App listening on port http://${ ip_address }:${ port }`);
});
