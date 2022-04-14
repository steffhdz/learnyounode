
const fs = require('fs');

let filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);