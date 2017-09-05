const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./publish/package.json').toString());
delete packageJson.devDependencies;
delete packageJson.scripts;
fs.writeFileSync('./publish/package.json', JSON.stringify(packageJson, null, 2));