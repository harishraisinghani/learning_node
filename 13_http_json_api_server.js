const http = require('http');
const fs = require('fs');
const url = require('url');
var body = {};

function jsonParse(isodate) {
  var date = new Date(isodate);
  body = {
   "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds() 
  }
  return JSON.stringify(body);
}

function unixTimeParse(isodate) {
  var date = new Date(isodate);
  body = {
   "unixtime": date.getTime()
  }
  return JSON.stringify(body);
}


const server = http.createServer(function (req, res) {
 res.writeHead(200, { 'content-type': 'application/json' });
 var timeString = url.parse(req.url, true);
 var path = timeString.pathname;

 if (path === '/api/parsetime') {
  res.end(jsonParse(timeString.query["iso"]));
 } else {
    if (path === '/api/unixtime') {
      res.end(unixTimeParse(timeString.query["iso"]));
    }
 }
});

server.listen(Number(process.argv[2]));

//Official Solution

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//  return {
//    hour: time.getHours(),
//    minute: time.getMinutes(),
//    second: time.getSeconds()
//  }
// }

// function unixtime (time) {
//  return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//  var parsedUrl = url.parse(req.url, true)
//  var time = new Date(parsedUrl.query.iso)
//  var result

//  if (/^\/api\/parsetime/.test(req.url))
//    result = parsetime(time)
//  else if (/^\/api\/unixtime/.test(req.url))
//    result = unixtime(time)

//  if (result) {
//    res.writeHead(200, { 'Content-Type': 'application/json' })
//    res.end(JSON.stringify(result))
//  } else {
//    res.writeHead(404)
//    res.end()
//  }
// })
// server.listen(Number(process.argv[2]))