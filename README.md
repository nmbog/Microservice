CS 361 Email Generator Microservice

Instructions for use:
1. Install zeromq using: npm install zeromq@6.0.0-beta.17
2. Code from send_to_microservice.js can be inserted in with your name generator.
3. I've commented where you'll want to replace the current name placeholder with the name generated by your program.
4. Run the name generator file along with microservice.js - it will send a request to your name generator for the generated name, then log the randomly generated email address to the console.
 
![Send request](/images/request.png)

![Receive request](/images/respond.png)

![UML Sequence](/images/uml.png)
