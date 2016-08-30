const http = require('http');
const bl = require('bl');

http.get(process.argv[2], response => {
  response.pipe(bl((err,data) => {
    if(err)
      return console.log(err);
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});

//Official Solution

// var http = require('http')
//  var bl = require('bl')

//  http.get(process.argv[2], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err)
//        return console.error(err)
//      data = data.toString()
//      console.log(data.length)
//      console.log(data)
//    }))
//  })