var mymodule = require('./mymodule.js')

function callback(err, data) {
  if(err) {
    console.log(err);
    return;
  }
  else {
    for (i=0;i<data.length;i++){
      console.log(data[i]);
    }
  }
  return;
}

mymodule(process.argv[2],process.argv[3],callback);