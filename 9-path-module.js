const path = require('path')

//platform seperator? output:/
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)
//output: /content/subfolder/test.txt

//get the base name? only want the last portion
const base = path.basename(filePath)
console.log(base) //test.txt

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
//point to the directory the app.js is located
console.log(absolute)
//output: /Users/cai/Desktop/tutorial/content/subfolder/test.txt