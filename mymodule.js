var fs = require('fs');

var expFunction = function(directoryName, extFilter, callback){
  var re = new RegExp("."+extFilter);
  fs.readdir(directoryName, function(err, list) {
    if (err) {
      return callback(err);
    }
    var output = [];
    for (i=0;i<list.length;i++){
      current = list[i];
      if (re.test(current)){
        output.push(current);
      }
    }
    return callback(null, output);
  });
}


module.exports = expFunction;