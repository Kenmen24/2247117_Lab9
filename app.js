//READING A JSON FILE
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('countries.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


//WRITING TO A JSON FILE
const bro = [
  {
      "name":"Rohit", 
      "age": 22
  },
  {
      "name":"Nandini", 
      "age":21
  },
  {
      "name":"Kenneth", 
      "age":21
  },
  {
      "name":"Nitendra", 
      "age":22
  },
  {
      "name":"Nancy", 
      "age":23
  }
]
'use strict';

var http3= require('http');
let jsonString = JSON.stringify(bro, null, 2);
http3.createServer(function (req, res) {

fs.writeFile('student-4.json', jsonString, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
console.log('This is after the write call');
}).listen(8000);

//ROUTING FEATURE IN NODE JS
var http2 = require('http');
http2.createServer(function (req, res) {
      
  // http header
  res.writeHead(200, {'Content-Type': 'text/html'}); 
    
  var url = 'index.html';
    
  if(url ==='/about') {
      res.write(' Welcome to about us page'); 
      res.end(); 
  }
  else if(url ==='/contact') {
      res.write(' Welcome to contact us page'); 
      res.end(); 
  }
  else {
      res.write('Hello World!'); 
      res.end(); 
  }
}).listen(3000, function() {
    
  // The server object listens on port 3000
  console.log("server start at port 3000");
});


//Sending the JSON response from the server to the client using json() function.

const express = require('express');
const app = express();
  

var data = {
    portal : "Udemy",
    knowledge : "unlimited",
    location : "USA"  
}
  
app.get('/' , (req,res)=>{
   // This will send the JSON data to the client.
    res.json(data); 
})
  
// Server setup
app.listen(4000 , ()=>{
    console.log("server running");
});