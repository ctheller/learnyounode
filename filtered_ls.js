var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];
var re = new RegExp("."+extension);

var callback = function(err, list) {
  for (i=0;i<list.length;i++){
    current = list[i];
    if (re.test(current)){
      console.log(current);
    }
  }
}

fs.readdir(directory, callback);