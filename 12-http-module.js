const http = require('http');

//2 parameters: incoming request, response is what we send back
const server = http.createServer((req,res)=>{
    //server is waiting for the request
    //console.log(req)//go back to the browser and refresh

    if(req.url === '/'){//homep age
        res.end('Welcome to our home page')//simply send the text
    }
    //res.write('Welcome to our home page')
    //res.end()

    if(req.url === '/about' ){
        res.end('Here is out short history')
    }

    //if user is asking for a page we dont have
    res.end(
    '<h1> oops! </h1>'+
    '<p> We cant seem to find the page you are looking for</p>'+
    '<a href="/">back home</a>')
})

server.listen(5000)
//google: localhost:5000
//localhost:5000/about