const fs = require('fs');

//My Code
  // const inputFile = fs.readFileSync(process.argv[2]).toString();

  // const newLineArr = inputFile.split('\n');
  // console.log(newLineArr.length - 1);

//Can also do more simply:
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);