// install zeromq
// npm install zeromq@6.0.0-beta.17
var zmq = require("zeromq");

var responder = zmq.socket("rep");

responder.on("message", function (request) {
  console.log("Received request: [", request.toString(), "]");

  setTimeout(function () {
    // Replace "Fred" with generated name
    responder.send("Fred");
  }, 1000);
});

responder.bind("tcp://*:5555", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on 5555...");
  }
});

process.on("SIGINT", function () {
  responder.close();
});
