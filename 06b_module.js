const fs = require('fs');
const path = require('path');

function filenameExtensionCount(dir,ext, callback){
  fs.readdir(dir, (err,list) => {
    var filteredList = [];
    if (err) {
      callback(err);
    } else {
        list.forEach(file => {
          if(path.extname(file) === '.'+ ext) {
            filteredList.push(file);
          }
        });
        callback(null,filteredList);
      }
  });
}

module.exports = filenameExtensionCount;

//Their Solution

// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {

//    fs.readdir(dir, function (err, list) {
//      if (err)
//        return callback(err)

//      list = list.filter(function (file) {
//        return path.extname(file) === '.' + filterStr
//      })

//      callback(null, list)
//    })
//  }