const amount = 9

if(amount < 10){
    console.log('smalle number');
}
else{
    console.log('larger number');
}

console.log(`it's my first node app`)
//-------------------
//2- globals in node
//globals - no window
// __dirname  - path to current directory
// __filename - file name
//require     - func to use modules
//module      - info about curr module(file)
//process     - info about the environment where the program si being excuted

console.log(__dirname);
setInterval(()=>{
    console.log('hello')
},1000)
//to stop: ctrl+c 
//to get to previous command: ^ tap 
//clear console: clear
//node + filename(app.js) to restart the app

//-----------------
//3-module in node