
//every file in node is a module (by default)

//assign to a variable ,start with './ or ../'
const sayHi = require('./5-utils')
const names = require('./4-names')
const data =  require('./6-alternative')
require('./7-mind-grenade')
//console.log(data)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
//*another option for the name:

//--------------------------------
//assign to a variable ,start with './ or ../'
const {john} = require('./4-names')
const sayHi = require('./5-utils')
//console.log(names)

const data =  require('./6-alternative')
//console.log(data)

//sayHi('Susan')
//sayHi(john)
//*another option for the name:
//const names = require('./4-names')
//sayHi(names.john)
//sayHi(names.peter)

require('./7-mind-grenade') //The sum is: 15
//when import a module, we actually invoke it



