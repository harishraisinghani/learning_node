const filenameExtensionCount = require('./06b_module');

filenameExtensionCount(process.argv[2], process.argv[3], (err,filteredList) => {
  if(err) throw err;
  filteredList.forEach(file => {
    console.log(file);
  });
});

//Their Solution

// var filterFn = require('./solution_filter.js')
//  var dir = process.argv[2]
//  var filterStr = process.argv[3]

//  filterFn(dir, filterStr, function (err, list) {
//    if (err)
//      return console.error('There was an error:', err)

//    list.forEach(function (file) {
//      console.log(file)
//    })
//  })