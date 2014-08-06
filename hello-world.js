var fs = require('fs');
var myObject = {param1: 'hello', 
                param2: 'world'};
//console.log(fs);
//console.dir(fs);

for(var i = 0; i < process.argv.length; i++) {
  console.log('index: ' + i + ' argument: ' + process.argv[i]);
}

console.log(__dirname);
