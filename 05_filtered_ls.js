const fs = require('fs');
const path = require('path');

//MY CODE
// fs.readdir(process.argv[2], function (err,list) {
//   if(err) throw err;
//   for (var i = 0; i < list.length; i++) {
//     if(path.extname(list[i]) === '.'+ process.argv[3]) {
//       console.log(list[i]);
//     }
//   }
// });

//Better Way to do this using JS forEach:
fs.readdir(process.argv[2], function (err, list) {
       list.forEach(function (file) {
         if (path.extname(file) === '.' + process.argv[3])
           console.log(file)
       })
     })