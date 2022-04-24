
//OS module
const os = require('os') //looking for the built-in module
//os variable ^

//info about current user
const user =  os.userInfo()
console.log(user)
/* output:
{
  uid: 501,
  gid: 20,
  username: 'cai',
  homedir: '/Users/cai',
  shell: '/bin/zsh'
}
*/
//method returns the system uptime in seconds
console.log('The system uptime is', os.uptime(), 'seconds')
//The system uptime is 2337 seconds

const currentOS = {//object
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(currentOS)
/*
The system uptime is 2491 seconds
{
  name: 'Darwin',
  release: '19.6.0',
  totalMen: 17179869184,
  freeMem: 5243625472
}

*/



