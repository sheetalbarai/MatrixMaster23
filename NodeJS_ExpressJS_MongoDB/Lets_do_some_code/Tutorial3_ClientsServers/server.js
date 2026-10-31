const http = require('http');

// creating a local server 
//http.createServer(<callback>)
//callback function has objects(req, res)
//req- comes with various informations like url, req type(get, post..)
//res- used to send response to user in browser
const server = http.createServer((req, res) => {
    console.log('request made');
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
