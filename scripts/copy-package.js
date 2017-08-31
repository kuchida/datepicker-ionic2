
var fs = require('fs');

var packageJson = require('../package.json');
if (! packageJson) {
    throw new Error('Can\'t find package json');
}

delete packageJson.devDependencies;

console.log('Hi');
console.log(process.cwd());
//fs.mkdirSync('../dist');
fs.writeFile('../dist/package.json', JSON.stringify(packageJson, null, 2));
