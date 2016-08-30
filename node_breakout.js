const http = require('http'); //returns whatever module.exports is in the http.js file. Is an OBJECT

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => { //createServer is a method because it's applied on the http object. req and res represent HTTP request/response object

  // Calling http.createServer(...) is the SAME as defining:
  //const http = {
    // createServer:function(callback) {
      //const request = {method: 'GET', path: '/'};
      //const response = {status:200, statusText: 'OK'};
      //callback(request,response)
    //}
  //}
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');//done with the webserver
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});