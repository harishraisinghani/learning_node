const http = require('http');
const bl = require('bl');

var inputURLS = process.argv.splice(2);

function returnArray(arr) {
  arr.forEach(item => {
    console.log(item);
  });
}

function getDataMultiple(arrayURL, callback) {
  var result = [];
  arrayURL.forEach(url => {
    http.get(url, response => {
      response.pipe(bl((err,data) => {
        if (err){
          console.log("ERROR: ", err);
        } else {
          result[arrayURL.indexOf(url)] = data.toString();
          if (arrayURL.length === result.length){
            callback(result);
          }
        }
      }));
    });
  });

}

getDataMultiple(inputURLS, returnArray);

//Office Solution
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//  for (var i = 0; i < 3; i++)
//    console.log(results[i])
// }

// function httpGet (index) {
//  http.get(process.argv[2 + index], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err)
//        return console.error(err)

//      results[index] = data.toString()
//      count++

//      if (count == 3)
//        printResults()
//    }))
//  })
// }

// for (var i = 0; i < 3; i++)
//  httpGet(i)