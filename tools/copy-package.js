const fs = require('fs');
let resizable = fs.readFileSync('package.json').toString();
fs.writeFileSync('publish/package.json', resizable);