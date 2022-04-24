//non blocking code
//4 methods
const {readFileSync, writeFileSync} = require('fs');

/*another way:
const fs = require('fs');
fs.readFileSync
*/

//set up 2 variables
//provide 2 parameters
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first, second)
//output: Hello this is the first text file Hello this is the second text file

//if the file is not there, node will create one,
//if there, node will overwrite
writeFileSync('./content/result-sync.txt',
'Here is the result: '+first+second, {flag: 'a'})
//flag: 'a' -> append to the end
