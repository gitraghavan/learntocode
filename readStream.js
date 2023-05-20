console.log ("Read HTML file from Views folder. Hello World!");

const fs = require ('fs');

const defaultBuffer = fs.readFileSync ('./views/index.html', (err, data) => {
    if (err) throw err;
    console.log (toString(data));
});

const base64 = fs.readFileSync ('./views/index.html', 'base64', (err, data) => {
    if (err) throw err;
    console.log (toString(data));
});

const utf8 = fs.readFileSync ('./views/index.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log (toString(data));
});

console.log (defaultBuffer);
console.log (base64);
console.log (utf8);
