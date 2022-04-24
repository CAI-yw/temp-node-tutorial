
//local
const secret = 'Super Secret'
//share with rest of applications
const john = 'John'
const peter = 'Peter' 

//console.log(module) //run: node 4-names.js -> exports: {}
module.exports = {john, peter} 
//multiple ways to do this
//exports = an object