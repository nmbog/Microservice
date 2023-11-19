var zmq = require("zeromq");

var requester = zmq.socket("req");

requester.on("message", function (reply) {
  console.log("Received name", ": [", reply.toString(), "]");
  user_name = reply.toString();
  const domain = "gmail.com";
  const randomNumber = Math.floor(Math.random() * 1000);
  const new_name = user_name + randomNumber;
  const email = `${new_name}@${domain}`;
  console.log(email);
  requester.close();
  process.exit(0);
});

requester.connect("tcp://localhost:5555");

console.log("Sending request...");
requester.send("Please provide generated name");

process.on("SIGINT", function () {
  requester.close();
});
