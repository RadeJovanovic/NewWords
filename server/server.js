var express = require('express') //refer to powerpoint
var app = express() //Refer to powerpoint
app.use(express.static('../client')) //app.use() sits on the server and wait for requests from the internet
//When those requests come in, they go through a pipeline of functions. So here, the first thing a request is going to do is that it is going to be checked as to whether it is in the root directory, which is the client folder (.. is back a folder from the server, then we go into the client folder)
app.listen(8080) //every computer has thousands of ports that you can turn on and off, in this case it is localhost.