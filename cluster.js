/**
 * Created by jacobsu on 15/4/29.
 */
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  if (numCPUs > 1) {
      //set cpu numbers to work on
      var finNumCPUs = parseInt(numCPUs/2);
      for (var i = 0; i < finNumCPUs; i++) {
        cluster.fork();
      }
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {

    //change this line to Your Node.js app entry point.
    require("./app.js");
}
