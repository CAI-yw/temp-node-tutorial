
const {readFile, writeFileSync, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    //console.log(result)
    //set up a call back 
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt','Here is the result: '+first+second,
        (err,result)=>{//call back 
            if(err){
                console.log(err)
                return;
            }
            //everything is correct, get the result
            //console.log(result)
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
/*
start
starting next task
done with this task
*/

//<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//if we dont provide uft8 coding, we get the buffer
//output: Hello this is the first text file
//output: undefined



/*
const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    'Here is the result: '+first+second,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')
/*output:
start
done with this task
starting the next one
*/



