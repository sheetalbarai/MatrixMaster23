const http = require('http');
const fs   = require('fs');

// creating a local server 
//http.createServer(<callback>)
//callback function has objects(req, res)
//req- comes with various informations like url, req type(get, post..)
//res- used to send response to user in browser
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    /*
    //res.setHeader('Content-type', 'text/plain'); //set headers for responses type plaintext
    res.setHeader('Content-type', 'text/html');
    res.write('<h1>Hello in Response<h1>'); //simple text to be written on browser
    res.end();
    */

    //sending HTML file from views
    res.setHeader('Content-type', 'text/html');

    let path = "./views/";

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us': //redirect in case page is moved to /about then use this way
            res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end();
            break;
        case '/contact': //redirect in case page is moved to /about then use this way
            res.statusCode = 200;
            path += 'contact.html';
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    };
    
    
    //fs.readFile('./views/index.html',(err, data) =>{  //read a file index.html and send 
    fs.readFile(path,(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        } else {
            //res.write(data);  //if only 1 html to be send we can do it just res.end(data);
            //res.end();
            res.end(data);
        }
    })

});

//call listen method on server to make it live
//listen(<portnumber> <domain name>..like google.com, callback function- fires when we start listening to requests
server.listen(3000, 'localhost', () => {
    console.log('listening request on port 3000');
    
});
// localhost- like domain name - takes us to loopback IP address 127.0.0.1 which is your 
//own computer
//localhost ---------127.0.0.1------->own computer
//listen to request coming to our own computer

//port number are like 'doors' into a computer



//STATUS CODE
/*
common 
    200 - OKAY
    301 - Resource moved
    404 - Not found
    500 - Internal Server Error
all
    100 range = informational responses
    200 range = success codes
    300 range = codes of redirects
    400 range = user or client error codes
    500 range = server error codes
*/
